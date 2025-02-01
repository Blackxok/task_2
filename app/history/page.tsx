import Search from '@/components/search/search'
import HistoryPage from './HistoryPage'
import { products } from '@/constants/product'

function History() {
	return (
		<div className=''>
			<Search />
			<HistoryPage products={products} />
		</div>
	)
}

export default History
