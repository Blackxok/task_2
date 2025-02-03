import Search from '@/app/components/search/search'
import { products } from '@/app/constants/product'
import HistoryPage from './HistoryPage'

function History() {
	return (
		<div className=''>
			<Search />
			<HistoryPage products={products} />
		</div>
	)
}

export default History
