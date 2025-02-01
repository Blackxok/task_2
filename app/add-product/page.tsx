import AddProductBox from '@/components/addProduct/AddProductBox'
import EditProduct from '@/components/editProduct/editProduct'
import ProductBox from '@/components/productBox/productBox'
import Search from '@/components/search/search'
import { products } from '@/constants/product'

export default function AddProductPage() {
	const highestRatedProduct = products.reduce((maxProduct, currentProduct) => {
		return currentProduct.rating > maxProduct.rating ? currentProduct : maxProduct
	}, products[0])

	return (
		<div>
			<Search />
			<div className='w-full flex flex-wrap max-h-min mt-2'>
				{/* First column */}
				<div className='w-1/3 px-2'>
					<AddProductBox />
				</div>
				{/* Second column */}
				<div className='w-1/3 px-2'>
					<ProductBox product={highestRatedProduct} className='h-full' />
				</div>
				{/* Third column */}
				<div className='w-1/3 px-2'>
					<EditProduct title='Mavjud mahsulotlarni tahrirlash' />
				</div>
			</div>
		</div>
	)
}
