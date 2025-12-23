'use client'

import { useEffect } from 'react'

export default function IrkutskRedirect() {
  useEffect(() => {
    // Редирект на поддомен для SEO
    const currentHost = window.location.hostname
    
    // Если мы не на поддомене Иркутска - редиректим
    if (!currentHost.startsWith('irkutsk.')) {
      const newUrl = `https://irkutsk.bst-hab.ru${window.location.pathname.replace('/irkutsk', '')}`
      window.location.replace(newUrl)
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFD700] mb-4"></div>
        <p className="text-white text-lg">Перенаправление на сайт Иркутска...</p>
      </div>
    </div>
  )
}

