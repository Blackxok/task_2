'use client'
import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import CategoryButton from '../categoryButton/categoryButton'

const categories: string[] = [
	'Barchasi',
	'Elektronika',
	'Maishiy texnika',
	'Kiyim-kechak',
	'Sport anjomlari',
	'Kitoblar',
	'Oyinchoqlar',
]

export default function Search() {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [filteredCategories, setFilteredCategories] = useState<string[]>(categories)
	const [activeIndex, setActiveIndex] = useState<number>(-1)

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.toLowerCase()
		setSearchTerm(value)

		const filtered = categories.filter(category => category.toLowerCase().includes(value))
		setFilteredCategories(filtered)
		setActiveIndex(-1)
	}

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'ArrowDown') {
			setActiveIndex(prev => (prev < filteredCategories.length - 1 ? prev + 1 : prev))
		} else if (e.key === 'ArrowUp') {
			setActiveIndex(prev => (prev > 0 ? prev - 1 : prev))
		} else if (e.key === 'Enter' && activeIndex >= 0) {
			setSearchTerm(filteredCategories[activeIndex])
			setFilteredCategories([])
		}
	}

	return (
		<div className='relative w-full  mx-auto'>
			<div className='bg-gray-200 rounded-full px-5 py-2 shadow-md flex items-center'>
				<AiOutlineSearch className='h-6 w-6 text-gray-500' />
				<input
					type='text'
					placeholder='Mahsulot qidirish...'
					value={searchTerm}
					onChange={handleSearchChange}
					onKeyDown={handleKeyDown}
					className='ml-3 flex-grow bg-transparent outline-none text-gray-700'
				/>
				<CategoryButton />
			</div>
			{searchTerm && (
				<div className='absolute bg-gray-200 rounded-3xl shadow-md mt-2 w-full max-h-60 overflow-y-auto z-10'>
					<ul className='py-2'>
						{filteredCategories.map((category, index) => (
							<li
								key={category}
								className={`py-2 px-4 cursor-pointer rounded-3xl ${
									activeIndex === index ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
								}`}
							>
								{category}
							</li>
						))}
						{filteredCategories.length === 0 && (
							<li className='py-2 px-4 text-gray-500'>Mos kategoriya topilmadi</li>
						)}
					</ul>
				</div>
			)}
		</div>
	)
}
