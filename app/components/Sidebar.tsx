'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MENU_ITEMS } from '../constants/menu'

const Sidebar = () => {
	const pathname = usePathname()

	return (
		<div className='!w-80 h-screen p-4'>
			<nav className='space-y-2'>
				{MENU_ITEMS.map(item => {
					const isActive = pathname === item.path

					return (
						<Link
							key={item.id}
							href={item.path}
							className={`flex items-center space-x-3 p-3 rounded-full transition-colors
                ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-50'}`}
						>
							<span>{item.icon}</span>
							<span>{item.title}</span>
						</Link>
					)
				})}
			</nav>
		</div>
	)
}

export default Sidebar
