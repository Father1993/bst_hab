import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'BST HAB - Производство и аренда модульных конструкций',
  description:
    'Производство и аренда бытовок, модульных гаражей и строительных конструкций в Москве и области. Быстрое изготовление, доставка, монтаж. ✓ Выгодные цены ✓ Собственное производство ✓ Гарантия качества',
  keywords: [
    'бытовки',
    'аренда бытовок',
    'модульные гаражи',
    'строительные бытовки',
    'BST HAB',
    'производство бытовок москва',
  ],
}

export default function Home() {
  return (
    <div className='space-y-16'>
      {/* Hero секция */}
      <section className='relative h-[600px] flex items-center -mx-4'>
        <div className='absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50 z-10' />
        <div className='absolute inset-0'>
          <Image
            src='/hero-bg.jpg'
            alt='BST HAB - Производство и аренда модульных конструкций'
            fill
            priority
            className='object-cover'
            sizes='100vw'
          />
        </div>
        <div className='container mx-auto px-4 relative z-20 text-white'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            Производство и аренда
            <br />
            модульных конструкций
          </h1>
          <p className='text-xl md:text-2xl mb-8 max-w-2xl'>
            Быстровозводимые бытовки и гаражи по типовым и индивидуальным
            проектам. Выгодные условия аренды строительных модулей.
          </p>
          <div className='flex flex-wrap gap-4'>
            <Link
              href='/catalog'
              className='inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors'
            >
              Каталог продукции
            </Link>
            <Link
              href='/rent'
              className='inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors'
            >
              Условия аренды
            </Link>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className='container mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Наши преимущества
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='p-6 bg-white rounded-lg shadow-lg'>
            <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4'>
              <svg
                className='w-6 h-6 text-blue-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h3 className='text-xl font-semibold mb-2'>Быстрое производство</h3>
            <p className='text-gray-600'>
              Изготовление модульных конструкций в кратчайшие сроки благодаря
              собственному производству
            </p>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-lg'>
            <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4'>
              <svg
                className='w-6 h-6 text-green-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h3 className='text-xl font-semibold mb-2'>Гарантия качества</h3>
            <p className='text-gray-600'>
              Все конструкции соответствуют строительным нормам и имеют
              необходимые сертификаты
            </p>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-lg'>
            <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4'>
              <svg
                className='w-6 h-6 text-purple-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
            </div>
            <h3 className='text-xl font-semibold mb-2'>Выгодные условия</h3>
            <p className='text-gray-600'>
              Гибкие условия оплаты, специальные предложения для постоянных
              клиентов
            </p>
          </div>
        </div>
      </section>

      {/* Основные услуги */}
      <section className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>Наши услуги</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-semibold mb-4'>
                Производство модульных конструкций
              </h3>
              <ul className='space-y-3 text-gray-600'>
                <li>✓ Строительные бытовки</li>
                <li>✓ Модульные гаражи</li>
                <li>✓ Пост охраны</li>
                <li>✓ Индивидуальные проекты</li>
              </ul>
              <Link
                href='/production'
                className='mt-6 inline-block text-blue-600 font-semibold hover:text-blue-800'
              >
                Подробнее →
              </Link>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-semibold mb-4'>
                Аренда строительных модулей
              </h3>
              <ul className='space-y-3 text-gray-600'>
                <li>✓ Аренда бытовок</li>
                <li>✓ Доставка и монтаж</li>
                <li>✓ Гибкие условия</li>
                <li>✓ Оперативное обслуживание</li>
              </ul>
              <Link
                href='/rent'
                className='mt-6 inline-block text-blue-600 font-semibold hover:text-blue-800'
              >
                Подробнее →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className='bg-blue-600 text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Нужна бытовка или модульное здание?
          </h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Оставьте заявку прямо сейчас и получите расчет стоимости и
            консультацию специалиста
          </p>
          <Link
            href='/contacts'
            className='inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors'
          >
            Получить расчет стоимости
          </Link>
        </div>
      </section>
    </div>
  )
}
