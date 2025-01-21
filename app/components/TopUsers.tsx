import { FC } from 'react'
import { TopUser } from '../types'
import Image from 'next/image'

interface TopUsersProps {
	users: TopUser[]
}

const TopUsers: FC<TopUsersProps> = ({ users }) => {
	return (
		<div className='bg-white  shadow p-5 rounded-3xl h-full'>
			<h3 className='font-semibold mb-3'>Top mahsulotlar</h3>
			<div className='space-y-2 '>
				<div className='flex items-center justify-between py-2'>
					<p>Maxsulot</p>
					<p>kod</p>
					<p>sotish</p>
				</div>
				{users.map((user, index) => (
					<div
						key={index}
						className='flex items-center justify-between py-2 m-0 border-t border-gray-500'
					>
						<div className='flex items-center'>
							<Image src='/next.svg' className='w-8 h-8 bg-gray-200 rounded-full' alt='user' />
							<p className='font-medium ml-5'>{user.name}</p>
						</div>
						<p className='text-sm  mr-8'>{user.code}</p>
						<span className='text-sm font-medium'>{user.amount}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default TopUsers
