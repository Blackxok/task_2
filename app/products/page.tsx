'use client'
import Search from '@/components/search/search'
import { useState } from 'react'
import { products } from '../constants/product'
import { IProduct } from '../types'

const categories = [
	'Elektronika',
	'Maishiy texnika',
	'Kiyim-kechak',
	'Sport anjomlari',
	'Kitoblar',
	'O‘yinchoqlar',
]

export default function ProductsPage() {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

	const handleCategoryClick = (category: string) => {
		setSelectedCategory(category === selectedCategory ? null : category) // Agar shu kategoriya tanlansa, filterni tozalaydi
	}

	const filteredProducts = selectedCategory
		? products.filter((product: IProduct) => product.category === selectedCategory)
		: products

	return (
		<div>
			<Search />
			<div className='flex gap-4 overflow-x-auto my-6'>
				{categories.map(category => (
					<span
						key={category}
						onClick={() => handleCategoryClick(category)} // Kategoriya nomiga bosilganda
						className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer ${
							selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'
						}`}
					>
						{category}
					</span>
				))}
			</div>
			<div className='grid grid-cols-3 gap-6'>
				{filteredProducts.map((product: IProduct) => (
					<div key={product.code} className='bg-white p-4 rounded-3xl shadow'>
						<div className='border border-red-400'>
							<h3 className='text-lg font-semibold'>{product.name}</h3>
							<p className='text-sm text-gray-500'>Kodni: {product.code}</p>
							<p className='text-sm text-gray-500'>Qolgan miqdori: {product.remaining}</p>
						</div>
						<div className='flex items-center'>
							<p className='font-bold text-xl text-blue-600'>Narxi: ${product.price}</p>
							<span className='text-yellow-500'>{'★'.repeat(Math.floor(product.rating))}</span>
							<span className='text-gray-500'>({product.reviews} izoh)</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
