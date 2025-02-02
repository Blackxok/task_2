'use client'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { FaBell, FaCartShopping, FaLaptopCode, FaUser } from 'react-icons/fa6'
import SearchBar from '../searchBar/SearchBar'

const Navbar: React.FC = () => {
	return (
		<nav className='flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-3 bg-transparent border-b border-gray-200 text-gray-800 space-y-3 md:space-y-0'>
			<div className='flex flex-row w-full md:w-auto justify-between items-center'>
				<a href={'/'}>
					<FaLaptopCode className='w-16 md:w-55 h-10 rounded-full md:block hidden' />
				</a>
				{/* Mobile Icons */}
				<div className='md:hidden w-48 h-10 bg-gray-200 flex items-center justify-between px-4 rounded-full'>
					{/* Icons - Hidden on Mobile */}
					<div className='flex items-center space-x-3'>
						<Button className='w-10 bg-transparent shadow-none rounded-full hover:bg-gray-100 p-2'>
							<FaBell className='text-xl text-gray-600' />
						</Button>
						<Button className='w-10 bg-transparent shadow-none rounded-full hover:bg-gray-100 p-2'>
							<FaCartShopping className='text-xl text-gray-600' />
						</Button>
					</div>
					<Avatar className='w-9 h-9 border border-gray-400 bg-slate-50 cursor-pointer flex items-center justify-center'>
						<FaUser />
						{/* <AvatarImage src='/dolar.svg' alt='User Avatar' /> */}
					</Avatar>
				</div>
			</div>

			{/* Welcome Message - Hidden on Mobile */}
			<div className='hidden md:flex flex-col min-w-max h-14 p-2 overflow-hidden'>
				<span className='text-lg font-semibold text-gray-800'>Salom: John Doe</span>
				<span className='text-sm font-medium text-gray-500'>#12345</span>
			</div>

			<div className='flex flex-col md:flex-row items-center w-full md:w-auto justify-between space-y-3 md:space-y-0 md:space-x-4'>
				<SearchBar />
				<div className='hidden md:w-[200px] h-10 bg-gray-200 md:flex items-center justify-between px-4 rounded-full'>
					{/* Icons - Hidden on Mobile */}
					<div className='md:flex items-center space-x-3'>
						<Button className='w-10 bg-transparent shadow-none rounded-full hover:bg-gray-100 p-2'>
							<FaBell className='text-xl text-gray-600' />
						</Button>
						<Button className='w-10 bg-transparent shadow-none rounded-full hover:bg-gray-100 p-2'>
							<FaCartShopping className='text-xl text-gray-600' />
						</Button>
					</div>
					<Button className='w-9 h-9 border border-gray-400 bg-slate-50 rounded-full'>
						<FaUser />
						{/* <AvatarImage src='/dolar.svg' alt='User Avatar' /> */}
					</Button>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
