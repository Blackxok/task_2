import clsx from 'clsx' // For merging class names
import React from 'react'
import { FiSearch } from 'react-icons/fi'

interface SearchBarProps {
	placeholder?: string
	className?: string // Optional additional class names
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search...', className }) => {
	return (
		<div
			className={clsx(
				'h-[56px] px-5 py-2 bg-white rounded-full flex items-center shadow-sm space-x-2',
				className,
			)}
		>
			<input
				type='text'
				placeholder={placeholder}
				className='flex-grow bg-transparent border-none outline-none text-[20px] text-gray-800 placeholder-gray-400'
			/>
			<FiSearch className='text-gray-400 text-xl' />
		</div>
	)
}

export default SearchBar
