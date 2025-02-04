'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import NProgress from 'nprogress'
import { Suspense, useEffect, useMemo } from 'react'

function ProgressProvider() {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const searchParamsString = useMemo(() => searchParams.toString(), [searchParams])

	useEffect(() => {
		NProgress.configure({
			minimum: 0.3,
			easing: 'ease',
			speed: 500,
			showSpinner: false,
			trickleSpeed: 200,
		})
	}, [])

	useEffect(() => {
		NProgress.start()
		const timer = setTimeout(() => NProgress.done(), 300)
		return () => clearTimeout(timer)
	}, [pathname, searchParamsString])

	return null
}

export default function SuspenseWrapper() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ProgressProvider />
		</Suspense>
	)
}
