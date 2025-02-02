'use client'

import Navbar from '@/components/navbar/navbar'
import { AuthProvider, useAuth } from '@/context/AuthContext'
import '../styles/globals.css'
import Sidebar from './(root)/(home)/_components/Sidebar'
import LoginPage from './login/page'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<AuthProvider>
			<AuthLayoutContent>{children}</AuthLayoutContent>
		</AuthProvider>
	)
}

const AuthLayoutContent = ({ children }: { children: React.ReactNode }) => {
	const { isAuth } = useAuth()

	return (
		<html lang='en'>
			<head>
				<title>My App</title>
				<meta name='description' content='An authentication app using Next.js' />
			</head>
			<body className='antialiased min-h-screen'>
				{isAuth ? (
					<div className='flex flex-col h-screen'>
						<Navbar />
						<div className='flex flex-col md:flex-row flex-1 px-2 md:px-[10px]'>
							<Sidebar />
							<main className='flex-1 overflow-y-auto p-6'>{children}</main>
						</div>
					</div>
				) : (
					<LoginPage />
				)}
			</body>
		</html>
	)
}
