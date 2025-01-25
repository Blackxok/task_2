import AddProductBox from '@/components/addProduct/AddProductBox'
import EditProduct from '@/components/addProduct/EditProduct'
import ProductBox from '@/components/productBox/productBox'
import Search from '@/components/search/search'
import { products } from '../constants/product'

export default function AddProductPage() {
	const highestRatedProduct = products.reduce((maxProduct, currentProduct) => {
		return currentProduct.rating > maxProduct.rating ? currentProduct : maxProduct
	}, products[0])

	return (
		<div>
			<Search />
			<div className='flex items-center flex-col gap-5 mt-5'>
				<div className='w-full flex flex-col md:flex-row gap-5 '>
					<div className='w-full md:w-1/2 '>
						<AddProductBox />
					</div>
					<div className='w-full md:w-1/2'>
						<ProductBox product={highestRatedProduct} />
					</div>
				</div>
				<div className='w-full'>
					<EditProduct />
				</div>
			</div>
		</div>
	)
}
