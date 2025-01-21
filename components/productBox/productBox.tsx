import { IProduct } from '@/app/types'
import Image from 'next/image'
import React from 'react'

interface ProductBoxProps {
	product: IProduct
}

const ProductBox: React.FC<ProductBoxProps> = ({ product }) => {
	return (
		<div className='bg-white rounded-3xl p-4 shadow-md max-w-sm relative'>
			<div className='mb-3'>
				<Image
					src='/images/image.png'
					alt={product.name}
					className='w-full aspect-[4/3] object-cover rounded-3xl'
					width={100}
					height={100}
				/>
			</div>
			<div className='flex items-start justify-between'>
				<div className='w-full space-x-4'>
					<h2 className='text-lg font-semibold text-gray-800'>{product.name}</h2>
					<p className='text-gray-500 text-sm'>Code: {product.code}</p>
					<p className='text-gray-800 font-bold'>Narxi: ${product.price}</p>
					<p className='text-gray-500'>Qoldiq: {product.remaining}</p>
					<p className='text-gray-500 flex-grow truncate'>Kategoriya: {product.category}</p>
				</div>
				<div className='flex items-center min-w-max absolute right-6'>
					<p className='text-yellow-500 font-bold'>{product.rating}⭐</p>
					<p className='ml-2 text-gray-500 text-sm'>({product.reviews} reviews)</p>
				</div>
			</div>
		</div>
	)
}

export default ProductBox
