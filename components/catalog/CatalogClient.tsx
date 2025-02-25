'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ProductCard } from '@/components/catalog/ProductCard'
import { Filters } from '@/components/catalog/Filters'
import { CatalogData, Product, FilterState } from '@/types/catalog'

interface CatalogClientProps {
  catalogData: CatalogData
}

export const CatalogClient: React.FC<CatalogClientProps> = ({ catalogData }) => {
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({
    purposes: [],
    features: [],
    capacity: [],
  })

  // Фильтрация продуктов
  const filteredProducts = useMemo(() => {
    let products: Product[] = []

    // Собираем все продукты из всех категорий
    catalogData.categories.forEach(category => {
      products = [...products, ...category.items]
    })

    // Применяем фильтры
    if (
      selectedFilters.purposes.length > 0 ||
      selectedFilters.features.length > 0 ||
      selectedFilters.capacity.length > 0
    ) {
      products = products.filter(product => {
        const purposeMatch =
          selectedFilters.purposes.length === 0 ||
          selectedFilters.purposes.some(purpose =>
            product.features.some(feature => feature.includes(purpose))
          )

        const featureMatch =
          selectedFilters.features.length === 0 ||
          selectedFilters.features.some(feature => product.features.some(f => f.includes(feature)))

        const capacityMatch =
          selectedFilters.capacity.length === 0 ||
          selectedFilters.capacity.some(cap => product.specifications.capacity === cap)

        return purposeMatch && featureMatch && capacityMatch
      })
    }

    return products
  }, [catalogData, selectedFilters])

  const handleFilterChange = (filters: FilterState) => {
    setSelectedFilters(filters)
  }

  return (
    <main className='min-h-screen bg-black'>
      {/* Hero секция */}
      <section className='relative py-24 overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#FFD700,_transparent_70%)] opacity-10' />
        <div className='container mx-auto px-4 relative'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
              Каталог модульных конструкций
            </h1>
            <p className='text-lg md:text-xl text-gray-400 mb-12'>
              Широкий выбор современных модульных решений для любых задач: от временного проживания
              до организации офисного пространства
            </p>
            <div className='flex flex-wrap gap-4 justify-center'>
              {catalogData.categories.map(category => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className='px-6 py-2 bg-[#FFD700]/10 text-[#FFD700] rounded-full text-sm font-medium hover:bg-[#FFD700] hover:text-black transition-all duration-300'
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Основной контент */}
      <div className='container mx-auto px-4 py-12'>
        {/* Грид контейнер для фильтров и карточек */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          {/* Фильтры слева */}
          <div className='lg:col-span-3'>
            <Filters filters={catalogData.filters} onFilterChange={handleFilterChange} />
          </div>

          {/* Карточки справа */}
          <div className='lg:col-span-9'>
            {/* Сетка с карточками */}
            {filteredProducts.length > 0 ? (
              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 relative'>
                {/* Декоративный фоновый элемент */}
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
                    onClick={() => setSelectedFilters({ purposes: [], features: [], capacity: [] })}
                    className='px-6 py-2 bg-[#FFD700]/10 text-[#FFD700] rounded-full text-sm font-medium hover:bg-[#FFD700] hover:text-black transition-all duration-300'
                  >
                    Сбросить все фильтры
                  </button>
                </div>
              </div>
            )}

            {/* Пагинация или "Загрузить еще" (опционально) */}
            {filteredProducts.length > 0 && (
              <div className='mt-12 text-center'>
                <button className='px-8 py-3 bg-black/90 border border-[#FFD700]/20 text-[#FFD700] rounded-lg font-medium hover:bg-[#FFD700]/10 transition-all duration-300'>
                  Показать еще
                </button>
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
