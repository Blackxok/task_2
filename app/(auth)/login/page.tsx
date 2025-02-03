'use client'
import { Button } from '@/app/components/ui/button'
import { Card, CardContent } from '@/app/components/ui/card'
import { Input } from '@/app/components/ui/input'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaFacebookF, FaGoogle } from 'react-icons/fa6'

export default function LoginPage() {
	const [phoneNumber, setPhoneNumber] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()
	const { login } = useAuth()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setError('')
		setIsLoading(true)

		if (!phoneNumber || !password) {
			setError('Please fill in all fields')
			setIsLoading(false)
			return
		}

		try {
			const response = await fetch('https://newera1.pythonanywhere.com/account/login/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					phone_number: phoneNumber,
					password: password,
				}),
			})

			const data = await response.json()

			if (response.ok) {
				login(data.access_token, data.refresh_token)
				router.push('/dashboard')
			} else {
				setError(data.message || 'Invalid credentials')
			}
		} catch (err) {
			console.error('Error:', err)
			setError('Server error. Please try again later.')
		} finally {
			setIsLoading(false)
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
							placeholder='Phone number (998XXXXXXXXX)'
							value={phoneNumber}
							onChange={e => setPhoneNumber(e.target.value)}
							pattern='998[0-9]{9}'
							title='Please enter a valid phone number starting with 998'
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
						<Button
							type='submit'
							className='w-full bg-blue-500 hover:bg-blue-600 text-white'
							disabled={isLoading}
						>
							{isLoading ? 'Loading...' : 'Submit'}
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
