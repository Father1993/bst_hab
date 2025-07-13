'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import MobileBottomNav from './MobileBottomNav'
import CallbackForm from '@/components/features/CallbackForm'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showCallbackForm, setShowCallbackForm] = useState(false)
  const pathname = usePathname()

  // Отслеживание скролла для изменения стиля header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Обработчик открытия формы обратного звонка
  const handleOpenCallbackForm = () => {
    setShowCallbackForm(true)
  }

  // Обработчик закрытия формы обратного звонка
  const handleCloseCallbackForm = () => {
    setShowCallbackForm(false)
  }

  // Навигационные ссылки
  const navLinks = [
    { href: '/', label: 'Главная' },
    { href: '/about', label: 'О компании' },
    { href: '/rent', label: 'Аренда' },
    { href: '/sale', label: 'Продажа' },
    // { href: '/catalog', label: 'Каталог продукции' },
    { href: '/delivery', label: 'Доставка' },
    { href: '/contacts', label: 'Контакты' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black shadow-lg' : 'bg-black/95 backdrop-blur-lg'
        }`}
      >
        {/* Верхняя полоса с контактами */}
        <div className='hidden lg:block bg-zinc-900 text-[#FFD700]/90 py-2'>
          <div className='container mx-auto px-4'>
            <div className='flex justify-between items-center text-sm'>
              <div className='flex items-center space-x-6'>
                <a
                  href='tel:+79001234567'
                  className='flex items-center space-x-2 hover:text-[#FFD700] transition-colors'
                >
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                  <span>+7 (914) 542-21-88</span>
                </a>
                <div className='flex items-center space-x-2'>
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span>Пн-Сб: 9:00 - 19:00</span>
                </div>
              </div>
              <div className='flex items-center space-x-4'>
                <a
                  href='mailto:252188dv@mail.ru'
                  className='hover:text-[#FFD700] transition-colors'
                >
                  252188dv@mail.ru
                </a>
                <a
                  href='https://yandex.ru/maps/org/bst_khab/225751482910/?ll=135.062871%2C48.575113&z=17.54'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-[#FFD700] transition-colors'
                >
                  г. Хабаровск ул.Связная, 1Б
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Основная навигация */}
        <nav className='container mx-auto px-4'>
          <div className='flex justify-between items-center py-4'>
            {/* Логотип */}
            <Link href='/' className='relative flex items-center'>
              <Image
                src='/img/logo/bst_hab-logo-black.png'
                alt='BST HAB Logo'
                width={120}
                height={120}
                className='object-contain'
                priority
              />
            </Link>

            {/* Десктопное меню */}
            <div className='hidden lg:flex items-center space-x-8'>
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#FFD700] ${
                    pathname === link.href ? 'text-[#FFD700]' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Кнопка заказа звонка - десктоп */}
            <div className='hidden lg:block'>
              <button
                onClick={handleOpenCallbackForm}
                className='bg-[#FFD700] text-black px-6 py-2 rounded-lg hover:bg-[#FFD700]/90 transition-colors font-semibold flex items-center'
              >
                <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
                Заказать звонок
              </button>
            </div>

            {/* Мобильное меню */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden p-2 rounded-lg hover:bg-zinc-800 transition-colors'
              aria-label='Открыть меню'
            >
              <svg
                className='w-6 h-6 text-[#FFD700]'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Мобильное меню - выпадающее */}
          <div
            className={`lg:hidden fixed inset-x-0 top-[130px] bg-black/95 shadow-lg transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <div className='container mx-auto px-4 py-4'>
              <div className='flex flex-col space-y-4'>
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-medium transition-colors hover:text-[#FFD700] ${
                      pathname === link.href ? 'text-[#FFD700]' : 'text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className='pt-4 border-t border-zinc-800'>
                  <button
                    onClick={() => {
                      setIsOpen(false) // Закрываем мобильное меню
                      handleOpenCallbackForm() // Открываем форму обратного звонка
                    }}
                    className='w-full bg-[#FFD700] text-black px-6 py-2 rounded-lg hover:bg-[#FFD700]/90 transition-colors font-semibold flex items-center justify-center'
                  >
                    <svg
                      className='w-4 h-4 mr-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>
                    Заказать звонок
                  </button>
                </div>
                <div className='pt-4 space-y-2 text-sm text-[#FFD700]/80'>
                  <a href='tel:+79145422188' className='block hover:text-[#FFD700]'>
                    +7 (914) 542-21-88
                  </a>
                  <a href='mailto:252188dv@mail.ru' className='block hover:text-[#FFD700]'>
                    252188dv@mail.ru
                  </a>
                  <p>Пн-Сб: 9:00 - 19:00</p>
                  <p>г. Хабаровск</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Мобильное нижнее меню */}
      <MobileBottomNav onCallbackRequest={handleOpenCallbackForm} />

      {/* Добавляем отступ для мобильного нижнего меню, чтобы контент не скрывался под ним */}
      <div className='lg:hidden h-16 w-full'></div>

      {/* Форма обратного звонка */}
      <CallbackForm isOpen={showCallbackForm} onClose={handleCloseCallbackForm} />
    </>
  )
}

export default Header
