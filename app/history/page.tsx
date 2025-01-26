import Search from '@/components/search/search'
import { products } from '../constants/product'
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
