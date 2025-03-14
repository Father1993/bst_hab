/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/features/ContactForm'
import CallbackForm from '@/components/features/CallbackForm'

interface ProductPageProps {
  product: any // В реальном проекте здесь должен быть правильный тип
}

// Компонент слайдера для ProductPage
const ProductImageSlider = ({ images, productName }: { images: string[]; productName: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Переход к предыдущему изображению
  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  // Переход к следующему изображению
  const handleNext = () => {
    setDirection(1)
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  // Варианты анимации для слайдера
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  }

  return (
    <div className='space-y-4'>
      {/* Основной слайдер */}
      <div className='relative aspect-[4/3] bg-zinc-900 rounded-2xl overflow-hidden'>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className='absolute inset-0'
          >
            <Image
              src={images[currentIndex]}
              alt={`${productName} ${currentIndex + 1}`}
              fill
              className='object-cover'
              priority={currentIndex === 0}
              quality={90}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </motion.div>
        </AnimatePresence>

        {/* Кнопки управления */}
        <button
          onClick={handlePrev}
          className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10 transition-all duration-300'
          aria-label='Предыдущее изображение'
        >
          <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10 transition-all duration-300'
          aria-label='Следующее изображение'
        >
          <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </button>

        {/* Индикаторы */}
        <div className='absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-orange-500 w-4' : 'bg-white/50'
              }`}
              aria-label={`Перейти к изображению ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Миниатюры */}
      <div className='grid grid-cols-4 gap-4'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
              currentIndex === index
                ? 'border-orange-500'
                : 'border-transparent hover:border-orange-500/50'
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
          >
            <Image
              src={image}
              alt={`${productName} ${index + 1}`}
              fill
              className='object-cover'
              sizes='(max-width: 768px) 25vw, 10vw'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const [showCallbackForm, setShowCallbackForm] = useState(false)

  // Обработчик открытия формы обратного звонка
  const handleOpenCallbackForm = () => {
    setShowCallbackForm(true)
  }

  // Обработчик закрытия формы обратного звонка
  const handleCloseCallbackForm = () => {
    setShowCallbackForm(false)
  }

  return (
    <main className='min-h-screen bg-black'>
      {/* Хлебные крошки */}
      <div className='container mx-auto px-4 py-6'>
        <div className='flex items-center gap-2 text-sm text-zinc-400'>
          <Link href='/' className='hover:text-white transition-colors'>
            Главная
          </Link>
          <span>/</span>
          <Link href='/sale' className='hover:text-white transition-colors'>
            Продажа
          </Link>
          <span>/</span>
          <span className='text-white'>{product.name}</span>
        </div>
      </div>

      {/* Основная информация о товаре */}
      <section className='py-12 bg-zinc-900'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Галерея */}
            <ProductImageSlider images={product.images} productName={product.name} />

            {/* Информация */}
            <div>
              <h1 className='text-3xl md:text-4xl font-bold text-white mb-6'>{product.name}</h1>
              <p className='text-lg text-zinc-300 mb-8'>{product.description}</p>

              {/* Характеристики */}
              <div className='bg-black/50 rounded-xl p-6 mb-8'>
                <h2 className='text-xl font-semibold text-white mb-4'>Характеристики</h2>
                <dl className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {product.specifications.capacity && (
                    <div>
                      <dt className='text-zinc-400'>Вместимость</dt>
                      <dd className='text-white font-medium'>{product.specifications.capacity}</dd>
                    </div>
                  )}
                  {product.specifications.area && (
                    <div>
                      <dt className='text-zinc-400'>Площадь</dt>
                      <dd className='text-white font-medium'>{product.specifications.area}</dd>
                    </div>
                  )}
                  {product.specifications.dimensions && (
                    <div>
                      <dt className='text-zinc-400'>Размеры</dt>
                      <dd className='text-white font-medium'>
                        {product.specifications.dimensions.length &&
                          product.specifications.dimensions.length}
                        {product.specifications.dimensions.width &&
                          ` × ${product.specifications.dimensions.width}`}
                        {product.specifications.dimensions.height &&
                          ` × ${product.specifications.dimensions.height}`}
                      </dd>
                    </div>
                  )}
                  {product.specifications.temperature && (
                    <div>
                      <dt className='text-zinc-400'>Температурный режим</dt>
                      <dd className='text-white font-medium'>
                        {product.specifications.temperature}
                      </dd>
                    </div>
                  )}
                  {product.specifications.weight && (
                    <div>
                      <dt className='text-zinc-400'>Вес</dt>
                      <dd className='text-white font-medium'>{product.specifications.weight}</dd>
                    </div>
                  )}
                  {product.specifications.lifespan && (
                    <div>
                      <dt className='text-zinc-400'>Срок службы</dt>
                      <dd className='text-white font-medium'>{product.specifications.lifespan}</dd>
                    </div>
                  )}
                  {product.specifications.floors && (
                    <div>
                      <dt className='text-zinc-400'>Этажность</dt>
                      <dd className='text-white font-medium'>{product.specifications.floors}</dd>
                    </div>
                  )}
                  {product.specifications.panelThickness && (
                    <div>
                      <dt className='text-zinc-400'>Толщина панелей</dt>
                      <dd className='text-white font-medium'>
                        {product.specifications.panelThickness}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* Особенности */}
              {product.features && product.features.length > 0 && (
                <div className='mb-8'>
                  <h2 className='text-xl font-semibold text-white mb-4'>Особенности</h2>
                  <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    {product.features.map((item: string, index: number) => (
                      <li key={index} className='flex items-center text-zinc-300'>
                        <svg
                          className='w-5 h-5 text-orange-500 mr-2 shrink-0'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Цена и кнопка */}
              <div className='bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-xl p-6'>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleOpenCallbackForm}
                  className='w-full py-4 bg-gradient-to-r from-orange-500 to-yellow-500 
                  text-white rounded-xl font-medium text-lg shadow-lg hover:shadow-orange-500/20
                  transition-all duration-300'
                >
                  Получить консультацию
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Подробное описание */}
      {product.longDescription && (
        <section className='py-16 bg-black'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-white text-center mb-12'>Описание</h2>
            <div className='max-w-4xl mx-auto'>
              <div className='prose prose-lg prose-invert'>
                {product.longDescription.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className='text-zinc-300 mb-4'>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Преимущества */}
      {product.advantages && product.advantages.length > 0 && (
        <section className='py-16 bg-zinc-900'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-white text-center mb-12'>Преимущества</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {product.advantages.map((advantage: any, index: number) => (
                <div
                  key={index}
                  className='bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800/30 hover:border-orange-500/30 transition-colors'
                >
                  <div className='w-16 h-16 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4'>
                    <svg
                      className='w-8 h-8 text-orange-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-semibold text-white mb-2'>{advantage.title}</h3>
                  <p className='text-zinc-400'>{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Форма обратной связи */}
      <section className='py-20 bg-zinc-900'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center mb-12'>
            <h2 className='text-3xl font-bold text-white mb-6'>Получить консультацию</h2>
            <p className='text-zinc-400'>
              Оставьте заявку, и наш специалист свяжется с вами в течение 30 минут для обсуждения
              вашего проекта
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Форма обратного звонка */}
      <CallbackForm isOpen={showCallbackForm} onClose={handleCloseCallbackForm} />
    </main>
  )
}

export default ProductPage
