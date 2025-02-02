import useAuthStore from '@/store/store'
import { useRouter } from 'next/navigation'

const Logout = () => {
	const logout = useAuthStore(state => state.logout)
	const router = useRouter()

	const handleLogout = () => {
		logout()
		router.push('/login')
	}

	return (
		<button onClick={handleLogout} className='bg-red-500 text-white px-4 py-2'>
			Logout
		</button>
	)
}

export default Logout
