'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { FaMoon } from 'react-icons/fa6'
import { FiBell } from 'react-icons/fi'
import SearchBar from '../searchBar/SearchBar'
import styles from './navbar.module.css'

const Navbar = () => {
	// const [darkMode, setDarkMode] = useState(false)

	return (
		// <nav className={cn(styles.navbar, { [styles.dark]: darkMode })}>
		<nav className={styles.navbar}>
			<Link href={'/'} className={styles.logo}>
				<Image src='/logo.png' alt='Logo' width={170} height={45} />
			</Link>
			<div className={styles.userInfo}>
				<span className={styles.userName}>Xush kelipsiz: John Doe</span>
				<span className={styles.userId}>#12345</span>
			</div>
			<SearchBar />
			<div className={styles.settings}>
				{/* <Button onClick={() => setDarkMode(!darkMode)} variant='link'>
					{darkMode ? <FaSun color='white' /> : <FaMoon />}
				</Button> */}
				<Button>
					<FaMoon />
				</Button>
				<Button variant='link'>
					<FiBell />
				</Button>
				<div className={styles.avatar}>
					<Avatar>
						<AvatarImage src='/public/dolar.svg' alt='User Avatar' />
						<AvatarFallback>A</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
