'use client'

import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'
import { AuthContextType, UserType } from '../types/authContext'

const Cookies = {
	set: (name: string, value: string, days = 7) => {
		const d = new Date()
		d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000)
		const expires = 'expires=' + d.toUTCString()
		document.cookie = `${name}=${value};${expires};path=/;SameSite=Strict`
	},

	get: (name: string): string | null => {
		const nameEQ = name + '='
		const ca = document.cookie.split(';')
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i]
			while (c.charAt(0) === ' ') c = c.substring(1, c.length)
			if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
		}
		return null
	},

	remove: (name: string) => {
		document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'
	},
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [isAuth, setIsAuth] = useState<boolean>(false)
	const [user, setUser] = useState<UserType | null>(null)
	const router = useRouter()
	const { toast } = useToast()

	useEffect(() => {
		const checkAuth = async () => {
			const accessToken = Cookies.get('access_token')
			const refreshToken = Cookies.get('refresh_token')
			console.log(`Access token checkAuth: ${accessToken}`)

			if (accessToken && refreshToken) {
				try {
					await fetchUserData(accessToken)
					setIsAuth(true)
					console.log(`isAuth: ${isAuth}`)
				} catch {
					logout()
				}
			} else {
				logout()
			}
		}

		checkAuth()
	}, [])

	useEffect(() => {
		const checkCookieChange = () => {
			const hasTokens = !!(Cookies.get('access_token') && Cookies.get('refresh_token'))
			if (isAuth !== hasTokens) {
				setIsAuth(hasTokens)
				console.log(`isAuth: ${hasTokens}`)
				if (!Cookies.get('refresh_token')) {
					setUser(null)
					console.log('refresh token not found')
				}
			}
		}

		const intervalId = setInterval(checkCookieChange, 1000)
		return () => clearInterval(intervalId)
	}, [isAuth])

	const fetchUserData = async (token: string) => {
		try {
			const response = await fetch('https://newera1.pythonanywhere.com/company/me/', {
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json',
				},
			})

			if (!response.ok) {
				const errorData = await response.json()
				// console.error('Error fetching user data:', errorData)
				logout()
			} else {
				const userData = await response.json()
				setUser(userData)
			}
		} catch (error) {
			toast({
				variant: 'destructive',
				description: 'There was a problem with your request. "company/me/"',
			})
		}
	}

	const login = (access_token: string, refresh_token: string) => {
		Cookies.set('access_token', access_token)
		Cookies.set('refresh_token', refresh_token)
		setIsAuth(true)
	}

	const logout = () => {
		Cookies.remove('access_token')
		Cookies.remove('refresh_token')
		setIsAuth(false)
		setUser(null)
		router.push('/login')
	}

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth, logout, login, user }}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}
