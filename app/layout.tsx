'use client'
import Navbar from '@/components/navbar/navbar'
import { useEffect, useState } from 'react'
import '../styles/globals.css'
import Sidebar from './(root)/(home)/_components/Sidebar'
import LoginPage from './login/page'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const [isAuth, setIsAuth] = useState<boolean>(false)
	console.log(isAuth)

	useEffect(() => {
		const token = localStorage.getItem('authToken')
		if (token) {
			setIsAuth(true) // Agar token mavjud bo'lsa, foydalanuvchi tizimga kirgan deb hisoblanadi
		}
	}, [])

	// const isAuth = localStorage.getItem('authToken')

	return (
		<html lang='en'>
			<body className='antialiased'>
				{isAuth ? (
					<div className='flex flex-col h-screen'>
						<Navbar />
						<div className='flex flex-col md:flex-row flex-1 px-2 md:px-[10px]'>
							<Sidebar />
							<main className='flex-1 overflow-y-auto p-6'>{children}</main>
						</div>
					</div>
				) : (
					<LoginPage setIsAuth={setIsAuth} />
				)}
			</body>
		</html>
	)
}
