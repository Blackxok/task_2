'use client'
import { products } from '@/app/constants/product'
import { useEffect } from 'react'
import { Line } from 'react-chartjs-2'

import ProductBox from '@/app/components/productBox/productBox'
import Search from '@/app/components/search/search'
import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
} from 'chart.js'
import { FaRegCalendarXmark } from 'react-icons/fa6'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

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

const chartOptions = {
	responsive: true,
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

export default function ReturnsPage() {
	// Simulate async loading of products or data
	useEffect(() => {
		setTimeout(() => {}, 1000) // Simulate 1 second loading time
	}, [])

	return (
		<div>
			<Search />
			<div className='flex items-center flex-col gap-5 mt-5'>
				{/* Show loading state */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{products.map(product => (
						<ProductBox key={product.code} product={product} />
					))}
				</div>
				<div className='bg-white rounded-lg shadow p-6 mt-6 w-full'>
					<div className='flex items-center justify-between'>
						<h3 className='font-semibold mb-4'>Qaytish statistikasi</h3>
						<div className='flex items-center gap-2 mr-3'>
							<FaRegCalendarXmark />
							<span>01.02.2025</span>
						</div>
					</div>
					<Line data={chartData} options={chartOptions} />
				</div>
			</div>
		</div>
	)
}
