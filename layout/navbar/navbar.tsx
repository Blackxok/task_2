'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import cn from 'classnames' // classnames kutubxonasini import qilish
import { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa6'
import { FiBell } from 'react-icons/fi'
import styles from './navbar.module.css'

const Navbar = () => {
	const [darkMode, setDarkMode] = useState(false)

	return (
		<nav className={cn(styles.navbar, { [styles.dark]: darkMode })}>
			<div className={styles.logo}>
				<img src='/logo.png' alt='Logo' />
			</div>
			<div className={styles.userInfo}>
				<span className={styles.userName}>John Doe</span>
				<span className={styles.userId}>#12345</span>
			</div>
			<div className={styles.search}>
				<Input type='text' placeholder='Search...' />
			</div>
			<div className={styles.settings}>
				<Button onClick={() => setDarkMode(!darkMode)} variant='link'>
					{darkMode ? <FaSun color='white' /> : <FaMoon />}
				</Button>
				<Button variant='link'>
					<FiBell />
				</Button>
				<div className={styles.avatar}>
					<Avatar>
						<AvatarImage src='/avatar.jpg' alt='User Avatar' />
						<AvatarFallback>UA</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
