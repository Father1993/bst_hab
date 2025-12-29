import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const isAssetPath = (pathname: string) => {
  return (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/img') ||
    pathname.startsWith('/videos') ||
    pathname.startsWith('/icons') ||
    pathname === '/favicon.ico' ||
    pathname === '/apple-touch-icon.png' ||
    pathname === '/manifest.json' ||
    pathname === '/manifest.webmanifest'
  )
}

const normalizeHost = (host: string) => host.replace(/^www\./, '').toLowerCase()

const getHostFromEnv = (value?: string) => {
  if (!value) return ''
  try {
    return new URL(value).host
  } catch {
    return value.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  }
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const hostHeader = request.headers.get('host') || ''
  const host = normalizeHost(hostHeader)
  const pathname = url.pathname

  // Локальная разработка: никаких редиректов/поддомен-логики
  if (host.includes('localhost') || host.startsWith('127.0.0.1')) {
    return NextResponse.next()
  }

  // Не трогаем ассеты
  if (isAssetPath(pathname)) {
    return NextResponse.next()
  }

  const mainHostFromEnv = normalizeHost(getHostFromEnv(process.env.NEXT_PUBLIC_MAIN_DOMAIN))
  const irkutskHostFromEnv = normalizeHost(getHostFromEnv(process.env.NEXT_PUBLIC_IRKUTSK_DOMAIN))

  const mainHost = mainHostFromEnv || host
  const irkutskHost = irkutskHostFromEnv || `irkutsk.${mainHost}`

  const isIrkutskHost = irkutskHostFromEnv ? host === irkutskHostFromEnv : host.startsWith('irkutsk.')

  // 1) На поддомене: убираем лишний /irkutsk из URL (чистые SEO URL)
  if (isIrkutskHost && pathname === '/irkutsk') {
    const redirectUrl = new URL('/', request.url)
    return NextResponse.redirect(redirectUrl, 301)
  }
  if (isIrkutskHost && pathname.startsWith('/irkutsk/')) {
    const cleanPath = pathname.replace(/^\/irkutsk/, '') || '/'
    const redirectUrl = new URL(cleanPath, request.url)
    return NextResponse.redirect(redirectUrl, 301)
  }

  // 2) На основном домене: /irkutsk* -> 301 на поддомен (без дублей)
  if (!isIrkutskHost && (pathname === '/irkutsk' || pathname.startsWith('/irkutsk/'))) {
    const tail = pathname.replace(/^\/irkutsk/, '') || '/'
    const redirectUrl = new URL(`https://${irkutskHost}${tail}`)
    redirectUrl.search = url.search
    return NextResponse.redirect(redirectUrl, 301)
  }

  // 3) На поддомене: все страницы мапим на /irkutsk/* внутри приложения
  if (isIrkutskHost) {
    const internalPath = pathname === '/' ? '/irkutsk' : `/irkutsk${pathname}`
    const rewriteUrl = url.clone()
    rewriteUrl.pathname = internalPath
    return NextResponse.rewrite(rewriteUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api).*)'],
}


