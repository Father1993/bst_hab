import type { NextRequest } from 'next/server'

const normalizeHost = (host: string) => host.replace(/^www\./, '').toLowerCase()

export function GET(request: NextRequest) {
  const host = normalizeHost(request.headers.get('host') || 'bst-hab.ru')
  const protocol = request.headers.get('x-forwarded-proto') || 'https'

  const baseUrl = `${protocol}://${host}`

  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /admin/',
    'Disallow: /api/',
    'Disallow: /test/',
    'Disallow: /dev/',
    `Host: ${host}`,
    `Sitemap: ${baseUrl}/sitemap.xml`,
    '',
  ].join('\n')

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}


