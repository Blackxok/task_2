import { NextRequest, NextResponse } from 'next/server'

const PROTECTED_ROUTES = ['/dashboard', '/profile', '/settings', '/admin']
const PUBLIC_ROUTES = ['/', '/login', '/register', '/forgot-password']
const BYPASS_ROUTES = ['/_next/static', '/_next/image', '/favicon.ico', '/api/auth']

export function middleware(request: NextRequest) {
	const token =
		request.cookies.get('access_token')?.value ||
		(typeof window !== 'undefined' ? localStorage.getItem('access_token') : null)
	const path = request.nextUrl.pathname

	const isBypassRoute = BYPASS_ROUTES.some(route => path.startsWith(route))
	if (isBypassRoute) {
		return NextResponse.next()
	}

	const isProtectedRoute = PROTECTED_ROUTES.some(route => path.startsWith(route))
	const isPublicRoute = PUBLIC_ROUTES.includes(path)

	if (isProtectedRoute) {
		if (!token) {
			const url = new URL('/login', request.url)
			url.searchParams.set('redirect', path)
			return NextResponse.redirect(url)
		}
	}

	if (token && path === '/login') {
		return NextResponse.redirect(new URL('/dashboard', request.url))
	}

	if (isProtectedRoute && !token) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
