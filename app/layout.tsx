'use client'

import { AuthProvider } from '@/context/AuthContext'
import Head from 'next/head'
import '../styles/globals.css'
import IndexPage from './page'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<Head>
				<title>My App</title>
				<meta name='description' content='An authentication app using Next.js' />
			</Head>
			<body className='antialiased min-h-screen'>
				<AuthProvider>
					<IndexPage>{children}</IndexPage>
				</AuthProvider>
			</body>
		</html>
	)
}
