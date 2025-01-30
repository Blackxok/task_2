import Navbar from '@/components/navbar/navbar'
import type { Metadata } from 'next'
import '../styles/globals.css'
import Sidebar from './components/Sidebar'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

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
						<div className='md:w-80 w-full md:block hidden'>
							<Sidebar />
						</div>
						<main className='flex-1 p-2 md:p-5 overflow-y-auto'>{children}</main>
					</div>
				</div>
			</body>
		</html>
	)
}
