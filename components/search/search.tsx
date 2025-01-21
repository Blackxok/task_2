import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Search() {
	return (
		<div className='bg-gray-200 rounded-full px-5  py-2 shadow-md flex items-center justify-between'>
			<div className='flex items-center w-full '>
				<AiOutlineSearch className='h-8 w-8' />
				<input
					type='text'
					placeholder='Mahsulot qidirish...'
					className='ml-3 outline-none w-full bg-transparent'
				/>
			</div>
			<button className='flex items-center justify-between gap-2 bg-white  rounded-full px-10 py-1 shadow hover:bg-gray-100 hover:text-gray-800'>
				<Image
					src='/filter.svg'
					className='h-8 w-8 text-gray-500 transform translate-x-[-15px]'
					alt='Kategory'
					layout='responsive'
					width={8}
					height={8}
				/>
				Kategoriyalar
			</button>
		</div>
	)
}
