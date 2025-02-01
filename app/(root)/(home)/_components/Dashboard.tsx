'use client'
import {
	CategoryScale,
	Chart as ChartJS,
	ChartOptions,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { IStatCard as StatCardType, TopUser } from '../../../../types'
import StatCard from './StatCard'
import TopUsers from './TopUsers'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const Dashboard: React.FC = () => {
	const stats: StatCardType[] = [
		{ title: 'Umumiy daromad', value: '$5,000', change: 1.87 },
		{ title: 'Sotilgan mahsulotlar soni', value: 1423, change: 0.5 },
		{ title: 'Qaytgan mahsulotlar soni', value: 321, change: -1.27 },
	]

	const topUsers: TopUser[] = [
		{ name: 'Nomi', code: '1234', amount: '90 ta' },
		{ name: 'Nomi', code: '1234', amount: '90 ta' },
		{ name: 'Nomi', code: '1234', amount: '90 ta' },
		{ name: 'Nomi', code: '1234', amount: '90 ta' },
		{ name: 'Nomi', code: '1234', amount: '90 ta' },
	]

	const chartData = {
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

	const chartOptions: ChartOptions<'line'> = {
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

	return (
		<div className='min-h-screen'>
			{/* Statistika va Top Users bo‘limi */}
			<div className='flex flex-col lg:flex-row gap-5 items-center'>
				{/* Statistika (6 ustun) */}
				<div className='md:col-span-6 space-y-4 w-full'>
					<div className='flex flex-col gap-5'>
						{stats.map(stat => (
							<StatCard key={stat.title} data={stat} />
						))}
					</div>
				</div>

				{/* Top mahsulotlar (6 ustun) */}
				<div className='md:col-span-6 w-full'>
					<TopUsers users={topUsers} />
				</div>
			</div>

			{/* Kunlik hisobot bo‘limi */}
			<div className='bg-white rounded-3xl shadow md:p-6 mt-6 p-6 h-64 md:h-96 !pb-10'>
				<h3 className='font-semibold text-black'>Kunlik hisobot</h3>
				<Line data={chartData} options={chartOptions} />
			</div>
		</div>
	)
}

export default Dashboard
