import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useCityDetection } from '@/components/hooks/useCityDetection'
import { CITIES } from '@/components/shared/constants'

interface MobileBottomNavProps {
  onCallbackRequest: () => void
}

const MobileBottomNav = ({ onCallbackRequest }: MobileBottomNavProps) => {
  const pathname = usePathname()
  const [showCityMenu, setShowCityMenu] = useState(false)
  const [isLocalDev, setIsLocalDev] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const host = window.location.hostname
    setIsLocalDev(host === 'localhost' || host === '127.0.0.1')
  }, [])

  const detectedCity = useCityDetection()
  const isIrkutsk = detectedCity === 'irkutsk'
  const currentCity = isIrkutsk ? CITIES.irkutsk : CITIES.khabarovsk
  const cityHref = (city: (typeof CITIES)[keyof typeof CITIES]) => (isLocalDev ? city.localUrl : city.url)

  const navItems = [
    {
      href: '/',
      label: 'Главная',
      icon: (
        <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
          />
        </svg>
      ),
    },
    {
      label: currentCity.name,
      action: () => setShowCityMenu(!showCityMenu),
      icon: (
        <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
      ),
    },
    {
      href: '/sale',
      label: 'Каталог',
      icon: (
        <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
          />
        </svg>
      ),
    },
    {
      label: 'Позвонить',
      action: onCallbackRequest,
      icon: (
        <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
          />
        </svg>
      ),
      highlight: true,
    },
  ]

  return (
    <>
      {/* Меню выбора города */}
      {showCityMenu && (
        <div className='block lg:hidden fixed bottom-16 left-0 right-0 z-50 bg-zinc-900/98 backdrop-blur-lg border-t border-zinc-800 shadow-[0_-4px_10px_rgba(0,0,0,0.3)]'>
          <div className='p-4'>
            <h3 className='text-white font-semibold mb-3 text-center'>Выберите город</h3>
            <div className='space-y-2'>
              {Object.values(CITIES).map(city => (
                <Link
                  key={city.id}
                  href={cityHref(city)}
                  onClick={() => setShowCityMenu(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    currentCity.id === city.id
                      ? 'bg-[#FFD700] text-black font-semibold'
                      : 'bg-zinc-800 text-white hover:bg-zinc-700'
                  }`}
                >
                  <div className='flex items-center justify-between'>
                    <span>{city.name}</span>
                    {currentCity.id === city.id && (
                      <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Основная навигация */}
      <div className='block lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-t border-zinc-800 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]'>
        <nav className='flex justify-around items-center h-16 px-2'>
        {navItems.map((item, index) => {
          // Для элементов с ссылкой
          if (item.href) {
            return (
              <Link
                key={index}
                href={item.href}
                className={`flex flex-col items-center justify-center w-full h-full text-xs ${
                  pathname === item.href
                    ? 'text-[#FFD700]'
                    : 'text-gray-400 hover:text-[#FFD700]/80'
                } transition-all duration-200`}
              >
                <div
                  className={`relative ${
                    pathname === item.href ? 'scale-110' : ''
                  } transition-transform duration-200`}
                >
                  {pathname === item.href && (
                    <span className='absolute -inset-1 rounded-full bg-[#FFD700]/10 animate-pulse'></span>
                  )}
                  {item.icon}
                </div>
                <span className='mt-1'>{item.label}</span>
              </Link>
            )
          }

          // Для элементов с действием (кнопка звонка)
          return (
            <button
              key={index}
              onClick={item.action}
              className={`flex flex-col items-center justify-center w-full h-full text-xs ${
                item.highlight ? 'text-[#FFD700]' : 'text-gray-400 hover:text-[#FFD700]/80'
              } transition-all duration-200`}
            >
              <div
                className={`relative ${
                  item.highlight ? 'scale-110' : ''
                } transition-transform duration-200`}
              >
                {item.highlight && (
                  <span className='absolute -inset-1 rounded-full bg-[#FFD700]/20 animate-pulse'></span>
                )}
                {item.icon}
              </div>
              <span className='mt-1'>{item.label}</span>
            </button>
          )
        })}
        </nav>
      </div>
    </>
  )
}

export default MobileBottomNav
