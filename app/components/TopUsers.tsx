import Image from 'next/image'
import { FC } from 'react'
import { TopUser } from '../types'

interface TopUsersProps {
	users: TopUser[]
}

const TopUsers: FC<TopUsersProps> = ({ users }) => {
	return (
		<div className='bg-white shadow p-4 md:p-5 rounded-3xl h-full'>
			<h3 className='font-semibold mb-3'>Top mahsulotlar</h3>
			<div className='space-y-2'>
				{/* Table Header */}
				<div className='flex items-center justify-between py-2'>
					<p className='text-sm md:text-base'>Maxsulot</p>
					<p className='text-sm md:text-base'>kod</p>
					<p className='text-sm md:text-base'>sotish</p>
				</div>

				{/* User List */}
				{users.map((user, index) => (
					<div
						key={index}
						className='flex items-center justify-between py-2 border-t border-gray-200'
					>
						<div className='flex items-center'>
							<Image
								src='/next.svg'
								className='w-6 h-6 md:w-8 md:h-8 bg-gray-200 rounded-full'
								alt='user'
								width={8}
								height={8}
							/>
							<p className='font-medium text-sm md:text-base ml-3 md:ml-5'>{user.name}</p>
						</div>
						<p className='text-sm mr-4 md:mr-8'>{user.code}</p>
						<span className='text-sm font-medium'>{user.amount}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default TopUsers
