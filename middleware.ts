import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Add paths that should be accessible to everyone
const publicPaths = ['/sign-in', '/api/auth']

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Check if the path is public
  const isPublicPath = publicPaths.some(publicPath =>
    path.startsWith(publicPath)
  )

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  })

  // Redirect to sign-in if accessing protected route without auth
  if (!token && !isPublicPath) {
    const signInUrl = new URL('/sign-in', request.url)
    signInUrl.searchParams.set('callbackUrl', path)
    return NextResponse.redirect(signInUrl)
  }

  // Redirect to dashboard if accessing auth pages while logged in
  if (token && path === '/sign-in') {
    return NextResponse.redirect(new URL('/', request.url)) // Or '/dashboard'
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)',
    '/dashboard/:path*',
    '/profile/:path*',
    '/upload',
    '/video/:path*',
  ]
}