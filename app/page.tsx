'use client'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
	const router = useRouter()
	const { isAuth } = useAuth()

	useEffect(() => {
		if (isAuth) {
			router.replace('/dashboard') // Agar autentifikatsiya qilingan bo'lsa, dashboardga o'tish
		} else {
			router.replace('/login') // Aks holda login sahifasiga o'tish
		}
	}, [isAuth, router])

	return null
}
