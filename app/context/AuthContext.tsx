'use client'
import { useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'
import { AuthContextType, UserType } from '../types/authContext'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [isAuth, setIsAuth] = useState<boolean>(false)
	const [user, setUser] = useState<UserType | null>(null)
	const router = useRouter()

	useEffect(() => {
		const checkAuth = async () => {
			const accessToken = localStorage.getItem('access_token')
			const refreshToken = localStorage.getItem('refresh_token')

			// Check token existence
			if (accessToken && refreshToken) {
				try {
					await fetchUserData(accessToken)
					setIsAuth(true)
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
		const handleStorageChange = (e: StorageEvent) => {
			if (e.key === 'access_token' || e.key === 'refresh_token') {
				setIsAuth(!!(localStorage.getItem('access_token') && localStorage.getItem('refresh_token')))
				if (!localStorage.getItem('refresh_token')) {
					setUser(null)
				}
			}
		}

		window.addEventListener('storage', handleStorageChange)
		return () => {
			window.removeEventListener('storage', handleStorageChange)
		}
	}, [])

	const fetchUserData = async (token: string) => {
		try {
			const response = await fetch('https://newera1.pythonanywhere.com/account/me/', {
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json',
				},
			})

			if (!response.ok) {
				const errorData = await response.json()
				console.error('Error fetching user data:', errorData)
				logout()
			} else {
				const userData = await response.json()
				setUser(userData)
			}
		} catch (error) {
			console.error('Error fetching user data:', error)
			logout()
		}
	}

	const login = (access_token: string, refresh_token: string) => {
		localStorage.setItem('access_token', access_token)
		localStorage.setItem('refresh_token', refresh_token)
		setIsAuth(true)
	}

	const logout = () => {
		localStorage.removeItem('access_token')
		localStorage.removeItem('refresh_token')
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
