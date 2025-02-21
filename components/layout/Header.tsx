import Link from 'next/link'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['cyrillic', 'latin'] })

const Header = () => {
  return (
    <header className='w-full bg-white shadow-md'>
      <div className='container mx-auto px-4 py-2'>
        <div className='flex items-center justify-between text-sm text-gray-600'>
          <div className='flex items-center space-x-4'>
            <a
              href='tel:+79001234567'
              className='hover:text-blue-600 transition-colors'
            >
              +7 (900) 123-45-67
            </a>
            <span>|</span>
            <span>Пн-Вс: 8:00 - 20:00</span>
          </div>
          <div className='flex items-center space-x-4'>
            <a
              href='mailto:info@bst-hab.ru'
              className='hover:text-blue-600 transition-colors'
            >
              info@bst-hab.ru
            </a>
            <span>|</span>
            <span>г. Москва</span>
          </div>
        </div>
      </div>
      <nav
        className='container mx-auto px-4 py-4'
        role='navigation'
        aria-label='Главное меню'
      >
        <div className='flex justify-between items-center'>
          <Link
            href='/'
            className='flex items-center space-x-2'
            aria-label='BST HAB - На главную'
          >
            <span
              className={`text-2xl font-bold text-gray-800 ${montserrat.className}`}
            >
              BST HAB
            </span>
          </Link>

          <ul className='hidden md:flex space-x-8'>
            <li>
              <Link
                href='/production'
                className='text-gray-600 hover:text-gray-900 transition-colors'
              >
                Производство
              </Link>
            </li>
            <li>
              <Link
                href='/rent'
                className='text-gray-600 hover:text-gray-900 transition-colors'
              >
                Аренда
              </Link>
            </li>
            <li>
              <Link
                href='/catalog'
                className='text-gray-600 hover:text-gray-900 transition-colors'
              >
                Каталог
              </Link>
            </li>
            <li>
              <Link
                href='/delivery'
                className='text-gray-600 hover:text-gray-900 transition-colors'
              >
                Доставка
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className='text-gray-600 hover:text-gray-900 transition-colors'
              >
                О компании
              </Link>
            </li>
            <li>
              <Link
                href='/contacts'
                className='text-gray-600 hover:text-gray-900 transition-colors'
              >
                Контакты
              </Link>
            </li>
          </ul>

          <div className='flex items-center space-x-4'>
            <a
              href='tel:+79001234567'
              className='hidden md:inline-flex items-center space-x-2 text-blue-600 font-semibold'
            >
              <svg
                className='w-5 h-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                />
              </svg>
              <span>+7 (900) 123-45-67</span>
            </a>
            <button
              className='md:hidden'
              aria-label='Открыть меню'
              aria-expanded='false'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
