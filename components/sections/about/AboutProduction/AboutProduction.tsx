'use client'

import React from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { COMPANY_STATS, PRODUCTION_CAPABILITIES } from '@/components/shared/constants'
import { ICONS } from '@/components/shared/icon'

interface FeatureItem {
  icon: React.ReactElement
  title: string
  description: string
}

interface StatItem {
  number: string
  label: string
}

const AboutProduction = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features: FeatureItem[] = [
    {
      icon: ICONS.building,
      title: 'Все виды конструкций',
      description:
        'Производим каркасные бытовки, модули из сэндвич-панелей и переоборудуем морские контейнеры',
    },
    {
      icon: ICONS.building,
      title: 'Индивидуальные размеры',
      description:
        'Изготавливаем модули по размерам заказчика с учетом всех требований и пожеланий',
    },
    {
      icon: ICONS['shield-check'],
      title: 'Гарантия качества',
      description:
        'Используем только сертифицированные материалы и проверенные технологии производства',
    },
  ]

  const stats: StatItem[] = [
    { number: COMPANY_STATS.projectsCount, label: 'готовых бытовок и модулей' },
    { number: COMPANY_STATS.constructionTypes, label: 'минимальные сроки' },
    { number: COMPANY_STATS.experience, label: 'лет опыта' },
  ]

  return (
    <section className='py-8 md:py-12 bg-black relative overflow-hidden'>
      {/* Фоновые элементы */}
      <div className='absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black to-black' />
      <div className='absolute inset-0 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:40px_40px] opacity-5' />

      <div className='container mx-auto px-4 relative' ref={ref}>
        <div className='text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className='inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-[#FFD700]/10 bg-[#FFD700]/5'
          >
            <span className='text-[#FFD700] text-sm font-medium'>Производство</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-3xl md:text-4xl font-bold text-white mb-4'
          >
            Современное <span className='text-[#FFD700]'>производство</span> полного цикла
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-gray-400 max-w-2xl mx-auto'
          >
            Собственное производство позволяет нам изготавливать бытовки и модульные конструкции
            любых размеров: от стандартных решений до индивидуальных проектов с учетом всех
            пожеланий заказчика
          </motion.p>
        </div>

        {/* Основное изображение */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='relative rounded-2xl overflow-hidden mb-16 aspect-[16/9]'
        >
          <Image
            src='/img/about/big-module-main.webp'
            alt='Производство BST HAB'
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />
        </motion.div>

        {/* Особенности производства */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className='bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/30 hover:border-[#FFD700]/30 transition-all duration-300 group'
            >
              <div className='w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center text-[#FFD700] mb-4 group-hover:bg-[#FFD700]/20 transition-colors'>
                {feature.icon}
              </div>
              <h3 className='text-xl font-semibold text-white mb-2 group-hover:text-[#FFD700] transition-colors'>
                {feature.title}
              </h3>
              <p className='text-gray-400'>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Возможности производства */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className='mb-16'
        >
          <div className='text-center mb-8'>
            <h3 className='text-2xl md:text-3xl font-bold text-white mb-4'>
              Наши <span className='text-[#FFD700]'>возможности</span>
            </h3>
            <p className='text-gray-400 max-w-2xl mx-auto'>
              Мы производим широкий спектр конструкций, от типовых решений до уникальных проектов по
              индивидуальным заказам
            </p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
            {PRODUCTION_CAPABILITIES.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className='bg-zinc-800/30 backdrop-blur-sm rounded-lg p-4 text-center border border-zinc-700/30 hover:border-[#FFD700]/30 transition-all duration-300'
              >
                <span className='text-gray-300 text-sm'>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Преимущество компании */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className='mt-16 text-center'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            <div className='inline-flex flex-col md:flex-row items-center justify-center px-6 py-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/30 hover:border-[#FFD700]/30 transition-all duration-300'>
              <span className='text-[#FFD700] text-xl mr-2 mb-2 md:mb-0'>★</span>
              <span className='text-gray-300 font-medium text-center md:text-left'>
                <span className='text-[#FFD700]'>100% клиентов</span> рекомендуют нас друзьям —
                модульные решения, которые превосходят ожидания
              </span>
            </div>

            <div className='inline-flex flex-col md:flex-row items-center justify-center px-6 py-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/30 hover:border-[#FFD700]/30 transition-all duration-300'>
              <span className='text-[#FFD700] text-xl mr-2 mb-2 md:mb-0'>⚖️</span>
              <span className='text-gray-300 font-medium text-center md:text-left'>
                <span className='text-[#FFD700]'>Сниженный вес модулей</span> — экономичная
                транспортировка и доставка в любую точку
              </span>
            </div>
          </div>

          <div className='inline-flex flex-col items-center justify-center px-6 py-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/30 hover:border-[#FFD700]/30 transition-all duration-300'>
            <span className='text-gray-300 font-medium text-center mb-2'>
              Стандартный размер модуля <span className='text-[#FFD700]'>2.44м × 6м × 2.52м</span> —
              совместим с транспортными стандартами
            </span>
            <span className='text-gray-400 text-sm'>
              Предлагаем гибкие финансовые инструменты: рассрочка, лизинг, аренда с выкупом на
              индивидуальных условиях
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutProduction
