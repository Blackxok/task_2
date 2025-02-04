'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import NProgress from 'nprogress'
import { useEffect } from 'react'

export default function ProgressProvider() {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		NProgress.configure({
			minimum: 0.3,
			easing: 'ease',
			speed: 500,
			showSpinner: true,
			trickleSpeed: 200,
		})
	}, [])

	useEffect(() => {
		NProgress.start()
		NProgress.done()
	}, [pathname, searchParams])

	return null
}
