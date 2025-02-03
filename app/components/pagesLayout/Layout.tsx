import Sidebar from '@/components/sidebar/Sidebar'
import Navbar from '@/components/navbar/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className='flex flex-col h-screen'>
				<Navbar />
				<div className='flex flex-col md:flex-row flex-1 px-2 md:px-[10px]'>
					<Sidebar />
					<main className='flex-1 overflow-y-auto p-6'>{children}</main>
				</div>
			</div>
		</>
	)
}
