import { TrendingDown, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'
import { IStatCard } from '../types'

interface StatCardProps {
	data: IStatCard
}

const StatCard: FC<StatCardProps> = ({ data }) => {
	const isPositive = data.change > 0

	return (
		<div className='bg-[rgba(255,245,235,1)] p-4 rounded-3xl shadow'>
			<div className='flex flex-col'>
				{/* Icon, Value, and Title */}
				<div className='flex flex-row items-center'>
					<Image
						src='/dolar.svg'
						alt={data.title}
						className='w-10 h-10 md:w-12 md:h-12 rounded-full'
						width={8}
						height={8}
					/>
					<div className='mx-3'>
						<h3 className='text-xl md:text-2xl font-bold'>{data.value}</h3>
						<p className='text-gray-500 text-sm'>{data.title}</p>
					</div>
				</div>

				{/* Change Percentage */}
				<div className='flex flex-row text-gray-500 items-center mt-4 md:mt-8'>
					<div
						className={`items-center flex flex-row ${
							isPositive ? 'text-green-500' : 'text-red-500'
						}`}
					>
						{isPositive ? (
							<TrendingUp className='w-4 h-4 mr-1' />
						) : (
							<TrendingDown className='w-4 h-4 mr-1' />
						)}
						<span>{Math.abs(data.change)}%</span>
					</div>
					<span className='text-sm mx-2 md:mx-5'>oxirgi kundan</span>
				</div>
			</div>
		</div>
	)
}

export default StatCard
