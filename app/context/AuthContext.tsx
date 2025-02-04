'use client'

import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'
import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { AuthContextType, UserType } from '../types/authContext'

// Cookie utilitalar
const Cookies = {
	set: (name: string, value: string, days = 7) => {
		try {
			const d = new Date()
			d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000)
			const expires = 'expires=' + d.toUTCString()
			document.cookie = `${name}=${value};${expires};path=/;SameSite=Strict`
			console.log(`Cookie "${name}" muvaffaqiyatli o'rnatildi`)
		} catch (error) {
			console.error(`Cookie o'rnatishda xatolik: ${error}`)
		}
	},

	get: (name: string): string | null => {
		try {
			const nameEQ = name + '='
			const ca = document.cookie.split(';')
			for (let i = 0; i < ca.length; i++) {
				let c = ca[i]
				while (c.charAt(0) === ' ') c = c.substring(1, c.length)
				if (c.indexOf(nameEQ) === 0) {
					const value = c.substring(nameEQ.length, c.length)
					console.log(`Cookie "${name}" qiymati: ${value}`)
					return value
				}
			}
			console.log(`Cookie "${name}" topilmadi`)
			return null
		} catch (error) {
			console.error(`Cookie olishda xatolik: ${error}`)
			return null
		}
	},

	remove: (name: string) => {
		try {
			document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'
			console.log(`Cookie "${name}" o'chirildi`)
		} catch (error) {
			console.error(`Cookie o'chirishda xatolik: ${error}`)
		}
	},
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const API_URL = 'https://newera1.pythonanywhere.com'

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [isAuth, setIsAuth] = useState<boolean>(false)
	const [user, setUser] = useState<UserType | null>(null)
	const router = useRouter()
	const { toast } = useToast()

	// Token yangilash funksiyasi
	const refreshAccessToken = async (refreshToken: string) => {
		try {
			const response = await fetch(`${API_URL}/auth/token/refresh/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ refresh: refreshToken }),
			})

			if (response.ok) {
				const data = await response.json()
				Cookies.set('access_token', data.access)
				return data.access
			} else {
				throw new Error('Token yangilashda xatolik')
			}
		} catch (error) {
			console.error('Token yangilashda xatolik:', error)
			throw error
		}
	}

	// User ma'lumotlarini olish
	const fetchUserData = useCallback(
		async (token: string) => {
			try {
				const response = await fetch(`${API_URL}/company/me/`, {
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json',
					},
				})

				if (response.status === 401) {
					// Token eskirgan bo'lsa, yangilashga harakat qilamiz
					const refreshToken = Cookies.get('refresh_token')
					if (refreshToken) {
						const newToken = await refreshAccessToken(refreshToken)
						return fetchUserData(newToken)
					} else {
						throw new Error('Refresh token mavjud emas')
					}
				}

				if (!response.ok) {
					const errorData = await response.json()
					console.error('Foydalanuvchi malumotlarini olishda xatolik:', errorData)
					toast({
						variant: 'destructive',
						title: 'Xatolik',
						description: 'Foydalanuvchi malumotlarini olishda xatolik yuz berdi',
					})
					throw new Error(errorData.message || 'Server xatosi')
				}

				const userData = await response.json()
				console.log("Foydalanuvchi ma'lumotlari:", userData)
				setUser(userData)
				// toast({
				// 	title: 'Muvaffaqiyatli',
				// 	description: 'Xush kelibsiz!',
				// })
			} catch (error) {
				console.error("Foydalanuvchi ma'lumotlarini olishda xatolik:", error)
				toast({
					variant: 'destructive',
					title: 'Xatolik',
					description: 'Serverda xatolik yuz berdi',
				})
				throw error
			}
		},
		[toast],
	)
	
	// Logout funksiyasi
	const logout = useCallback(() => {
		try {
			Cookies.remove('access_token')
			Cookies.remove('refresh_token')
			setIsAuth(false)
			setUser(null)
			router.push('/login')
			toast({
				title: 'Muvaffaqiyatli',
				description: 'Tizimdan chiqildi',
			})
			console.log('Logout muvaffaqiyatli')
		} catch (error) {
			console.error('Logout jarayonida xatolik:', error)
			toast({
				variant: 'destructive',
				title: 'Xatolik',
				description: 'Tizimdan chiqishda xatolik yuz berdi',
			})
		}
	}, [router, toast])

	// Dastur ishga tushganda auth holatini tekshirish
	useEffect(() => {
		const checkAuth = async () => {
			try {
				const accessToken = Cookies.get('access_token')
				const refreshToken = Cookies.get('refresh_token')
				console.log('Auth tekshiruvi boshlandi')

				if (accessToken && refreshToken) {
					try {
						await fetchUserData(accessToken)
						setIsAuth(true)
						console.log('Autentifikatsiya muvaffaqiyatli')
					} catch (error) {
						console.error('Autentifikatsiya xatosi:', error)
						logout()
					}
				} else {
					console.log('Tokenlar topilmadi')
					logout()
				}
			} catch (error) {
				console.error('Auth tekshirishda xatolik:', error)
			}
		}

		checkAuth()
	}, [fetchUserData, logout])

	// Cookie o'zgarishlarini kuzatish
	useEffect(() => {
		const checkCookieChange = () => {
			const hasTokens = !!(Cookies.get('access_token') && Cookies.get('refresh_token'))

			if (isAuth !== hasTokens) {
				console.log("Cookie holati o'zgardi:", hasTokens ? 'aktiv' : 'noaktiv')
				setIsAuth(hasTokens)

				if (!hasTokens) {
					setUser(null)
					console.log("Tokenlar yo'qoldi, foydalanuvchi ma'lumotlari tozalandi")
				}
			}
		}

		const intervalId = setInterval(checkCookieChange, 1000)
		return () => clearInterval(intervalId)
	}, [isAuth])

	// Login funksiyasi
	const login = async (access_token: string, refresh_token: string) => {
		try {
			Cookies.set('access_token', access_token)
			Cookies.set('refresh_token', refresh_token)
			setIsAuth(true)
			await fetchUserData(access_token)
			toast({
				title: 'Muvaffaqiyatli',
				description: 'Tizimga muvaffaqiyatli kirdingiz LOGIN',
			})
			console.log('Login muvaffaqiyatli')
		} catch (error) {
			console.error('Login jarayonida xatolik:', error)
			toast({
				variant: 'destructive',
				title: 'Xatolik',
				description: 'Tizimga kirishda xatolik yuz berdi',
			})
		}
	}

	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setIsAuth,
				logout,
				login,
				user,
				refreshAccessToken,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useAuth AuthProvider ichida ishlatilishi kerak')
	}
	return context
}
