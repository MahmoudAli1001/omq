import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // حماية مسارات لوحة التحكم
  if (pathname.startsWith('/dashboard')) {
    // يمكن إضافة منطق التحقق من المصادقة هنا
    // const token = request.cookies.get('auth-token')
    // if (!token) {
    //   return NextResponse.redirect(new URL('/auth/login', request.url))
    // }
  }

  // حماية مسارات API
  if (pathname.startsWith('/api/admin')) {
    // يمكن إضافة منطق التحقق من دور الأدمن هنا
    // const userRole = request.headers.get('user-role')
    // if (userRole !== 'ADMIN') {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    // }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/api/admin/:path*',
  ],
}


