export interface AuthContextType {
	isAuth: boolean
	setIsAuth: (isAuth: boolean) => void
	logout: () => void
	login: (access_token: string, refresh_token: string) => void
	user: UserType | null
	refreshAccessToken: (refreshToken: string) => Promise<string>
}

export type UserType = {
	id: number
	phone_number: string
	// Qo'shimcha user fieldlarini qo'shishingiz mumkin
}
