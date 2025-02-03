'use client'
import LineChart from '../components/LineChart/linechart'
import { stats, topUsers } from '../constants/statisticDashboard'
import StatCard from './_components/StatCard'
import TopUsers from './_components/TopUsers'

const Page: React.FC = () => {
	return (
		<main className='min-h-screen'>
			<div className='flex flex-col lg:flex-row gap-5 items-center'>
				<div className='md:col-span-6 space-y-4 w-full'>
					<div className='flex flex-col gap-5'>
						{stats.map(stat => (
							<StatCard key={stat.title} data={stat} />
						))}
					</div>
				</div>
				<div className='md:col-span-6 w-full'>
					<TopUsers users={topUsers} />
				</div>
			</div>
			<LineChart />
		</main>
	)
}

export default Page
