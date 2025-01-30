'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { FaBell, FaCartShopping } from 'react-icons/fa6'

const SearchBar: React.FC = () => (
	<div className='w-full md:w-[250px] h-14 bg-white rounded-full flex items-center px-5'>
		<input
			type='text'
			placeholder='Search...'
			className='bg-transparent border-none w-full text-xl focus:outline-none'
		/>
	</div>
)

const Navbar: React.FC = () => {
	return (
		<nav className='flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-4 bg-transparent border-b border-[rgba(154,160,166,1)] text-[var(--qora)] space-y-4 md:space-y-0'>
			<div className='flex flex-row w-full md:w-auto justify-between items-center'>
				<a href={'/'} className='bg-white rounded-full'>
					<img
						src='/logo.png'
						alt='Logo'
						className='w-[100px] md:w-[170px] h-[45px] rounded-full'
					/>
				</a>

				<div className='flex md:hidden items-center space-x-4'>
					<Button className='bg-transparent shadow-none'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
						</svg>
					</Button>

					<Button className='bg-transparent shadow-none'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path d='M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0'></path>
						</svg>
					</Button>
				</div>
			</div>
			<div className='hidden md:flex flex-col min-w-[240px] h-14 p-2'>
				<span className='text-xl font-bold'>Xush kelipsiz: John Doe</span>
				<span className='font-inter text-sm font-medium text-gray-500'>#12345</span>
			</div>
			<div className='flex flex-col md:flex-row items-center w-full md:w-auto justify-between space-y-4 md:space-y-0 md:space-x-6'>
				<SearchBar />
				<div className='w-full md:w-[250px] h-14 bg-white flex items-center justify-between px-6 rounded-full'>
					<div className='hidden md:flex'>
						{/* <Button className='bg-transparent shadow-none mr-2'>
							<FaMoon />
						</Button> */}
						<Button className='bg-transparent shadow-none'>
							<FaBell />
						</Button>{' '}
						<Button className='bg-transparent shadow-none'>
							<FaCartShopping />
						</Button>
					</div>

					<Avatar className='w-10 h-10'>
						<AvatarImage src='/dolar.svg' alt='User Avatar' />
						<AvatarFallback>A</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
