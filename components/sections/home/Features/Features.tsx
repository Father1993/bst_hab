'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { COMPANY_FEATURES, PRODUCT_TYPES } from '@/components/shared/constants'
import { ICONS } from '@/components/shared/icon'

// Определяем тип для продукта
interface ProductType {
  id: string
  name: string
  description: string
  image: string
  images?: string[]
  link: string
  featured?: boolean
}

const Features = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<string, number>>({})
  const intervalRefs = useRef<Record<string, NodeJS.Timeout>>({})

  useEffect(() => {
    setIsVisible(true)

    // Инициализация индексов изображений для каждой карточки
    const initialIndices: Record<string, number> = {}
    PRODUCT_TYPES.forEach((product: ProductType) => {
      if (product.images && product.images.length > 0) {
        initialIndices[product.id] = 0
      }
    })
    setCurrentImageIndex(initialIndices)

    // Настройка интервалов для слайдеров
    PRODUCT_TYPES.forEach((product: ProductType) => {
      if (product.images && product.images.length > 1) {
        intervalRefs.current[product.id] = setInterval(
          () => {
            setCurrentImageIndex(prev => ({
              ...prev,
              [product.id]: (prev[product.id] + 1) % (product.images?.length || 1),
            }))
          },
          3000 + Math.random() * 2000
        ) // Разные интервалы для разных карточек
      }
    })

    // Сохраняем текущие интервалы для очистки
    const currentIntervals = { ...intervalRefs.current }

    return () => {
      // Очистка интервалов при размонтировании
      Object.values(currentIntervals).forEach(interval => {
        clearInterval(interval)
      })
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section className='py-16 md:py-24 bg-gradient-to-b from-black to-zinc-900'>
      <div className='container mx-auto px-4'>
        {/* Услуги */}
        <motion.div
          initial='hidden'
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='mb-40'
        >
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Наши <span className='text-[#FFD700]'>категории</span>
            </h2>
            <p className='text-gray-400 max-w-2xl mx-auto'>
              Производство и аренда модульных конструкций любой сложности. От типовых решений до
              индивидуальных проектов под ключ
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {PRODUCT_TYPES.map((service: ProductType, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-xl ${
                  service.featured ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <Link href={service.link}>
                  <div
                    className={`relative ${service.featured ? 'aspect-[16/9] md:aspect-[16/9]' : 'aspect-[4/3]'}`}
                  >
                    {service.images && service.images.length > 0 ? (
                      <>
                        {service.images.map((img, imgIndex) => (
                          <Image
                            key={imgIndex}
                            src={img}
                            alt={`${service.name} - изображение ${imgIndex + 1}`}
                            fill
                            className={`object-cover transition-opacity duration-1000 ${
                              currentImageIndex[service.id] === imgIndex
                                ? 'opacity-100'
                                : 'opacity-0'
                            }`}
                            sizes={
                              service.featured
                                ? '(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 66vw'
                                : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            }
                          />
                        ))}
                      </>
                    ) : (
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className='object-cover transition-transform duration-500 group-hover:scale-110'
                        sizes={
                          service.featured
                            ? '(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 66vw'
                            : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        }
                      />
                    )}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent' />
                  </div>
                  <div className='absolute bottom-0 left-0 right-0 p-6'>
                    <h3
                      className={`font-semibold text-white mb-2 ${
                        service.featured ? 'text-2xl md:text-3xl' : 'text-xl'
                      }`}
                    >
                      {service.name}
                    </h3>
                    <p
                      className={`text-gray-300 ${
                        service.featured ? 'text-base md:text-lg max-w-xl' : 'text-sm'
                      }`}
                    >
                      {service.description}
                    </p>

                    {service.featured && (
                      <div className='mt-4 hidden md:block'>
                        <ul className='text-gray-300 text-sm space-y-1'>
                          <li className='flex items-center'>
                            <span className='text-[#FFD700] mr-2'>•</span>
                            <span>Бытовки для рабочих и ИТР</span>
                          </li>
                          <li className='flex items-center'>
                            <span className='text-[#FFD700] mr-2'>•</span>
                            <span>Блок-модули с тамбуром и без</span>
                          </li>
                          <li className='flex items-center'>
                            <span className='text-[#FFD700] mr-2'>•</span>
                            <span>Столовые, бани, сушилки</span>
                          </li>
                          <li className='flex items-center'>
                            <span className='text-[#FFD700] mr-2'>•</span>
                            <span>Душевые и туалетные модули</span>
                          </li>
                        </ul>
                        <div className='mt-4'>
                          <span className='inline-flex items-center text-[#FFD700] font-medium'>
                            Подробнее
                            <svg
                              className='w-4 h-4 ml-1'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M9 5l7 7-7 7'
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className='text-center mt-12'>
            <Link
              href='/catalog'
              className='inline-flex items-center justify-center px-8 py-4 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors group'
            >
              <span>Смотреть весь каталог</span>
              {ICONS.arrow}
            </Link>
          </div>
        </motion.div>

        {/* Преимущества */}
        <motion.div
          initial='hidden'
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Почему выбирают <span className='text-[#FFD700]'>BST HAB</span>
            </h2>
            <p className='text-gray-400 max-w-2xl mx-auto'>
              Мы предлагаем полный комплекс услуг по производству и аренде модульных конструкций с
              гарантией качества и индивидуальным подходом к каждому клиенту
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {COMPANY_FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className='bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/30 hover:border-[#FFD700]/30 transition-colors group'
              >
                <div className='w-16 h-16 bg-[#FFD700]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#FFD700]/20 transition-colors'>
                  {ICONS[feature.icon]}
                </div>
                <h3 className='text-xl font-semibold text-white mb-2'>{feature.title}</h3>
                <p className='text-gray-400'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
