export interface IStatCard {
	title: string
	value: string | number
	change: number
}

export interface TopUser {
	name: string
	code: string
	amount: string
}
export interface MenuItem {
	id: string
	title: string
	icon: string
	path: string
}

export interface IProduct {
	name: string
	code: string
	remaining: number
	price: number
	rating: number
	reviews: number
	category: string
}
