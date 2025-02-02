'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/context/AuthContext' // AuthContext dan import qilamiz
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaFacebookF, FaGoogle } from 'react-icons/fa6'

const LoginPage: React.FC = () => {
	const [number, setNumber] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const router = useRouter()
	const { setIsAuth } = useAuth() // AuthContext orqali setIsAuth olish

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setError('')
		console.log('Form submitted', { number, password })

		if (!number || !password) {
			setError('Please fill in all fields')
			return
		}

		try {
			console.log('Sending request to Reqres API...')
			const response = await fetch('https://reqres.in/api/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: 'John',
					job: 'Developer',
				}),
			})
			console.log('Response received:', response)

			const data = await response.json()
			console.log('Reqres API Data:', data)

			if (response.ok) {
				// Taxminiy token yaratish
				const token = 'fake-token-' + Math.random().toString(36).slice(2)
				localStorage.setItem('authToken', token) // LocalStorage-ga token saqlash
				setIsAuth(true) // AuthContext orqali autentifikatsiyani o‘zgartirish
				console.log('Token saved to localStorage:', token)

				router.push('/dashboard') // Dashboard sahifasiga yo‘naltirish
				setNumber('')
				setPassword('')
			} else {
				setError(data.message || 'Invalid phone number or password')
			}
		} catch (err) {
			console.error('Error occurred:', err)
			setError('Server error. Please try again later.')
		}
	}

	return (
		<div className='flex items-center justify-center min-h-screen'>
			<Card className='w-96 p-6 shadow-lg border-none'>
				<CardContent>
					<h2 className='text-2xl font-bold mb-4'>Login</h2>
					{error && <p className='text-red-500 text-sm mb-2'>{error}</p>}
					<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
						<Input
							className='border-none bg-slate-200 !placeholder-gray-400'
							type='tel'
							placeholder='Phone number or ID'
							value={number}
							onChange={e => setNumber(e.target.value)}
							required
						/>
						<Input
							className='border-none bg-slate-200 !placeholder-gray-400'
							type='password'
							placeholder='Password'
							value={password}
							onChange={e => setPassword(e.target.value)}
							required
						/>
						<Button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white'>
							Submit
						</Button>
					</form>
					<div className='flex items-center my-4'>
						<div className='flex-grow border-t border-gray-500'></div>
						<span className='mx-2 text-gray-500 text-sm'>or</span>
						<div className='flex-grow border-t border-gray-500'></div>
					</div>
					<div className='flex flex-row gap-2'>
						<Button className='w-1/2 bg-gray-100 text-gray-500 hover:bg-gray-200'>
							<FaGoogle />
							Google
						</Button>
						<Button className='w-1/2 bg-gray-100 text-gray-500 hover:bg-gray-200'>
							<FaFacebookF />
							Facebook
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default LoginPage
