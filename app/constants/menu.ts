import { MenuItem } from '@/app/types'

export const MENU_ITEMS: MenuItem[] = [
	{
		id: 'dashboard',
		title: 'Boshqaruv paneli',
		icon: '📊',
		path: '/dashboard',
	},
	{
		id: 'products',
		title: 'Mahsulotlar katalogi',
		icon: '📦',
		path: '/dashboard/products',
	},
	{
		id: 'add-product',
		title: "Mahsulot qo'shish",
		icon: '➕',
		path: '/dashboard/add-product',
	},
	{
		id: 'returns',
		title: 'Qaytarilgan mahsulotlar',
		icon: '↩️',
		path: '/dashboard/returns',
	},
	{
		id: 'history',
		title: 'Savdo tarixi',
		icon: '📜',
		path: '/dashboard/history',
	},
	{
		id: 'notifications',
		title: 'Bildirish nomalar',
		icon: '🔔',
		path: '/dashboard/notifications',
	},
	{
		id: 'settings',
		title: 'Sozlamalar',
		icon: '⚙️',
		path: '/dashboard/settings',
	},
]
