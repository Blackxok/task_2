// components/LineChart.tsx
'use client'
import { chartData, chartOptions } from '@/app/constants/statisticDashboard'
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
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const LineChart: React.FC = () => {
	return (
		<div className='bg-white rounded-3xl shadow md:p-6 mt-6 p-6 h-64 md:h-96 !pb-10'>
			<h3 className='font-semibold text-black'>Kunlik hisobot</h3>
			<Line data={chartData} options={chartOptions} />
		</div>
	)
}

export default LineChart
