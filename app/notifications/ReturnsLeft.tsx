'use client'
import SearchBar from '@/components/searchBar/SearchBar'
import { Button } from '@/components/ui/button'
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import { IProduct } from '../../types'

type ReturnsLeftProps = {
	products: IProduct[] // Adjust this to your actual product type
	name: string
	buttonStyle: string
}

const ReturnsLeft: React.FC<ReturnsLeftProps> = ({ products, name, buttonStyle }) => {
	if (!products || !Array.isArray(products)) {
		return <div>Malumot yoq</div>
	}
	const filteredProducts = products.filter(product => product.remaining < 100)

	return (
		<div className='bg-white rounded-3xl p-4 shadow-md my-5'>
			<div className='flex justify-between items-center mb-4'>
				<h1 className='text-xl font-semibold'>{name}</h1>
				<SearchBar />
			</div>
			<table className='table-auto w-full border-collapse'>
				<thead>
					<tr className='bg-gray-100 text-left rounded-full'>
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
					{filteredProducts.map((product, index) => (
						<tr key={index} className='border-b border-gray-100 hover:bg-gray-50 rounded-3xl'>
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
								<Button
									className={classNames(
										'rounded-full hover:bg-blue-500 hover:text-white',
										buttonStyle,
									)}
								>
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

export default ReturnsLeft
