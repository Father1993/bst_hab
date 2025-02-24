'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { COMPANY_FEATURES, PRODUCT_TYPES } from '@/components/shared/constants'
import { ICONS } from '@/components/shared/icon'

const Features = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
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
        {/* Преимущества */}
        <motion.div
          initial='hidden'
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='mb-20'
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

        {/* Услуги */}
        <motion.div
          initial='hidden'
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Наши <span className='text-[#FFD700]'>услуги</span>
            </h2>
            <p className='text-gray-400 max-w-2xl mx-auto'>
              Производство и аренда модульных конструкций любой сложности. От типовых решений до
              индивидуальных проектов под ключ
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {PRODUCT_TYPES.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className='group relative overflow-hidden rounded-xl'
              >
                <Link href={service.link}>
                  <div className='relative aspect-[4/3]'>
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className='object-cover transition-transform duration-500 group-hover:scale-110'
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent' />
                  </div>
                  <div className='absolute bottom-0 left-0 right-0 p-6'>
                    <h3 className='text-xl font-semibold text-white mb-2'>{service.name}</h3>
                    <p className='text-gray-300 text-sm'>{service.description}</p>
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
      </div>
    </section>
  )
}

export default Features
