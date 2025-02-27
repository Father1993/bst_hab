'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import catalogData from '@/data/catalog.json'
import ContactForm from '@/components/features/ContactForm'
import { ProductCard } from '@/components/catalog/ProductCard'
import CallbackForm from '@/components/features/CallbackForm'

const RentPage = () => {
  const [activeCategory, setActiveCategory] = useState(catalogData.categories[0])
  const [showCallbackForm, setShowCallbackForm] = useState(false)

  // Обработчик открытия формы обратного звонка
  const handleOpenCallbackForm = () => {
    setShowCallbackForm(true)
  }

  // Обработчик закрытия формы обратного звонка
  const handleCloseCallbackForm = () => {
    setShowCallbackForm(false)
  }

  // Фильтруем товары в выбранной категории по доступности для аренды
  const filteredItems = activeCategory.items.filter(item => item.availability?.forRent !== false)

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

          {/* Категории */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
            {catalogData.categories.map(category => (
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
                <h3 className='text-xl font-semibold text-white mb-2'>{category.name}</h3>
                <p className='text-zinc-400 text-sm'>{category.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Товары выбранной категории */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className='h-full'
              >
                <ProductCard
                  product={item}
                  viewType='rent'
                  onCallbackRequest={handleOpenCallbackForm}
                />
              </motion.div>
            ))}
            {/* Добавляем пустые элементы для выравнивания сетки */}
            {[...Array(3 - (filteredItems.length % 3 || 3))].map(
              (_, index) =>
                filteredItems.length % 3 !== 0 && (
                  <div key={`empty-${index}`} className='hidden lg:block' />
                )
            )}
            {[...Array(2 - (filteredItems.length % 2 || 2))].map(
              (_, index) =>
                filteredItems.length % 2 !== 0 && (
                  <div key={`empty-md-${index}`} className='hidden md:block lg:hidden' />
                )
            )}
          </div>
        </div>
      </section>

      {/* Процесс аренды */}
      <section className='py-20 bg-zinc-900'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-white text-center mb-16'>
            Как арендовать модуль
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                step: '01',
                title: 'Оставьте заявку',
                description: 'Заполните форму или позвоните нам',
              },
              {
                step: '02',
                title: 'Выбор модуля',
                description: 'Подберем оптимальный вариант под ваши задачи',
              },
              {
                step: '03',
                title: 'Заключение договора',
                description: 'Согласуем условия и подпишем документы',
              },
              {
                step: '04',
                title: 'Доставка и монтаж',
                description: 'Привезем и установим в удобное время',
              },
            ].map((step, index) => (
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
      <section className='py-20 bg-black relative overflow-hidden'>
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
