'use client'
import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'
import classNames from 'classnames'
import { useState } from 'react'
import ProfileContent from './profile'

const ProfileSettings = () => {
	const [activeTab, setActiveTab] = useState('dashboard')

	const tabs = [
		{ id: 'dashboard', label: 'Dashboard' },
		{ id: 'profile', label: 'Profile Settings' },
		{ id: 'security', label: 'Security' },
		{ id: 'notifications', label: 'Notifications' },
	]

	const renderContent = () => {
		switch (activeTab) {
			case 'dashboard':
				return <ProfileContent />
			case 'profile':
				return <p>Here you can update your profile settings.</p>
			case 'security':
				return <p>Manage your security settings here.</p>
			case 'notifications':
				return <p>Set your notification preferences here.</p>
			default:
				return null
		}
	}

	return (
		<div className='flex h-[500px] bg-white rounded-3xl shadow-md'>
			{/* Sidebar */}
			<div className='w-1/4 p-4'>
				<ul className='space-y-2'>
					{tabs.map(tab => (
						<li key={tab.id}>
							<Button
								onClick={() => setActiveTab(tab.id)}
								className={classNames('w-full py-2 px-4 rounded-3xl transition-all duration-300', {
									'bg-blue-500 font-bold text-white hover:text-gray-800': activeTab === tab.id,
									'bg-gray-100 text-gray-700 hover:bg-gray-200': activeTab !== tab.id,
								})}
							>
								{tab.label}
							</Button>
						</li>
					))}
				</ul>
			</div>

			{/* Main Content */}
			<div className='flex-1 p-6'>
				<div className='h-full border-l-2  border-gray-200'>
					<CardContent>{renderContent()}</CardContent>
				</div>
			</div>
		</div>
	)
}

export default ProfileSettings
