import clsx from 'clsx' // Dynamic class merging
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '../ui/button'

interface FiltersState {
	selectedFilter: 'arzon' | 'qimmat' | 'sifatli' | 'yangi' | 'saqlash' | null
}

interface CategoryButtonProps {
	className?: string
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ className }) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [selectedFilters, setSelectedFilters] = useState<FiltersState>({
		selectedFilter: null,
	})

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen)
	}

	const handleRadioChange = (filter: 'arzon' | 'qimmat' | 'sifatli' | 'yangi' | 'saqlash') => {
		setSelectedFilters({ selectedFilter: filter })
	}

	return (
		<div className={clsx('relative', className)}>
			<Button
				className='flex items-center gap-2 bg-white rounded-full px-4 py-1 shadow hover:bg-gray-100 hover:text-gray-800'
				onClick={toggleModal}
			>
				<Image src='/filter.svg' alt='Kategory' width={20} height={20} />
				Kategoriyalar
			</Button>

			{/* Modal */}
			{isModalOpen && (
				<div className='absolute transform translate-x-[-50%] mt-2 bg-white border border-gray-700 rounded-3xl w-72 z-50 p-5'>
					<h2 className='text-xl font-semibold mb-4 px-6 text-center'>Kategoriyalar</h2>
					<div className='flex flex-col gap-3'>
						{['arzon', 'qimmat', 'sifatli', 'yangi', 'saqlash'].map(filter => (
							<div className='flex items-center gap-2' key={filter}>
								<input
									type='radio'
									id={filter}
									name='categoryFilter'
									checked={selectedFilters.selectedFilter === filter}
									onChange={() =>
										handleRadioChange(
											filter as 'arzon' | 'qimmat' | 'sifatli' | 'yangi' | 'saqlash',
										)
									}
									className='form-radio text-gray-600'
								/>
								<label
									htmlFor={filter}
									className={`py-2 px-4 rounded-full cursor-pointer ${
										selectedFilters.selectedFilter === filter && 'font-bold'
									}`}
								>
									{filter.charAt(0).toUpperCase() + filter.slice(1)}
								</label>
							</div>
						))}
					</div>
					<Button
						className='mt-4 py-2 px-4 bg-gray-200 text-black rounded-full w-full hover:bg-blue-500 hover:text-white'
						onClick={toggleModal}
					>
						Yopish
					</Button>
				</div>
			)}
		</div>
	)
}

export default CategoryButton
