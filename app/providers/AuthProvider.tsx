'use client'

import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { UserType } from '../types/authContext'
import { fetchUserData, refreshAccessToken } from '../utils/apiUtils'
import Cookies from '../utils/cookieUtils'

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [isAuth, setIsAuth] = useState<boolean>(false)
	const [user, setUser] = useState<UserType | null>(null)
	const router = useRouter()
	const { toast } = useToast()

	const logout = useCallback(() => {
		try {
			Cookies.remove('access_token')
			Cookies.remove('refresh_token')
			setIsAuth(false)
			setUser(null)
			router.push('/login')
			toast({
				description: 'Tizimdan chiqildi',
			})
		} catch (error) {
			console.error('Logout jarayonida xatolik:', error)
			toast({
				variant: 'destructive',
				description: 'Tizimdan chiqishda xatolik yuz berdi',
			})
		}
	}, [router, toast])

	const login = async (access_token: string, refresh_token: string) => {
		try {
			// Cookie-larni xavfsiz opsiyalar bilan saqlash
			Cookies.set('access_token', access_token, {
				days: 7,
				secure: true,
				sameSite: 'Strict',
			})
			Cookies.set('refresh_token', refresh_token, {
				days: 30,
				secure: true,
				sameSite: 'Strict',
			})

			setIsAuth(true)

			const userData = await fetchUserData(access_token)
			setUser(userData)

			toast({
				description: 'Tizimga muvaffaqiyatli kirdingiz',
			})

			router.push('/dashboard')
		} catch (error) {
			console.error('Login jarayonida xatolik:', error)
			toast({
				variant: 'destructive',
				description: 'Tizimga kirishda xatolik yuz berdi',
			})
		}
	}

	// Dastur ishga tushganda auth holatini tekshirish
	useEffect(() => {
		const checkAuth = async () => {
			try {
				const accessToken = Cookies.get('access_token')
				const refreshToken = Cookies.get('refresh_token')

				if (accessToken && refreshToken) {
					try {
						const userData = await fetchUserData(accessToken)
						setUser(userData)
						setIsAuth(true)
					} catch (error) {
						console.error('Autentifikatsiya xatosi:', error)
						logout()
					}
				} else {
					logout()
				}
			} catch (error) {
				console.error('Auth tekshirishda xatolik:', error)
			}
		}

		checkAuth()
	}, [logout])

	// Cookie o'zgarishlarini kuzatish
	useEffect(() => {
		// CookieManager onChange listener orqali kuzatish
		const unsubscribe = Cookies.onChange(() => {
			const accessToken = Cookies.get('access_token')
			const refreshToken = Cookies.get('refresh_token')
			const hasTokens = !!(accessToken && refreshToken)

			if (isAuth !== hasTokens) {
				setIsAuth(hasTokens)

				if (!hasTokens) {
					setUser(null)
				} else if (!user) {
					// Agar tokenlar bor, lekin user yo'q bo'lsa
					fetchUserData(accessToken!)
						.then(userData => setUser(userData))
						.catch(error => {
							console.error("Foydalanuvchi ma'lumotlarini olishda xatolik:", error)
							logout()
						})
				}
			}
		})

		// Cleanup function
		return () => unsubscribe()
	}, [isAuth, user, logout])

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
