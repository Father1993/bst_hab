import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Главная | BST Habitat - Современные решения для бизнеса',
  description:
    'BST Habitat - ваш надежный партнер в развитии бизнеса. Предлагаем комплексные решения для роста и оптимизации вашего бизнеса.',
  keywords: ['главная', 'бизнес решения', 'BST Habitat', 'развитие бизнеса'],
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
            alt='BST Habitat - Современные решения для бизнеса'
            fill
            priority
            className='object-cover'
            sizes='100vw'
          />
        </div>
        <div className='container mx-auto px-4 relative z-20 text-white'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            Современные решения
            <br />
            для вашего бизнеса
          </h1>
          <p className='text-xl md:text-2xl mb-8 max-w-2xl'>
            Мы помогаем компаниям расти и развиваться, предоставляя
            инновационные решения и профессиональную поддержку
          </p>
          <Link
            href='/contacts'
            className='inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors'
          >
            Связаться с нами
          </Link>
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
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            </div>
            <h3 className='text-xl font-semibold mb-2'>Быстрое внедрение</h3>
            <p className='text-gray-600'>
              Оперативно внедряем решения, которые начинают работать на ваш
              бизнес уже сегодня
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
              Предоставляем только проверенные решения с гарантией качества и
              поддержкой
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
                  d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h3 className='text-xl font-semibold mb-2'>24/7 поддержка</h3>
            <p className='text-gray-600'>
              Наша команда всегда на связи и готова помочь решить любые вопросы
              в любое время
            </p>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className='bg-blue-600 text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Готовы начать работу с нами?
          </h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Оставьте заявку прямо сейчас и получите бесплатную консультацию по
            развитию вашего бизнеса
          </p>
          <Link
            href='/contacts'
            className='inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors'
          >
            Оставить заявку
          </Link>
        </div>
      </section>
    </div>
  )
}
