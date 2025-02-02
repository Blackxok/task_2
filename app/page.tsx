'use client'

import Navbar from '@/components/navbar/navbar'
import { useAuth } from '@/context/AuthContext'
import Sidebar from './(root)/(home)/_components/Sidebar'
import LoginPage from './login/page'

export default function IndexPage({ children }: { children?: React.ReactNode }) {
	const { isAuth } = useAuth()

	return (
		<div>
			{isAuth ? (
				<div className='flex flex-col h-screen'>
					<Navbar />
					<div className='flex flex-col md:flex-row flex-1 px-2 md:px-[10px]'>
						<Sidebar />
						<main className='flex-1 overflow-y-auto p-6'>{children || 'Dashboard Content'}</main>
					</div>
				</div>
			) : (
				<LoginPage />
			)}
		</div>
	)
}
