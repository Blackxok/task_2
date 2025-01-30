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
				{/* Jadval sarlavhasi */}
				<div className='flex items-center justify-between py-2'>
					<p className='text-sm md:text-base'>Maxsulot</p>
					<p className='text-sm md:text-base'>Kod</p>
					<p className='text-sm md:text-base'>Sotish</p>
				</div>

				{/* Foydalanuvchi ro‘yxati */}
				{users.map((user, index) => (
					<div
						key={index}
						className='flex items-center justify-between py-2 border-t border-gray-200'
					>
						<div className='flex items-center'>
							<Image
								src='/next.svg'
								className='w-8 h-8 bg-gray-200 rounded-full'
								alt='user'
								width={32}
								height={32}
							/>
							<p className='font-medium text-sm md:text-base ml-4'>{user.name}</p>
						</div>
						<p className='text-sm'>{user.code}</p>
						<span className='text-sm font-medium'>{user.amount}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default TopUsers
