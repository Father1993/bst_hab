'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import rentData from '@/data/rent_data.json'
import ContactForm from '@/components/features/ContactForm'
import CallbackForm from '@/components/features/CallbackForm'
import VideoReviews from '@/components/sections/sale/VideoReviews'

const RentPage = () => {
  const [showCallbackForm, setShowCallbackForm] = useState(false)

  // Обработчик открытия формы обратного звонка
  const handleOpenCallbackForm = () => {
    setShowCallbackForm(true)
  }

  // Обработчик закрытия формы обратного звонка
  const handleCloseCallbackForm = () => {
    setShowCallbackForm(false)
  }

  // Фильтруем только нужные типы модулей
  const filteredModules = rentData.moduleTypes.filter(
    module =>
      module.id === 'residential' ||
      module.id === 'security' ||
      module.id === 'container-40ft' ||
      module.id === 'container-20ft'
  )

  return (
    <main className='min-h-screen bg-black'>
      {/* Hero секция */}
      <section className='relative p-10 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff11_0,#00000099_100%)]' />
        <div className='absolute inset-0'></div>
        <div className='container mx-auto px-4 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center'
          >
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
              Аренда модульных зданий{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500'>
                от производителя
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-12'>
              Быстрая доставка и монтаж. Выгодные условия аренды. Полное обслуживание на весь срок.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenCallbackForm}
              className='px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 
              text-white rounded-xl font-medium text-lg shadow-lg hover:shadow-orange-500/20
              transition-all duration-300'
            >
              Получить расчет стоимости
            </motion.button>
          </motion.div>
        </div>
        <div className='absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-20' />
      </section>

      {/* Каталог */}
      <section className='py-20 bg-black'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-white text-center mb-16'>
            Каталог модулей в аренду
          </h2>

          {/* Карточки категорий */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {filteredModules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className='bg-zinc-900 rounded-xl overflow-hidden h-full'
              >
                <div className='relative aspect-[4/3]'>
                  <Image
                    src={module.image}
                    alt={module.name}
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-white mb-2'>{module.name}</h3>
                  <p className='text-zinc-400 mb-4'>{module.description}</p>
                  <div className='flex flex-col space-y-3'>
                    <div className='flex justify-between items-center'>
                      <span className='text-zinc-400'>Вместимость:</span>
                      <span className='text-white font-medium'>
                        {module.specifications.capacity}
                      </span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-zinc-400'>Габариты:</span>
                      <span className='text-white font-medium'>
                        {module.specifications.dimensions.length}×
                        {module.specifications.dimensions.width}×
                        {module.specifications.dimensions.height}{' '}
                        {module.specifications.dimensions.units}
                      </span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-zinc-400'>Площадь:</span>
                      <span className='text-white font-medium'>
                        {module.specifications.area.value} {module.specifications.area.units}
                      </span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-zinc-400'>Эксплуатация:</span>
                      <span className='text-white font-medium'>
                        от {module.specifications.temperature.min}°C до +
                        {module.specifications.temperature.max}°C
                      </span>
                    </div>
                  </div>
                  <div className='mt-6 flex space-x-3'>
                    <Link
                      href={`/rent/${module.id}`}
                      className='flex-1 py-3 bg-[#FFD700]/10 text-[#FFD700] rounded-lg font-medium text-center hover:bg-[#FFD700] hover:text-black transition-all duration-300'
                    >
                      Подробнее
                    </Link>
                    <button
                      onClick={handleOpenCallbackForm}
                      className='flex-1 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300'
                    >
                      Арендовать
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <VideoReviews />

      {/* Преимущества */}
      <section className='py-20 bg-zinc-900'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-white text-center mb-16'>
            Преимущества аренды у нас
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {rentData.advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='bg-black rounded-xl p-6 text-center'
              >
                <div className='flex justify-center mb-4'>
                  {advantage.icon === 'clock' && (
                    <svg
                      className='w-12 h-12 text-[#FFD700]'
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
                  )}
                  {advantage.icon === 'shield' && (
                    <svg
                      className='w-12 h-12 text-[#FFD700]'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                      />
                    </svg>
                  )}
                  {advantage.icon === 'flexible' && (
                    <svg
                      className='w-12 h-12 text-[#FFD700]'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z'
                      />
                    </svg>
                  )}
                  {advantage.icon === 'service' && (
                    <svg
                      className='w-12 h-12 text-[#FFD700]'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                      />
                    </svg>
                  )}
                </div>
                <h3 className='text-xl font-semibold text-white mb-2'>{advantage.title}</h3>
                <p className='text-zinc-400'>{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Дополнительная комплектация */}
      <section className='py-20 bg-black'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-xl p-8 border border-zinc-700 shadow-xl'
          >
            <div className='flex flex-col md:flex-row items-center justify-center gap-6 mb-10 text-center md:text-left'>
              <div className='flex-shrink-0 bg-gradient-to-br from-orange-500 to-yellow-500 p-4 rounded-full'>
                <svg
                  className='w-12 h-12 text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                  />
                </svg>
              </div>
              <div>
                <h2 className='text-3xl md:text-4xl font-bold text-white mb-3'>
                  Полная комплектация под ключ
                </h2>
                <p className='text-xl text-zinc-300 max-w-3xl'>
                  Дополнительно укомплектуем модули всем необходимым для комфортного проживания и
                  работы
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className='bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-zinc-700/50 hover:border-orange-500/30 transition-all duration-300'
              >
                <div className='flex items-center mb-4'>
                  <div className='bg-orange-500/20 p-3 rounded-lg mr-4'>
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
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-semibold text-white'>Бытовая техника</h3>
                </div>
                <ul className='space-y-2 text-zinc-400'>
                  <li className='flex items-center'>
                    <span className='text-[#FFD700] mr-2 text-xs'>●</span>
                    Холодильник
                  </li>
                  <li className='flex items-center'>
                    <span className='text-[#FFD700] mr-2 text-xs'>●</span>
                    Микроволновая печь
                  </li>
                  <li className='flex items-center'>
                    <span className='text-[#FFD700] mr-2 text-xs'>●</span>
                    Электрический чайник
                  </li>
                  <li className='flex items-center'>
                    <span className='text-[#FFD700] mr-2 text-xs'>●</span>
                    Телевизор
                  </li>
                  <li className='flex items-center'>
                    <span className='text-[#FFD700] mr-2 text-xs'>●</span>
                    Кондиционер
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className='bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-zinc-700/50 hover:border-orange-500/30 transition-all duration-300'
              >
                <div className='flex items-center mb-4'>
                  <div className='bg-orange-500/20 p-3 rounded-lg mr-4'>
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
                        d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-semibold text-white'>Постельные принадлежности</h3>
                </div>
                <ul className='space-y-2 text-zinc-400'>
                  <li className='flex items-center'>
                    <span className='text-[#FFD700] mr-2 text-xs'>●</span>
                    Кровати и матрасы
                  </li>
                  <li className='flex items-center'>
                    <span className='text-[#FFD700] mr-2 text-xs'>●</span>
                    Подушки и одеяла
                  </li>
                  <li className='flex items-center'>
                    <span className='text-[#FFD700] mr-2 text-xs'>●</span>
                    Комплекты постельного белья
                  </li>
                  <li className='flex items-center'>
                    <span className='text-[#FFD700] mr-2 text-xs'>●</span>
                    Полотенца
                  </li>
                  <li className='flex items-center'>
                    <span className='text-[#FFD700] mr-2 text-xs'>●</span>
                    Шторы и занавески
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-zinc-700/50 hover:border-orange-500/30 transition-all duration-300'
              >
                <div className='flex items-center mb-4'>
                  <div className='bg-orange-500/20 p-3 rounded-lg mr-4'>
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
                        d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-semibold text-white'>Мебель и интерьер</h3>
                </div>
                <ul className='space-y-2 text-zinc-400'>
                  <li className='flex items-center'>
                    <span className='text-[#FFD700] mr-2 text-xs'>●</span>
                    Столы и стулья
                  </li>
                  <li className='flex items-center'>
                    <span className='text-[#FFD700] mr-2 text-xs'>●</span>
                    Шкафы и тумбочки
                  </li>
                  <li className='flex items-center'>
                    <span className='text-[#FFD700] mr-2 text-xs'>●</span>
                    Офисная мебель
                  </li>
                  <li className='flex items-center'>
                    <span className='text-[#FFD700] mr-2 text-xs'>●</span>
                    Осветительные приборы
                  </li>
                  <li className='flex items-center'>
                    <span className='text-[#FFD700] mr-2 text-xs'>●</span>
                    Элементы декора
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className='text-center'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenCallbackForm}
                className='px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl font-medium text-lg shadow-lg hover:shadow-orange-500/20 transition-all duration-300'
              >
                Получить индивидуальное предложение
              </motion.button>
              <p className='text-zinc-500 mt-4'>
                Подберем оптимальную комплектацию под ваш бюджет и потребности
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Процесс аренды */}
      <section className='py-20 bg-black'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-white text-center mb-16'>
            Как арендовать модуль
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {rentData.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='relative'
              >
                <div className='text-6xl font-bold text-orange-500/20 mb-4'>{step.step}</div>
                <h3 className='text-xl font-semibold text-white mb-2'>{step.title}</h3>
                <p className='text-zinc-400'>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Форма обратной связи */}
      <section className='py-20 bg-zinc-900 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-20' />
        <div className='container mx-auto px-4 relative'>
          <div className='max-w-3xl mx-auto text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              Получить расчет стоимости аренды
            </h2>
            <p className='text-zinc-400'>
              Оставьте заявку, и наш специалист рассчитает стоимость аренды с учетом ваших
              требований в течение 30 минут
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

export default RentPage
