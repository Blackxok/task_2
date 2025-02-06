import { Toaster } from '@/components/ui/toaster'
import { AuthProvider } from './providers/AuthProvider'
import ProgressProvider from './providers/progress-provider'
import './styles/globals.css'
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<AuthProvider>{children}</AuthProvider>
				<Toaster />
				<ProgressProvider />
			</body>
		</html>
	)
}
