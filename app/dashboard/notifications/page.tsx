import Search from '@/app/components/search/search'
import { products } from '@/app/constants/product'
import ReturnsLeft from './ReturnsLeft'

export default function NotificationsPage() {
	return (
		<div className=''>
			<Search />
			<ReturnsLeft
				products={products}
				name='Kam qolgan mahsulotlar'
				buttonStyle='border border-gray-400'
			/>
			<ReturnsLeft
				products={products}
				name='Qaytgan mahsulotlar '
				buttonStyle='bg-red-500 text-white'
			/>
		</div>
	)
}
