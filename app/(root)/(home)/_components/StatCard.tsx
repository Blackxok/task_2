import { TrendingDown, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'
import { IStatCard } from '../../../../types'

interface StatCardProps {
	data: IStatCard
}

const StatCard: FC<StatCardProps> = ({ data }) => {
	const isPositive = data.change > 0

	return (
		<div className='bg-[rgba(255,245,235,1)] p-4 rounded-3xl shadow'>
			<div className='flex flex-row justify-between py-4'>
				{/* Ikon, Qiymat va Sarlavha */}
				<div className='flex items-center gap-3'>
					<Image
						src='/dolar.svg'
						alt={data.title}
						className='w-12 h-12 rounded-full'
						width={48}
						height={48}
					/>
					<div>
						<h3 className='text-xl md:text-2xl font-bold'>{data.value}</h3>
						<p className='text-gray-500 text-sm'>{data.title}</p>
					</div>
				</div>

				{/* O‘zgarish foizi */}
				<div className='flex flex-col items-center text-gray-500'>
					<div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
						{isPositive ? (
							<TrendingUp className='w-4 h-4 mr-1' />
						) : (
							<TrendingDown className='w-4 h-4 mr-1' />
						)}
						<span>{Math.abs(data.change)}%</span>
					</div>
					<span className='text-sm ml-4'>oxirgi kundan</span>
				</div>
			</div>
		</div>
	)
}

export default StatCard
