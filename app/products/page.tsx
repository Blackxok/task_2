'use client'
import ProductBox from '@/components/productBox/productBox'
import Search from '@/components/search/search'
import { useState } from 'react'
import { products } from '../constants/product'
import { IProduct } from '../types'

const categories = [
	'Barchasi', // Yangi qo'shilgan kategoriya
	'Elektronika',
	'Maishiy texnika',
	'Kiyim-kechak',
	'Sport anjomlari',
	'Kitoblar',
	'Oyinchoqlar',
]

export default function ProductsPage() {
	const [selectedCategory, setSelectedCategory] = useState<string>('Barchasi')

	const handleCategoryClick = (category: string) => {
		setSelectedCategory(category)
	}

	const filteredProducts =
		selectedCategory === 'Barchasi'
			? products // Barcha mahsulotlar
			: products.filter((product: IProduct) => product.category === selectedCategory)

	return (
		<div>
			<Search />
			<div className='flex gap-4 overflow-x-auto my-6'>
				{categories.map(category => (
					<span
						key={category}
						onClick={() => handleCategoryClick(category)}
						className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer ${
							selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'
						}`}
					>
						{category}
					</span>
				))}
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
				{filteredProducts.map(product => (
					<ProductBox key={product.code} product={product} />
				))}
			</div>
		</div>
	)
}
