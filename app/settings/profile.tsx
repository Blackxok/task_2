import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { FaPencil } from 'react-icons/fa6'

export default function ProfileContent() {
	return (
		<div className='max-w-4xl p-6 bg-white  rounded-3xl'>
			{/* Title */}
			<h3 className='text-2xl font-bold text-gray-800 mb-6'>Mening profilim</h3>

			{/* Profile Section */}
			<div className='flex items-center p-4 border border-gray-200 rounded-3xl  mb-6'>
				{/* Profile Image */}
				<Image
					src='/next.svg'
					alt='avatar'
					className='w-16 h-16 rounded-full border border-gray-300 mr-4'
				/>
				{/* Profile Info */}
				<div className='flex-1'>
					<h4 className='text-lg font-bold text-gray-800'>John Doe</h4>
					<p className='text-sm text-gray-500'>#95898215</p>
				</div>
				{/* Edit Button */}
				<Button
					variant={'outline'}
					className='flex items-center gap-2 px-4 py-2 rounded-3xl transition'
				>
					<span>Tuzatish</span>
					<FaPencil />
				</Button>
			</div>

			{/* User Info Section */}
			<div className='p-4 border border-gray-200 rounded-3xl'>
				<div className='flex items-center justify-between mb-4'>
					<span className='text-lg font-semibold text-gray-800'>User Info</span>
					<Button
						variant={'outline'}
						className='flex items-center gap-2 px-4 py-2 rounded-3xl transition'
					>
						<span>Tuzatish</span>
						<FaPencil />
					</Button>
				</div>

				{/* User Details */}
				<div className='space-y-4'>
					<div className='flex justify-between'>
						<p className='font-medium text-gray-600'>First Name:</p>
						<p className='text-gray-800 font-semibold'>John</p>
					</div>
					<div className='flex justify-between'>
						<p className='font-medium text-gray-600'>Last Name:</p>
						<p className='text-gray-800 font-semibold'>Doe</p>
					</div>
					<div className='flex justify-between'>
						<p className='font-medium text-gray-600'>Email:</p>
						<p className='text-gray-800 font-semibold'>johndoe@example.com</p>
					</div>
					<div className='flex justify-between'>
						<p className='font-medium text-gray-600'>Phone:</p>
						<p className='text-gray-800 font-semibold'>+123 456 789</p>
					</div>
				</div>
			</div>
		</div>
	)
}
