'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { MENU_ITEMS } from '../constants/menu'

const Sidebar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const pathname = usePathname()

	const toggleSidebar = () => setIsOpen(!isOpen)

	return (
		<>
			<button
				className='md:hidden fixed top-4 left-4 z-50 font-extrabold text-3xl w-10'
				onClick={toggleSidebar}
			>
				{isOpen ? '✕' : '☰'}
			</button>

			<div
				className={`
			fixed md:static top-0 left-0 z-40 
			md:w-72 h-full md:h-full 
			transform transition-transform duration-300 
			${isOpen ? 'translate-x-0' : '-translate-x-full'} 
			md:translate-x-0
			md:pt-5
			pt-16
			p-5 overflow-y-auto
			bg-slate-200
		`}
			>
				<div className='space-y-2'>
					{MENU_ITEMS.map(item => {
						const isActive = pathname === item.path
						return (
							<Link
								key={item.id}
								href={item.path}
								className={`
                                    flex items-center space-x-3 p-2 rounded-full 
                                    transition-colors
                                    ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}
                                `}
								onClick={() => setIsOpen(false)}
							>
								<span>{item.icon}</span>
								<span>{item.title}</span>
							</Link>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default Sidebar
