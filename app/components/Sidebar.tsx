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
			<button className='md:hidden fixed top-4 left-4 z-50' onClick={toggleSidebar}>
				{isOpen ? '✕' : '☰'}
			</button>

			<div
				className={`
                fixed md:static top-0 left-0 w-64 md:w-80 h-full md:h-screen 
                 transform transition-transform duration-300 
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                md:translate-x-0 z-40 p-4 overflow-y-auto
            `}
			>
				<nav className='space-y-2'>
					{MENU_ITEMS.map(item => {
						const isActive = pathname === item.path
						return (
							<Link
								key={item.id}
								href={item.path}
								className={`
                                    flex items-center space-x-3 p-3 rounded-full 
                                    transition-colors
                                    ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-50'}
                                `}
								onClick={() => setIsOpen(false)}
							>
								<span>{item.icon}</span>
								<span>{item.title}</span>
							</Link>
						)
					})}
				</nav>
			</div>
		</>
	)
}

export default Sidebar
