'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Loader from '@/components/ui/Loader'

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const advantages = [
    '10+ лет опыта',
    'Собственное производство',
    'Быстрая доставка',
    'Гарантия качества',
  ]

  if (!isMounted) {
    return <Loader />
  }

  return (
    <section className='relative min-h-screen flex items-center bg-black text-white overflow-hidden'>
      {/* Фоновый видеослайдер */}
      <div className='absolute inset-0 z-0'>
        <div className='relative w-full h-full'>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
              isVideoLoaded ? 'opacity-50' : 'opacity-0'
            }`}
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src='/img/video_bg.mp4' type='video/mp4' />
          </video>
          {/* Градиентный оверлей */}
          <div className='absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent' />
        </div>
      </div>

      {/* Основной контент */}
      <div className='container mx-auto px-4 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Левая колонка с текстом */}
          <div className='space-y-8'>
            <div className='space-y-6'>
              <h2 className='inline-block bg-[#FFD700]/10 text-[#FFD700] px-4 py-2 rounded-full text-sm font-medium'>
                Лидер рынка модульного строительства в г. Хабаровск
              </h2>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight'>
                <span className='text-[#FFD700]'>Современные</span> модульные
                <br />
                решения для бизнеса
              </h1>
              <p className='text-lg sm:text-xl text-gray-300 max-w-xl'>
                Производство и аренда модульных конструкций любой сложности. От
                типовых бытовок до индивидуальных проектов под ключ.
              </p>
            </div>

            {/* Преимущества */}
            <div className='grid grid-cols-2 gap-4'>
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className='flex items-center space-x-2 text-gray-300'
                >
                  <svg
                    className='w-5 h-5 text-[#FFD700]'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>{advantage}</span>
                </div>
              ))}
            </div>

            {/* Кнопки действия */}
            <div className='flex flex-wrap gap-4'>
              <Link
                href='/catalog'
                className='group relative px-8 py-4 bg-[#FFD700] text-black rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:scale-105'
              >
                <div className='absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500' />
                <span className='relative font-bold text-lg'>
                  Смотреть каталог
                </span>
              </Link>
              <Link
                href='/rent'
                className='group relative px-8 py-4 border-2 border-[#FFD700] text-[#FFD700] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]'
              >
                <div className='absolute inset-0 bg-[#FFD700] transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500' />
                <span className='relative font-bold text-lg group-hover:text-black transition-colors duration-300'>
                  Арендовать
                </span>
              </Link>
            </div>
          </div>

          {/* Правая колонка с изображением */}
          <div className='relative'>
            <div className='relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl'>
              <Image
                src='/img/2.png'
                alt='Модульные конструкции BST HAB'
                width={800}
                height={600}
                priority
                quality={90}
                className='object-cover w-full h-full'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px'
              />
              {/* Статистика */}
              <div className='absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-[#FFD700]/20'>
                <div className='grid grid-cols-3 gap-4 text-center'>
                  <div>
                    <div className='text-[#FFD700] text-2xl font-bold'>
                      500+
                    </div>
                    <div className='text-gray-300 text-sm'>Проектов</div>
                  </div>
                  <div>
                    <div className='text-[#FFD700] text-2xl font-bold'>98%</div>
                    <div className='text-gray-300 text-sm'>
                      Довольных клиентов
                    </div>
                  </div>
                  <div>
                    <div className='text-[#FFD700] text-2xl font-bold'>
                      24/7
                    </div>
                    <div className='text-gray-300 text-sm'>Поддержка</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
