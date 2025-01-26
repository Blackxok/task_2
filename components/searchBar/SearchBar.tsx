import classNames from 'classnames'
import React from 'react'
import { FiSearch } from 'react-icons/fi'

interface SearchBarProps {
	placeholder?: string
	className?: string // Optional additional class names
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search...', className }) => {
	return (
		<div
			className={classNames(
				'h-[56px] px-5 py-2 bg-gray-200 rounded-full flex items-center shadow-sm space-x-2',
				className,
			)}
		>
			<input
				type='text'
				placeholder={placeholder}
				className='flex-grow bg-transparent border-none outline-none text-[20px] text-black placeholder-gray-500'
			/>
			<FiSearch className='text-gray-500 text-2xl' />
		</div>
	)
}

export default SearchBar
