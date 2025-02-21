import Link from 'next/link'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['cyrillic', 'latin'] })

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Компания */}
          <div>
            <h2 className={`text-xl font-bold mb-4 ${montserrat.className}`}>
              BST Habitat
            </h2>
            <p className='text-gray-400 mb-4'>
              Современные решения для вашего бизнеса
            </p>
            <div className='flex space-x-4'>
              <a
                href='https://vk.com/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Мы ВКонтакте'
              >
                <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
                  <path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 16.74c-.156.156-.336.228-.42.228-.084 0-.168-.024-.24-.072-.144-.096-.288-.24-.432-.432-.144-.192-.3-.42-.468-.684-.168-.264-.336-.528-.504-.792-.168-.264-.336-.504-.504-.72-.168-.216-.312-.372-.432-.468-.12-.096-.216-.144-.288-.144-.072 0-.144.024-.216.072-.072.048-.144.12-.216.216-.072.096-.132.216-.18.36-.048.144-.072.312-.072.504 0 .192-.012.348-.036.468-.024.12-.06.216-.108.288-.048.072-.108.12-.18.144-.072.024-.156.036-.252.036h-.756c-.384 0-.78-.024-1.188-.072-.408-.048-.804-.144-1.188-.288-.384-.144-.756-.336-1.116-.576-.36-.24-.684-.528-.972-.864-.288-.336-.54-.708-.756-1.116-.216-.408-.396-.84-.54-1.296-.144-.456-.252-.912-.324-1.368-.072-.456-.108-.888-.108-1.296 0-.408.036-.744.108-1.008.072-.264.18-.468.324-.612.144-.144.324-.24.54-.288.216-.048.456-.072.72-.072h3.24c.192 0 .348.036.468.108.12.072.216.168.288.288.072.12.132.264.18.432.048.168.084.348.108.54.024.192.048.384.072.576.024.192.048.372.072.54.024.168.048.312.072.432.024.12.048.204.072.252.024.048.06.084.108.108.048.024.108.036.18.036.072 0 .156-.024.252-.072.096-.048.204-.12.324-.216.12-.096.252-.216.396-.36.144-.144.3-.312.468-.504.168-.192.336-.396.504-.612.168-.216.324-.432.468-.648.144-.216.264-.42.36-.612.096-.192.168-.36.216-.504.048-.144.084-.252.108-.324.024-.072.048-.12.072-.144.024-.024.06-.036.108-.036h3.24c.192 0 .348.012.468.036.12.024.204.06.252.108.048.048.06.108.036.18-.024.072-.06.156-.108.252z' />
                </svg>
              </a>
              <a
                href='https://telegram.org/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Наш Telegram канал'
              >
                <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
                  <path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.276.276-.566.276l.208-2.937 5.357-4.84c.227-.198-.054-.198-.356-.198l-6.618 4.173-2.833-.886c-.617-.198-.617-.617.128-.915l11.045-4.264c.518-.198.97.128.806.915z' />
                </svg>
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Навигация</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/catalog'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Каталог
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  О компании
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Блог
                </Link>
              </li>
              <li>
                <Link
                  href='/contacts'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Контакты</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='tel:+79001234567'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  +7 (900) 123-45-67
                </a>
              </li>
              <li>
                <a
                  href='mailto:info@bst-habitat.ru'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  info@bst-habitat.ru
                </a>
              </li>
              <li className='text-gray-400'>г. Москва, ул. Примерная, д. 1</li>
            </ul>
          </div>

          {/* Подписка */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Подписка на новости</h3>
            <form className='space-y-4'>
              <input
                type='email'
                placeholder='Ваш email'
                className='w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                aria-label='Email для подписки на новости'
              />
              <button
                type='submit'
                className='w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors'
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>

        <div className='mt-8 pt-8 border-t border-gray-800 text-center text-gray-400'>
          <p>© {new Date().getFullYear()} BST Habitat. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
