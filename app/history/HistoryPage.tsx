'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { IProduct } from '../../types'

type HistoryPageProps = {
	products: IProduct[]
}

const HistoryPage: React.FC<HistoryPageProps> = ({ products }) => {
	if (!products || !Array.isArray(products)) {
		return <div>Malumot yo'q</div>
	}

	return (
		<div className='bg-white rounded-3xl p-4 shadow-md my-5'>
			<div className='flex justify-between items-center mb-4'>
				<h1 className='text-xl font-semibold'>Oxirgi sotilgan mahsulotlar</h1>
				<Button className='flex items-center space-x-2 border px-3 py-1 rounded-3xl'>
					<span>Kategoriyalar</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-5 h-5'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5'
						/>
					</svg>
				</Button>
			</div>
			<table className='table-auto w-full border-collapse'>
				<thead>
					<tr className='bg-gray-300 text-left rounded-full'>
						<th className='p-2'>Mahsulot</th>
						<th className='p-2'>Kod</th>
						<th className='p-2'>Qolgan</th>
						<th className='p-2'>Narxi</th>
						<th className='p-2'>Reyting</th>
						<th className='p-2'>Sharhlar</th>
						<th className='p-2'>Kategoriya</th>
						<th className='p-2'></th>
					</tr>
				</thead>
				<tbody className='relative'>
					{products.map((product, index) => (
						<tr key={index} className='border-b hover:bg-gray-200 rounded-3xl bg-gray-50'>
							<td className='p-2 flex flex-row gap-5 items-center'>
								<Image
									src='/images/image.png' // Fixed image path
									width={40} // Pass width as a number
									height={40} // Pass height as a number
									alt={product.name}
									className='rounded-3xl'
								/>
								{product.name}
							</td>
							<td className='p-2'> {product.code} </td>
							<td className='p-2'> {product.remaining} </td>
							<td className='p-2'> ${product.price.toFixed(2)} </td>
							<td className='p-2'> {product.rating} / 5 </td>
							<td className='p-2'> {product.reviews} ta sharh </td>
							<td className='p-2'> {product.category} </td>
							<td className='p-2'>
								<Button className='rounded-full hover:bg-blue-500 hover:text-white'>
									Batafsil
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default HistoryPage
