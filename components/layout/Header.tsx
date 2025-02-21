import Link from 'next/link'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['cyrillic', 'latin'] })

const Header = () => {
  return (
    <header className='w-full bg-white shadow-md'>
      <nav
        className='container mx-auto px-4 py-4'
        role='navigation'
        aria-label='Главное меню'
      >
        <div className='flex justify-between items-center'>
          <Link
            href='/'
            className='flex items-center space-x-2'
            aria-label='BST Habitat - На главную'
          >
            <span
              className={`text-2xl font-bold text-gray-800 ${montserrat.className}`}
            >
              BST Habitat
            </span>
          </Link>

          <ul className='hidden md:flex space-x-8'>
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
                href='/about'
                className='text-gray-600 hover:text-gray-900 transition-colors'
              >
                О компании
              </Link>
            </li>
            <li>
              <Link
                href='/blog'
                className='text-gray-600 hover:text-gray-900 transition-colors'
              >
                Блог
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
      </nav>
    </header>
  )
}

export default Header
