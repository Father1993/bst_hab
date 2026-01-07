'use client'

import { useEffect, useState } from 'react'

export type CityType = 'khabarovsk' | 'irkutsk'

export function useCityDetection(): CityType {
  const [city, setCity] = useState<CityType>('khabarovsk')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const host = window.location.hostname.toLowerCase()
    const isIrkutsk = host.startsWith('irkutsk.')
    
    setCity(isIrkutsk ? 'irkutsk' : 'khabarovsk')
  }, [])

  return city
}

