import { IProduct } from '@/types'
import clsx from 'clsx' // Dynamic class merging
import Image from 'next/image'
import React from 'react'

interface ProductBoxProps {
	product: IProduct
	className?: string
}

const ProductBox: React.FC<ProductBoxProps> = ({ product, className }) => {
	return (
		<div
			className={clsx(
				'bg-white rounded-3xl p-4 sm:p-6 shadow-lg relative overflow-hidden',
				className,
			)}
		>
			<div className='mb-3 sm:mb-4'>
				<Image
					src='/images/image.png'
					alt={product.name}
					className='w-full aspect-[4/3] object-cover rounded-2xl'
					width={400}
					height={300}
				/>
			</div>
			<div className='relative'>
				<div className='flex flex-col'>
					<h2 className='text-lg sm:text-xl font-semibold text-gray-800 truncate'>
						{product.name}
					</h2>
					<p className='text-gray-500 text-xs sm:text-sm'>
						Code: <span className='text-gray-700'>{product.code}</span>
					</p>
					<p className='text-gray-800 font-bold text-base sm:text-lg'>
						Narxi: <span className='text-green-600'>${product.price}</span>
					</p>
					<p className='text-gray-500 text-xs sm:text-sm'>
						Qoldiq: <span className='text-gray-700'>{product.remaining}</span>
					</p>
					<p className='text-gray-500 text-xs sm:text-sm truncate'>
						Kategoriya: <span className='text-gray-700'>{product.category}</span>
					</p>
				</div>
				<div className='flex items-center space-x-2'>
					<p className='text-yellow-500 font-bold text-base sm:text-lg'>{product.rating}⭐</p>
					<p className='text-gray-500 text-xs sm:text-sm'>({product.reviews} reviews)</p>
				</div>
			</div>
		</div>
	)
}

export default ProductBox
