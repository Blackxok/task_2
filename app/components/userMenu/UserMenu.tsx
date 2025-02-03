'use client'

import { useLogout } from '@/app/hooks/useLogout'

import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { Button } from '../ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'

const UserMenu = () => {
	const [open, setOpen] = useState(false)
	const logout = useLogout()

	return (
		<DropdownMenu open={open} onOpenChange={setOpen}>
			<DropdownMenuTrigger asChild>
				<Button className='w-9 h-9 border border-gray-400 bg-slate-50 rounded-full'>
					<FaUser />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align='end' className='w-48 bg-white shadow-md rounded-lg'>
				<DropdownMenuItem onClick={() => console.log('Go to profile')}>Profile</DropdownMenuItem>
				<DropdownMenuItem onClick={() => console.log('Go to settings')}>Settings</DropdownMenuItem>
				<DropdownMenuItem onClick={logout} className='text-red-500'>
					Logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default UserMenu
