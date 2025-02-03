import { ChartOptions } from 'chart.js'
import { IStatCard, TopUser } from '../types'

export const stats: IStatCard[] = [
	{ title: 'Umumiy daromad', value: '$5,000', change: 1.87 },
	{ title: 'Sotilgan mahsulotlar soni', value: 1423, change: 0.5 },
	{ title: 'Qaytgan mahsulotlar soni', value: 321, change: -1.27 },
]

export const topUsers: TopUser[] = [
	{ name: 'Nomi', code: '1234', amount: '90 ta' },
	{ name: 'Nomi', code: '1234', amount: '90 ta' },
	{ name: 'Nomi', code: '1234', amount: '90 ta' },
	{ name: 'Nomi', code: '1234', amount: '90 ta' },
	{ name: 'Nomi', code: '1234', amount: '90 ta' },
]

export const chartData = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
	datasets: [
		{
			label: 'Sotilgan',
			data: [400, 300, 450, 350, 500, 400],
			borderColor: 'rgb(59, 130, 246)',
			tension: 0.4,
		},
		{
			label: 'Qaytgan',
			data: [300, 400, 350, 450, 400, 350],
			borderColor: 'rgb(249, 115, 22)',
			tension: 0.4,
		},
	],
}

export const chartOptions: ChartOptions<'line'> = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			position: 'bottom' as const,
		},
	},
	scales: {
		y: {
			beginAtZero: true,
		},
	},
}