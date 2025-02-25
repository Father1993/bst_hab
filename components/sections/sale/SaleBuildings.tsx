'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ContactForm from '@/components/features/ContactForm'

const categories = [
  {
    id: 'office',
    title: 'Модульные офисы',
    description:
      'Мобильные офисы продаж с возможностью возведения в 1 или 2 этажа, не требующие капитального фундамента.',
    image: '/img/modules/office.jpg',
    features: ['Быстрый монтаж', 'Мобильность', 'Комфортные условия', 'Доступная цена'],
  },
  {
    id: 'abk',
    title: 'АБК',
    description:
      'Административно-бытовые комплексы с полной инфраструктурой для строительных площадок и промышленных объектов.',
    image: '/img/modules/abk.jpg',
    features: ['Столовая', 'Медпункт', 'Санузлы', 'Склады'],
  },
  {
    id: 'hostel',
    title: 'Хостелы и гостиницы',
    description: 'Быстровозводимые модульные гостиницы с возможностью поэтапного расширения.',
    image: '/img/modules/hostel.jpg',
    features: ['Быстрый ввод', 'Масштабируемость', 'Комфорт', 'Экономичность'],
  },
  {
    id: 'cafe',
    title: 'Киоски и павильоны',
    description: 'Торговые помещения различной конфигурации для розничной торговли и общепита.',
    image: '/img/modules/kiosk.jpg',
    features: ['Зонирование', 'Мобильность', 'Функциональность', 'Современный дизайн'],
  },
]

const features = [
  {
    title: 'Быстрый монтаж',
    description: 'Сборка здания занимает от 1 до 7 дней в зависимости от размера',
    icon: '⚡',
  },
  {
    title: 'Мобильность',
    description: 'Возможность демонтажа и перемещения на новое место',
    icon: '🚛',
  },
  {
    title: 'Без фундамента',
    description: 'Не требуется капитальный фундамент и разрешение на строительство',
    icon: '🏗️',
  },
  {
    title: 'Всесезонность',
    description: 'Эксплуатация при температурах от -55°C до +45°C',
    icon: '🌡️',
  },
]

const SaleBuildings = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0])

  return (
    <main className='min-h-screen bg-black'>
      {/* Hero секция */}
      <section className='relative h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff11_0,#00000099_100%)]' />
        <div className='container mx-auto px-4 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center'
          >
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
              Модульные здания{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500'>
                под ключ
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-12'>
              Производство и монтаж модульных конструкций любой сложности. От отдельных
              блок-контейнеров до многоэтажных комплексов.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 
              text-white rounded-xl font-medium text-lg shadow-lg hover:shadow-orange-500/20
              transition-all duration-300'
            >
              Рассчитать стоимость
            </motion.button>
          </motion.div>
        </div>
        <div className='absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-20' />
      </section>

      {/* Преимущества */}
      <section className='py-20 bg-zinc-900'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-white text-center mb-16'>
            Почему выбирают наши модульные здания
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800'
              >
                <div className='text-4xl mb-4'>{feature.icon}</div>
                <h3 className='text-xl font-semibold text-white mb-2'>{feature.title}</h3>
                <p className='text-zinc-400'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Категории */}
      <section className='py-20 bg-black'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-white text-center mb-16'>
            Типы модульных зданий
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
            {categories.map(category => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`cursor-pointer rounded-xl p-6 transition-all duration-300 
                ${
                  activeCategory.id === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500'
                    : 'bg-zinc-900 hover:bg-zinc-800'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                <h3 className='text-xl font-semibold text-white mb-2'>{category.title}</h3>
                <p className='text-zinc-400 text-sm'>{category.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='bg-zinc-900 rounded-2xl p-8 border border-zinc-800'
          >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
              <div className='relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden'>
                <Image
                  src={activeCategory.image}
                  alt={activeCategory.title}
                  fill
                  className='object-cover'
                />
              </div>
              <div>
                <h3 className='text-2xl font-bold text-white mb-4'>{activeCategory.title}</h3>
                <p className='text-zinc-400 mb-6'>{activeCategory.description}</p>
                <ul className='space-y-3'>
                  {activeCategory.features.map(feature => (
                    <li key={feature} className='flex items-center text-zinc-300'>
                      <svg
                        className='w-5 h-5 text-orange-500 mr-3'
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Форма обратной связи */}
      <section className='py-20 bg-zinc-900'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              Получить консультацию
            </h2>
            <p className='text-zinc-400'>
              Оставьте заявку, и наш специалист свяжется с вами в течение 30 минут для обсуждения
              вашего проекта
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

export default SaleBuildings
