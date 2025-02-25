/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/features/ContactForm'

interface ProductPageProps {
  product: any // В реальном проекте здесь должен быть правильный тип
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images.main)

  return (
    <main className='min-h-screen bg-black'>
      {/* Хлебные крошки */}
      <div className='container mx-auto px-4 py-6'>
        <div className='flex items-center gap-2 text-sm text-zinc-400'>
          <Link href='/' className='hover:text-white transition-colors'>
            Главная
          </Link>
          <span>/</span>
          <Link href='/rent' className='hover:text-white transition-colors'>
            Аренда
          </Link>
          <span>/</span>
          <Link
            href={`/rent#${product.category.id}`}
            className='hover:text-white transition-colors'
          >
            {product.category.name}
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
            <div className='space-y-4'>
              <div className='relative h-[400px] rounded-2xl overflow-hidden'>
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  className='object-cover'
                  priority
                />
              </div>
              <div className='grid grid-cols-4 gap-4'>
                {product.images.gallery.map((image: string, index: number) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative h-20 rounded-lg overflow-hidden cursor-pointer
                      ${selectedImage === image ? 'ring-2 ring-orange-500' : ''}`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className='object-cover'
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Информация */}
            <div>
              <h1 className='text-3xl md:text-4xl font-bold text-white mb-6'>{product.name}</h1>
              <p className='text-lg text-zinc-300 mb-8'>{product.description}</p>

              {/* Характеристики */}
              <div className='bg-black/50 rounded-xl p-6 mb-8'>
                <h2 className='text-xl font-semibold text-white mb-4'>Характеристики</h2>
                <dl className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <dt className='text-zinc-400'>Вместимость</dt>
                    <dd className='text-white font-medium'>{product.specifications.capacity}</dd>
                  </div>
                  <div>
                    <dt className='text-zinc-400'>Площадь</dt>
                    <dd className='text-white font-medium'>
                      {product.specifications.area.value} {product.specifications.area.units}
                    </dd>
                  </div>
                  <div>
                    <dt className='text-zinc-400'>Размеры</dt>
                    <dd className='text-white font-medium'>
                      {product.specifications.dimensions.length}x
                      {product.specifications.dimensions.width}x
                      {product.specifications.dimensions.height}{' '}
                      {product.specifications.dimensions.units}
                    </dd>
                  </div>
                  <div>
                    <dt className='text-zinc-400'>Температурный режим</dt>
                    <dd className='text-white font-medium'>
                      от {product.specifications.temperature.min} до{' '}
                      {product.specifications.temperature.max}
                      {product.specifications.temperature.units}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Комплектация */}
              <div className='mb-8'>
                <h2 className='text-xl font-semibold text-white mb-4'>Комплектация</h2>
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                  {product.includes.map((item: string) => (
                    <li key={item} className='flex items-center text-zinc-300'>
                      <svg
                        className='w-5 h-5 text-orange-500 mr-2'
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

              {/* Цена и кнопка */}
              <div className='bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-xl p-6'>
                <div className='flex items-end gap-4 mb-4'>
                  <div>
                    <p className='text-zinc-400 mb-1'>Стоимость аренды:</p>
                    <p className='text-3xl font-bold text-white'>
                      {product.pricing.rent.monthly.toLocaleString()} ₽
                      <span className='text-lg text-zinc-400'>/{product.pricing.rent.period}</span>
                    </p>
                  </div>
                  {product.inStock && (
                    <span className='bg-green-500 text-white text-sm px-3 py-1 rounded-full'>
                      В наличии
                    </span>
                  )}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full py-4 bg-gradient-to-r from-orange-500 to-yellow-500 
                  text-white rounded-xl font-medium text-lg shadow-lg hover:shadow-orange-500/20
                  transition-all duration-300'
                >
                  Арендовать
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Чертеж */}
      {product.images.blueprint && (
        <section className='py-20 bg-black'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-white text-center mb-12'>Схема планировки</h2>
            <div className='relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden'>
              <Image
                src={product.images.blueprint}
                alt={`Чертеж ${product.name}`}
                fill
                className='object-contain'
              />
            </div>
          </div>
        </section>
      )}

      {/* Форма обратной связи */}
      <section className='py-20 bg-zinc-900'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center mb-12'>
            <h2 className='text-3xl font-bold text-white mb-6'>Арендовать {product.name}</h2>
            <p className='text-zinc-400'>
              Оставьте заявку, и наш специалист свяжется с вами в течение 30 минут для обсуждения
              условий аренды
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

export default ProductPage
