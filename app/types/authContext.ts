export type AuthContextType = {
	isAuth: boolean
	setIsAuth: (auth: boolean) => void
	logout: () => void
	login: (access_token: string, refresh_token: string) => void
	user: UserType | null
}

export type UserType = {
	id: number
	phone_number: string
	// Qo'shimcha user fieldlarini qo'shishingiz mumkin
}
