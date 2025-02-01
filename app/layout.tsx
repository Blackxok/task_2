import Navbar from '@/components/navbar/navbar'
import type { Metadata } from 'next'
import '../styles/globals.css'
import Sidebar from './(root)/(home)/_components/Sidebar'



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className='antialiased'>
				<div className='flex flex-col h-screen'>
					<Navbar />
					<div className='flex flex-col md:flex-row flex-1 px-2 md:px-[10px]'>
						<Sidebar />
						<main className='flex-1 overflow-y-auto p-6'>{children}</main>
					</div>
				</div>
			</body>
		</html>
	)
}
