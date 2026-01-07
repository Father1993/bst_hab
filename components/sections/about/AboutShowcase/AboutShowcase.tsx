'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

interface AboutShowcaseProps {
  city?: 'khabarovsk' | 'irkutsk'
}

const AboutShowcase = ({ city: _city = 'khabarovsk' }: AboutShowcaseProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Массив с фотографиями интерьеров
  const showcaseImages = [
    {
      src: '/img/about/standart-modules.webp',
      alt: 'Интерьер стандартного модуля',
      title: 'Стандартные модули',
      description: 'Комфортные и функциональные решения для жизни и работы',
    },
    {
      src: '/img/about/garage-module-interier.webp',
      alt: 'Интерьер гаража',
      title: 'Гаражи',
      description: 'Надежные конструкции для хранения и обслуживания техники',
    },
    {
      src: '/img/about/banya.webp',
      alt: 'Интерьер бани',
      title: 'Бани',
      description: 'Современные банные комплексы с качественной отделкой',
    },
    {
      src: '/img/about/stolovaya.webp',
      alt: 'Интерьер столовой',
      title: 'Столовые',
      description: 'Просторные помещения для организации питания',
    },
  ]

  return (
    <section className='py-16 md:py-24 bg-black relative overflow-hidden' ref={ref}>
      {/* Фоновые элементы */}
      <div className='absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black to-black' />
      <div className='absolute inset-0 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:40px_40px] opacity-5' />

      <div className='container mx-auto px-4 relative'>
        <div className='text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className='inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-[#FFD700]/10 bg-[#FFD700]/5'
          >
            <span className='text-[#FFD700] text-sm font-medium'>Всегда в наличии</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-3xl md:text-4xl font-bold text-white mb-4'
          >
            Готовые решения <span className='text-[#FFD700]'>для любых задач</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-gray-400 max-w-2xl mx-auto'
          >
            У нас всегда есть модули в наличии как для продажи, так и для аренды. Выбирайте готовое
            решение или закажите индивидуальный проект.
          </motion.p>
        </div>

        {/* Галерея интерьеров */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
          {showcaseImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className='group relative rounded-xl overflow-hidden aspect-[4/3]'
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className='object-cover transition-transform duration-700 group-hover:scale-105'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity' />
              <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                <h3 className='text-xl font-bold mb-2 group-hover:text-[#FFD700] transition-colors'>
                  {image.title}
                </h3>
                <p className='text-gray-300 text-sm'>{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Информация о наличии и аренде */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className='bg-zinc-800/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-700/30 mb-12'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                Модули <span className='text-[#FFD700]'>в наличии</span>
              </h3>
              <p className='text-gray-400 mb-4'>
                Мы поддерживаем постоянный запас готовых модулей различного назначения, что
                позволяет оперативно решать задачи наших клиентов без длительного ожидания.
              </p>
              <ul className='space-y-2 text-gray-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-[#FFD700] mt-1'>✓</span>
                  <span>Стандартные бытовки для рабочих</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-[#FFD700] mt-1'>✓</span>
                  <span>Модули для ИТР с душем и туалетом</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-[#FFD700] mt-1'>✓</span>
                  <span>Посты охраны и КПП</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-[#FFD700] mt-1'>✓</span>
                  <span>Дачные домики и гаражи</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                Выгодная <span className='text-[#FFD700]'>аренда</span>
              </h3>
              <p className='text-gray-400 mb-4'>
                Предлагаем услуги аренды модульных конструкций на гибких условиях для временных
                объектов, строительных площадок и сезонных проектов.
              </p>
              <ul className='space-y-2 text-gray-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-[#FFD700] mt-1'>✓</span>
                  <span>Гибкие сроки аренды от 1 месяца</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-[#FFD700] mt-1'>✓</span>
                  <span>Возможность аренды с последующим выкупом</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-[#FFD700] mt-1'>✓</span>
                  <span>Доставка и монтаж на объекте</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-[#FFD700] mt-1'>✓</span>
                  <span>Техническое помощь на весь период аренды</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex flex-col sm:flex-row gap-4 justify-center'
        >
          <Link
            href='/rent'
            className='inline-flex items-center justify-center px-8 py-4 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors group'
          >
            <span>Арендовать модуль</span>
            <svg
              className='w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </Link>
          <Link
            href='/sale'
            className='inline-flex items-center justify-center px-8 py-4 border-2 border-[#FFD700] text-[#FFD700] rounded-lg font-semibold hover:bg-[#FFD700] hover:text-black transition-colors'
          >
            Смотреть каталог
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutShowcase
