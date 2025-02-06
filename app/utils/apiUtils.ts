import { toast } from '@/hooks/use-toast'
import { UserType } from '../types/authContext'
import Cookies from './cookieUtils'

export const refreshAccessToken = async (refreshToken: string) => {
	try {
		const response = await fetch(`https://newera1.pythonanywhere.com/auth/token/refresh/`, {
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

export const fetchUserData = async (token: string): Promise<UserType> => {
	try {
		const response = await fetch(`https://newera1.pythonanywhere.com/company/me/`, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		})

		if (response.status === 401) {
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
		return userData
	} catch (error) {
		console.error("Foydalanuvchi ma'lumotlarini olishda xatolik:", error)
		toast({
			variant: 'destructive',
			title: 'Xatolik',
			description: 'Serverda xatolik yuz berdi',
		})
		throw error
	}
}
