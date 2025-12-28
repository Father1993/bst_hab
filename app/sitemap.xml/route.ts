import type { NextRequest } from 'next/server'

const normalizeHost = (host: string) => host.replace(/^www\./, '').toLowerCase()

const xmlEscape = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

export function GET(request: NextRequest) {
  const host = normalizeHost(request.headers.get('host') || 'bst-hab.ru')
  const protocol = request.headers.get('x-forwarded-proto') || 'https'
  const baseUrl = `${protocol}://${host}`

  const isIrkutskHost = host.startsWith('irkutsk.')
  const today = new Date().toISOString()

  const pages: Array<{ path: string; priority: number; changefreq: string }> = [
    { path: '/', priority: 1.0, changefreq: 'weekly' },
    { path: '/about', priority: 0.7, changefreq: 'monthly' },
    { path: '/contacts', priority: 0.7, changefreq: 'monthly' },
    { path: '/delivery', priority: 0.6, changefreq: 'monthly' },
    { path: '/privacy', priority: 0.5, changefreq: 'yearly' },
    { path: '/privacy-policy', priority: 0.4, changefreq: 'yearly' },
    { path: '/rent', priority: 0.9, changefreq: 'weekly' },
    { path: '/sale', priority: 0.8, changefreq: 'weekly' },
    { path: '/sale/standard-modules', priority: 0.75, changefreq: 'monthly' },
    { path: '/sale/garages', priority: 0.75, changefreq: 'monthly' },
    { path: '/sale/posts', priority: 0.75, changefreq: 'monthly' },
    { path: '/sale/large-buildings', priority: 0.75, changefreq: 'monthly' },
    { path: '/sale/country-houses', priority: 0.75, changefreq: 'monthly' },
    { path: '/sale/business', priority: 0.75, changefreq: 'monthly' },
  ]

  // Иркутску добавим “гео-страницу контактов” (на поддомене это обычный /contacts)
  // На основном домене /irkutsk* специально НЕ добавляем, чтобы не было дублей в индексации.
  if (isIrkutskHost) {
    // можно расширять в будущем
  }

  const urlset = pages
    .map(p => {
      const loc = `${baseUrl}${p.path}`
      return [
        '<url>',
        `<loc>${xmlEscape(loc)}</loc>`,
        `<lastmod>${today}</lastmod>`,
        `<changefreq>${p.changefreq}</changefreq>`,
        `<priority>${p.priority.toFixed(1)}</priority>`,
        '</url>',
      ].join('')
    })
    .join('')

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urlset +
    `</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}


