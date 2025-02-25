'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ProductCard } from '@/components/catalog/ProductCard'
import { Filters } from '@/components/catalog/Filters'
import { CatalogData, Product } from '@/types/catalog'

interface CatalogClientProps {
  catalogData: CatalogData
}

export const CatalogClient: React.FC<CatalogClientProps> = ({ catalogData }) => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  // Получаем все продукты из всех категорий
  const allProducts = catalogData.categories.flatMap(category => category.items)

  // Фильтруем продукты по назначению
  const filteredProducts =
    activeFilter === 'all'
      ? allProducts
      : allProducts.filter(product => product.features.includes(activeFilter))

  return (
    <main className='min-h-screen bg-black'>
      {/* Hero секция */}
      <section className='relative py-24 overflow-hidden'>
        {/* Фоновое изображение */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/img/catalog/bg-1.webp'
            alt='Каталог модульных конструкций'
            fill
            className='object-cover'
            priority
            quality={70}
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black' />
        </div>

        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
              Каталог модульных конструкций
            </h1>
            <p className='text-lg md:text-xl text-gray-400 mb-12'>
              Широкий выбор современных модульных решений для любых задач: от временного проживания
              до организации офисного пространства
            </p>

            {/* Быстрые фильтры для мобильной версии */}
            <div className='flex flex-wrap justify-center gap-3 md:hidden'>
              <button
                onClick={() => setIsFiltersOpen(true)}
                className='w-full px-4 py-3 bg-[#FFD700] text-black rounded-lg font-medium hover:bg-[#FFD700]/90 transition-all duration-300 flex items-center justify-center gap-2'
              >
                <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z'
                  />
                </svg>
                Открыть фильтры
              </button>
            </div>

            {/* Категории для планшетов */}
            <div className='hidden md:flex lg:hidden flex-wrap justify-center gap-3'>
              {catalogData.categories.map(category => (
                <button
                  key={category.id}
                  onClick={() =>
                    setActiveFilter(
                      category.id === 'residential'
                        ? 'Для проживания'
                        : category.id === 'office'
                          ? 'Для офиса'
                          : category.id === 'construction'
                            ? 'Для строительства'
                            : 'all'
                    )
                  }
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300
                    ${
                      activeFilter ===
                      (category.id === 'residential'
                        ? 'Для проживания'
                        : category.id === 'office'
                          ? 'Для офиса'
                          : category.id === 'construction'
                            ? 'Для строительства'
                            : 'all')
                        ? 'bg-[#FFD700] text-black'
                        : 'bg-[#FFD700]/10 text-[#FFD700] hover:bg-[#FFD700]/20'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Основной контент */}
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          {/* Фильтры слева */}
          <div className='lg:col-span-3 hidden lg:block'>
            <Filters
              filters={catalogData.filters}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>

          {/* Мобильные фильтры */}
          {isFiltersOpen && (
            <div className='fixed inset-0 bg-black/95 z-50 lg:hidden overflow-y-auto'>
              <div className='container mx-auto px-4 py-6'>
                <div className='flex items-center justify-between mb-6'>
                  <h3 className='text-xl font-bold text-white'>Фильтры</h3>
                  <button
                    onClick={() => setIsFiltersOpen(false)}
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
                <Filters
                  filters={catalogData.filters}
                  activeFilter={activeFilter}
                  onFilterChange={filter => {
                    setActiveFilter(filter)
                    setIsFiltersOpen(false)
                  }}
                />
              </div>
            </div>
          )}

          {/* Карточки справа */}
          <div className='lg:col-span-9'>
            {/* Результаты поиска */}
            <div className='mb-6 flex items-center justify-between'>
              <p className='text-gray-400'>
                Найдено: <span className='text-white font-medium'>{filteredProducts.length}</span>{' '}
                {filteredProducts.length === 1
                  ? 'модуль'
                  : filteredProducts.length >= 2 && filteredProducts.length <= 4
                    ? 'модуля'
                    : 'модулей'}
              </p>
              {activeFilter !== 'all' && (
                <button
                  onClick={() => setActiveFilter('all')}
                  className='text-sm text-[#FFD700] hover:text-[#FFD700]/80 transition-colors'
                >
                  Сбросить фильтр
                </button>
              )}
            </div>

            {/* Сетка с карточками */}
            {filteredProducts.length > 0 ? (
              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 relative'>
                <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#FFD700,_transparent_70%)] opacity-5 blur-3xl -z-10' />
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className='text-center py-16 bg-black/90 rounded-lg border border-[#FFD700]/20'>
                <div className='max-w-md mx-auto'>
                  <svg
                    className='w-16 h-16 mx-auto mb-4 text-[#FFD700]/30'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                  <h3 className='text-xl font-semibold text-white mb-2'>Ничего не найдено</h3>
                  <p className='text-gray-400 mb-6'>
                    Попробуйте изменить параметры фильтрации или сбросить все фильтры
                  </p>
                  <button
                    onClick={() => setActiveFilter('all')}
                    className='px-6 py-2 bg-[#FFD700]/10 text-[#FFD700] rounded-full text-sm font-medium hover:bg-[#FFD700] hover:text-black transition-all duration-300'
                  >
                    Сбросить все фильтры
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA секция */}
      <section className='relative py-24 overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#FFD700,_transparent_70%)] opacity-10' />
        <div className='container mx-auto px-4 text-center relative'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            Не нашли подходящий вариант?
          </h2>
          <p className='text-lg text-gray-400 mb-12 max-w-2xl mx-auto'>
            Свяжитесь с нами, и мы поможем подобрать оптимальное решение под ваши задачи или
            изготовим модуль по индивидуальному проекту
          </p>
          <div className='flex flex-wrap gap-6 justify-center'>
            <button
              onClick={() => (window.location.href = 'tel:+79141234567')}
              className='px-8 py-3 bg-[#FFD700] text-black rounded-lg font-medium hover:bg-[#FFD700]/90 transition-colors duration-300 min-w-[200px]'
            >
              Позвонить
            </button>
            <button
              onClick={() => (window.location.href = 'https://wa.me/+79141234567')}
              className='px-8 py-3 bg-transparent border-2 border-[#FFD700] text-[#FFD700] rounded-lg font-medium hover:bg-[#FFD700] hover:text-black transition-colors duration-300 min-w-[200px]'
            >
              WhatsApp
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
