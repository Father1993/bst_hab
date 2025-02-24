'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

interface YandexMetrika {
  (id: number, action: string, params?: unknown): void
  a?: unknown[]
  l?: number
}

interface WindowWithYM extends Window {
  [key: string]: unknown | (() => void) | YandexMetrika
}

declare global {
  interface Window {
    ym: YandexMetrika
  }
}

function YandexMetrikaInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Инициализация Яндекс.Метрики
    ;(function (
      m: WindowWithYM,
      e: Document,
      t: string,
      r: string,
      i: string,
      k?: HTMLScriptElement,
      a?: HTMLScriptElement
    ) {
      m[i] =
        m[i] ||
        function (...args: unknown[]) {
          const metrika = m[i] as YandexMetrika
          metrika.a = metrika.a || []
          metrika.a.push(args)
        }

      const metrika = m[i] as YandexMetrika
      metrika.l = 1 * Date.now()

      const existingScript = Array.from(document.scripts).find(script => script.src === r)
      if (existingScript) return

      k = e.createElement(t) as HTMLScriptElement
      a = e.getElementsByTagName(t)[0] as HTMLScriptElement
      k.async = true
      k.src = r
      a.parentNode?.insertBefore(k, a)
    })(
      window as unknown as WindowWithYM,
      document,
      'script',
      'https://mc.yandex.ru/metrika/tag.js',
      'ym'
    )

    // Инициализация счетчика
    window.ym(100029556, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    })
  }, [])

  // Отслеживание изменения страниц в SPA
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ym) {
      const search = searchParams?.toString()
      const path = window.location.pathname + (search ? `?${search}` : '')
      window.ym(100029556, 'hit', path)
    }
  }, [pathname, searchParams])

  return (
    <noscript>
      <div>
        <img
          src='https://mc.yandex.ru/watch/100029556'
          style={{ position: 'absolute', left: '-9999px' }}
          alt=''
        />
      </div>
    </noscript>
  )
}

export default function YandexMetrika() {
  return (
    <Suspense fallback={null}>
      <YandexMetrikaInner />
    </Suspense>
  )
}
