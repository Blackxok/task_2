'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface AuthContextType {
	isAuth: boolean
	setIsAuth: (auth: boolean) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [isAuth, setIsAuth] = useState<boolean>(false)

	useEffect(() => {
		const token = localStorage.getItem('authToken')
		setIsAuth(!!token) // Token bo‘lsa true, bo‘lmasa false
	}, [])

	return <AuthContext.Provider value={{ isAuth, setIsAuth }}>{children}</AuthContext.Provider>
}

export function useAuth() {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}
