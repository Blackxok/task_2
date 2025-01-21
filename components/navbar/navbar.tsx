'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { FaMoon } from 'react-icons/fa6'
import { FiBell, FiSearch } from 'react-icons/fi'
import styles from './navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
	// const [darkMode, setDarkMode] = useState(false)

	return (
		// <nav className={cn(styles.navbar, { [styles.dark]: darkMode })}>
		<nav className={styles.navbar}>
			<Link href={'/'} className={styles.logo}>
				<Image src='/logo.png' alt='Logo' />
			</Link>
			<div className={styles.userInfo}>
				<span className={styles.userName}>Xush kelipsiz: John Doe</span>
				<span className={styles.userId}>#12345</span>
			</div>
			<div className={styles.search}>
				<Input type='text' placeholder='Search...' />
				<FiSearch />
			</div>
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
						<AvatarImage src='/avatar.jpg' alt='User Avatar' />
						<AvatarFallback>A</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
