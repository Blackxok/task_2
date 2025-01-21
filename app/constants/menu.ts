import { MenuItem } from '../types'

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
		path: '/products',
	},
	{
		id: 'add-product',
		title: "Mahsulot qo'shish",
		icon: '➕',
		path: '/add-product',
	},
	{
		id: 'returns',
		title: 'Qaytarilgan mahsulotlar',
		icon: '↩️',
		path: '/returns',
	},
	{
		id: 'history',
		title: 'Savdo tarixi',
		icon: '📜',
		path: '/history',
	},
	{
		id: 'notifications',
		title: 'Bildirish nomalar',
		icon: '🔔',
		path: '/notifications',
	},
	{
		id: 'settings',
		title: 'Sozlamalar',
		icon: '⚙️',
		path: '/settings',
	},
]
