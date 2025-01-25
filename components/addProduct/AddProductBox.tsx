import clsx from 'clsx' // Dynamic class merging
import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const AddProductBox: React.FC = () => {
	const product = {
		name: '...',
		code: '',
		remaining: 0,
		price: 0,
		rating: 0,
		reviews: 0,
		category: '',
	}

	return (
		<div className={clsx('bg-white rounded-3xl p-6 shadow-lg relative overflow-hidden h-full')}>
			<div className='mb-4 flex items-center justify-center bg-slate-200 rounded-3xl w-full aspect-[4/3]'>
				<FaPlus size={145} />
			</div>
			<div className='relative'>
				<div className='flex flex-col'>
					<h2 className='text-xl font-semibold text-gray-800 truncate'>{product.name}</h2>
					<p className='text-gray-500 text-sm'>
						Code: <span className='text-gray-700'>{product.code}</span>
					</p>
					<p className='text-gray-800 font-bold text-lg'>
						Narxi: <span className='text-green-600'>${product.price}</span>
					</p>
					<p className='text-gray-500'>
						Qoldiq: <span className='text-gray-700'>{product.remaining}</span>
					</p>
					<p className='text-gray-500 truncate'>
						Kategoriya: <span className='text-gray-700'>{product.category}</span>
					</p>
				</div>
				<div className='flex items-center space-x-2'>
					<p className='text-yellow-500 font-bold text-lg'>{product.rating}⭐</p>
					<p className='text-gray-500 text-sm'>({product.reviews} reviews)</p>
				</div>
			</div>
		</div>
	)
}

export default AddProductBox
