import React from 'react'
import { FaImage } from 'react-icons/fa6'
import SearchBar from '../searchBar/SearchBar'
import { Button } from '../ui/button'

type EditProductProps = {
	title: string
}

const EditProduct: React.FC<EditProductProps> = ({ title }) => {
	return (
		<div className='bg-white rounded-3xl p-6 shadow-lg relative'>
			<div className='flex flex-col items-center justify-between'>
				<span className='text-lg sm:text-xl font-semibold'>{title}</span>
				<SearchBar className='bg-gray-300 w-full' />
			</div>
			<div className='flex flex-col gap-5 mt-3'>
				<div className='flex items-center justify-center bg-slate-200 rounded-3xl'>
					<FaImage size={145} />
				</div>
				<div className='relative flex-1 h-auto sm:h-[calc(430px-16rem)] flex flex-col justify-between'>
					<div className='flex flex-col space-y-2'>
						<h2 className='text-xl sm:text-2xl font-semibold text-gray-800 truncate'>
							Product name
						</h2>
						<p className='text-gray-500 text-sm sm:text-base'>
							Code: <span className='text-gray-700'>_</span>
						</p>
						<p className='text-gray-800 font-bold text-lg sm:text-xl'>
							Narxi: <span className='text-green-600'>_</span>
						</p>
						<p className='text-gray-500 text-sm sm:text-base'>
							Qoldiq: <span className='text-gray-700'>_</span>
						</p>
						<p className='text-gray-500 text-sm sm:text-base truncate'>
							Kategoriya: <span className='text-gray-700'>_</span>
						</p>
					</div>
					<div className='flex items-center space-x-2'>
						<p className='text-yellow-500 font-bold text-lg sm:text-xl'>_⭐</p>
						<p className='text-gray-500 text-sm sm:text-base'>(_ reviews)</p>
					</div>
				</div>
				<div className='flex justify-end items-end gap-5 w-full sm:w-auto'>
					<Button
						variant='outline'
						className='w-full sm:w-32 rounded-full border-2 border-black text-black hover:border-blue-600 hover:bg-blue-600 hover:text-white'
					>
						O'chirish
					</Button>
					<Button
						variant='outline'
						className='w-full sm:w-32 rounded-full border-2 border-black text-black hover:border-blue-600 hover:bg-blue-600 hover:text-white'
					>
						Saqlash
					</Button>
				</div>
			</div>
		</div>
	)
}

export default EditProduct
