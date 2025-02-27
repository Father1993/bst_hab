'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MobileBottomNavProps {
  onCallbackRequest: () => void // Функция для открытия формы обратного звонка
}

const MobileBottomNav = ({ onCallbackRequest }: MobileBottomNavProps) => {
  const pathname = usePathname()

  // Основные иконки навигации
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
      href: '/rent',
      label: 'Аренда',
      icon: (
        <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
          />
        </svg>
      ),
    },
    {
      href: '/catalog',
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
      action: onCallbackRequest, // Используем переданную функцию
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
  )
}

export default MobileBottomNav
