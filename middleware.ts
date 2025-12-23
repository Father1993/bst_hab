import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  
  // Определяем город по хосту
  const isIrkutsk = host.startsWith('irkutsk.')
  
  // Добавляем информацию о городе в headers для использования в компонентах
  const response = NextResponse.next()
  response.headers.set('x-city', isIrkutsk ? 'irkutsk' : 'khabarovsk')
  
  // Если поддомен Иркутска, но путь не начинается с /irkutsk
  if (isIrkutsk && !request.nextUrl.pathname.startsWith('/irkutsk')) {
    // Перенаправляем на /irkutsk
    const url = request.nextUrl.clone()
    url.pathname = `/irkutsk${url.pathname}`
    return NextResponse.rewrite(url)
  }
  
  return response
}

// Применяем middleware ко всем путям кроме статики
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|img|videos).*)',
  ],
}

