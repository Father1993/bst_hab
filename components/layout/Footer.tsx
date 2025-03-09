import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Creator from './Creator'
import CallbackForm from '@/components/features/CallbackForm'
import useBreakpoint from '@/components/hooks/useBreakpoint'

const Footer = () => {
  const [showCallbackForm, setShowCallbackForm] = useState(false)
  const { isMobile } = useBreakpoint()
  const logoSize = isMobile ? 230 : 170

  // Обработчик открытия формы обратного звонка
  const handleOpenCallbackForm = () => {
    setShowCallbackForm(true)
  }

  // Обработчик закрытия формы обратного звонка
  const handleCloseCallbackForm = () => {
    setShowCallbackForm(false)
  }

  // Текущий год для копирайта
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-black text-white pt-16 pb-4 lg:pb-4 md:pb-4 pb-[80px]'>
      <div className='container mx-auto px-4'>
        {/* Основной контент футера */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Информация о компании */}
          <div className='space-y-6'>
            <Link href='/' className='block text-center md:text-left'>
              <div className='flex justify-center md:justify-start'>
                <Image
                  src='/img/logo/bst_hab-logo-black.png'
                  alt='BST HAB - Модульные здания в Хабаровске'
                  width={logoSize}
                  height={logoSize}
                  className='object-contain mb-4'
                />
              </div>
            </Link>
            <p className='text-gray-400 text-sm'>
              Производство и аренда модульных конструкций: бытовки, гаражи, строительные модули.
              Собственное производство в Хабаровске. Быстрое изготовление по типовым и
              индивидуальным проектам.
            </p>
            <div className='flex space-x-4'>
              <a
                href='https://vk.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='BST HAB ВКонтакте'
                className='w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#FFD700] transition-colors group'
              >
                <svg
                  className='w-5 h-5 text-white group-hover:text-black transition-colors'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.725-1.033-1.003-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.597v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202-2.17-3.048-2.763-5.335-2.763-5.81 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.848 2.46 2.274 4.617 2.867 4.617.22 0 .322-.102.322-.66V9.379c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.748c.372 0 .5.203.5.643v3.473c0 .372.17.5.271.5.22 0 .407-.128.813-.542 1.27-1.422 2.188-3.624 2.188-3.624.119-.254.373-.491.847-.491h1.744c.525 0 .643.27.525.643-.22 1.032-2.392 4.098-2.392 4.098-.186.305-.254.44 0 .78.186.254.796.779 1.202 1.253.745.847 1.32 1.558 1.473 2.045.17.473-.085.71-.576.71z' />
                </svg>
              </a>
              <a
                href='https://t.me'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='BST HAB Telegram'
                className='w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#FFD700] transition-colors group'
              >
                <svg
                  className='w-5 h-5 text-white group-hover:text-black transition-colors'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.276.276-.566.276l.208-2.937 5.357-4.84c.227-.198-.054-.198-.356-.198l-6.618 4.173-2.833-.886c-.617-.198-.617-.617.128-.915l11.045-4.264c.518-.198.97.128.806.915z' />
                </svg>
              </a>
              <a
                href='https://wa.me/79142039197'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='BST HAB WhatsApp'
                className='w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#FFD700] transition-colors group'
              >
                <svg
                  className='w-5 h-5 text-white group-hover:text-black transition-colors'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z' />
                </svg>
              </a>
            </div>
          </div>

          {/* Модульные конструкции - Каталог */}
          <div>
            <h3 className='text-[#FFD700] font-semibold mb-6'>Модульные решения</h3>
            <ul className='space-y-4'>
              <li>
                <Link
                  href='/sale/'
                  className='text-gray-400 hover:text-[#FFD700] transition-colors'
                >
                  Жилые модули и бытовки
                </Link>
              </li>
              <li>
                <Link
                  href='/sale/'
                  className='text-gray-400 hover:text-[#FFD700] transition-colors'
                >
                  Офисные и административные здания
                </Link>
              </li>
              <li>
                <Link
                  href='/sale/'
                  className='text-gray-400 hover:text-[#FFD700] transition-colors'
                >
                  Модульные гаражи и автосервисы
                </Link>
              </li>
              <li>
                <Link
                  href='/sale/'
                  className='text-gray-400 hover:text-[#FFD700] transition-colors'
                >
                  Посты охраны и КПП
                </Link>
              </li>
              <li>
                <Link
                  href='/sale/'
                  className='text-gray-400 hover:text-[#FFD700] transition-colors'
                >
                  Строительные бытовки и вагончики
                </Link>
              </li>
              <li>
                <Link
                  href='/sale/'
                  className='text-[#FFD700] hover:text-[#FFD700]/80 transition-colors font-medium'
                >
                  Весь каталог продукции →
                </Link>
              </li>
            </ul>
          </div>

          {/* Услуги и популярные страницы */}
          <div>
            <h3 className='text-[#FFD700] font-semibold mb-6'>Услуги и информация</h3>
            <ul className='space-y-4'>
              <li>
                <Link href='/rent' className='text-gray-400 hover:text-[#FFD700] transition-colors'>
                  Аренда модульных зданий в Хабаровске
                </Link>
              </li>
              <li>
                <Link
                  href='/delivery'
                  className='text-gray-400 hover:text-[#FFD700] transition-colors'
                >
                  Доставка и монтаж под ключ
                </Link>
              </li>
              <li>
                <Link href='/sale' className='text-gray-400 hover:text-[#FFD700] transition-colors'>
                  Продажа модульных конструкций
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-gray-400 hover:text-[#FFD700] transition-colors'
                >
                  О компании BST HAB
                </Link>
              </li>
              <li>
                <Link
                  href='/#projects_co'
                  className='text-gray-400 hover:text-[#FFD700] transition-colors'
                >
                  Реализованные проекты
                </Link>
              </li>
              <li>
                <button
                  onClick={handleOpenCallbackForm}
                  className='text-gray-400 hover:text-[#FFD700] transition-colors'
                >
                  Заказать звонок специалиста
                </button>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className='text-[#FFD700] font-semibold mb-6'>Контакты</h3>
            <ul className='space-y-4'>
              <li className='flex items-start space-x-3'>
                <svg
                  className='w-5 h-5 text-gray-400 mt-0.5 shrink-0'
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
                <div>
                  <a
                    href='tel:+79142039197'
                    className='text-gray-400 hover:text-[#FFD700] transition-colors block'
                  >
                    +7 (914) 203-91-97
                  </a>
                  <span className='text-xs text-gray-500'>
                    Звонки 7 дней в неделю с 9:00 до 19:00
                  </span>
                </div>
              </li>
              <li className='flex items-start space-x-3'>
                <svg
                  className='w-5 h-5 text-gray-400 mt-0.5 shrink-0'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                <div>
                  <a
                    href='mailto:252188@mail.ru'
                    className='text-gray-400 hover:text-[#FFD700] transition-colors block'
                  >
                    252188@mail.ru
                  </a>
                  <span className='text-xs text-gray-500'>Ответ в течение 2 часов</span>
                </div>
              </li>
              <li className='flex items-start space-x-3'>
                <svg
                  className='w-5 h-5 text-gray-400 mt-0.5 shrink-0'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <div>
                  <span className='text-gray-400 block'>Пн-Сб: 9:00 - 19:00</span>
                  <span className='text-xs text-gray-500'>Вс: выходной</span>
                </div>
              </li>
              <li className='flex items-start space-x-3'>
                <svg
                  className='w-5 h-5 text-gray-400 mt-0.5 shrink-0'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                <div>
                  <a
                    href='https://yandex.ru/maps/org/bst_khab/225751482910/?ll=135.062871%2C48.575113&z=17.54'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 hover:text-[#FFD700] transition-colors block'
                  >
                    г. Хабаровск, ул. Связная, 1Б
                  </a>
                  <span className='text-xs text-gray-500'>Производство и офис</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Дополнительная информация для SEO */}
        <div className='mb-8 border-t border-zinc-800 pt-8'>
          <h4 className='text-sm text-[#FFD700] mb-4'>
            BST HAB - Модульные решения для бизнеса в Хабаровском крае
          </h4>
          <p className='text-xs text-gray-500 mb-2'>
            Компания BST HAB предлагает комплексные модульные решения для бизнеса и частных лиц в
            Хабаровске и Хабаровском крае. Мы производим, продаем и сдаем в аренду модульные здания
            любого типа и сложности: от строительных бытовок и постов охраны до многоэтажных
            административных комплексов.
          </p>
          <p className='text-xs text-gray-500'>
            В нашем каталоге представлены: жилые модули и бытовки для проживания, офисные и
            административные здания, модульные гаражи и боксы, строительные бытовки и вагончики,
            модульные посты охраны и КПП. Оказываем услуги по доставке и монтажу модульных
            конструкций под ключ. Работаем с 2015 года, реализовали более 1000 проектов.
          </p>
        </div>

        {/* Нижняя часть футера */}
        <div className='pt-8 border-t border-zinc-800 mb-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <p className='text-gray-400 text-sm'>
              © 2013 - {currentYear} ООО "БСТ ХАБ". Все права защищены.
            </p>
            <div className='flex flex-wrap gap-4 md:justify-end'>
              <Link
                href='/privacy'
                className='text-gray-400 text-sm hover:text-[#FFD700] transition-colors'
              >
                Политика конфиденциальности
              </Link>
              <Link
                href='/privacy-policy'
                className='text-gray-400 text-sm hover:text-[#FFD700] transition-colors'
              >
                Политика использования cookie
              </Link>
              <Link
                href='/sitemap.xml'
                className='text-gray-400 text-sm hover:text-[#FFD700] transition-colors'
              >
                Карта сайта
              </Link>
            </div>
          </div>
        </div>
        <div className='relative z-10'>
          <Creator />
        </div>
      </div>

      {/* Форма обратного звонка */}
      <CallbackForm isOpen={showCallbackForm} onClose={handleCloseCallbackForm} />

      {/* Микроразметка данных компании для SEO */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'BST HAB',
            url: 'https://bst-hab.ru',
            logo: 'https://bst-hab.ru/img/logo/bst_hab-logo-black.png',
            description:
              'Производство, продажа и аренда модульных конструкций: бытовки, гаражи, строительные модули в Хабаровске',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'ул. Связная, 1Б',
              addressLocality: 'Хабаровск',
              addressRegion: 'Хабаровский край',
              postalCode: '680000',
              addressCountry: 'RU',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+7-914-203-91-97',
              contactType: 'customer service',
              email: '252188@mail.ru',
              areaServed: 'RU',
              availableLanguage: 'Russian',
            },
            sameAs: ['https://vk.com/bsthab', 'https://t.me/bsthab'],
          }),
        }}
      />
    </footer>
  )
}

export default Footer
