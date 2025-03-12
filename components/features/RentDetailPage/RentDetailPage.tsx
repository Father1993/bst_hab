'use client'

import { useState } from 'react'
import Link from 'next/link'
import rentData from '@/data/rent_data.json'
import ContactForm from '@/components/features/ContactForm'
import CallbackForm from '@/components/features/CallbackForm'
import ImageSlider from './ImageSlider'

interface RentDetailPageProps {
  moduleId: string
}

const RentDetailPage = ({ moduleId }: RentDetailPageProps) => {
  const [showCallbackForm, setShowCallbackForm] = useState(false)

  // Находим модуль по ID
  const module = rentData.moduleTypes.find(m => m.id === moduleId) || rentData.moduleTypes[0]

  // Обработчик открытия формы обратного звонка
  const handleOpenCallbackForm = () => {
    setShowCallbackForm(true)
  }

  // Обработчик закрытия формы обратного звонка
  const handleCloseCallbackForm = () => {
    setShowCallbackForm(false)
  }

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
          <span className='text-white'>{module.name}</span>
        </div>
      </div>

      {/* Основной контент */}
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          {/* Галерея изображений */}
          <div className='lg:col-span-7'>
            <ImageSlider images={module.images || [module.image]} />
          </div>

          {/* Информация о продукте */}
          <div className='lg:col-span-5'>
            <h1 className='text-3xl font-bold text-white mb-4'>{module.name}</h1>
            <p className='text-zinc-400 mb-6'>{module.description}</p>

            <div className='bg-zinc-900 rounded-xl p-6 mb-6'>
              <h2 className='text-xl font-semibold text-white mb-4'>Характеристики</h2>
              <div className='space-y-3'>
                <div className='flex justify-between'>
                  <span className='text-zinc-400'>Вместимость:</span>
                  <span className='text-white font-medium'>{module.specifications.capacity}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-zinc-400'>Габариты:</span>
                  <span className='text-white font-medium'>
                    {module.specifications.dimensions.length}×
                    {module.specifications.dimensions.width}×
                    {module.specifications.dimensions.height}{' '}
                    {module.specifications.dimensions.units}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-zinc-400'>Площадь:</span>
                  <span className='text-white font-medium'>
                    {module.specifications.area.value} {module.specifications.area.units}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-zinc-400'>Эксплуатация:</span>
                  <span className='text-white font-medium'>
                    от {module.specifications.temperature.min}°C до +
                    {module.specifications.temperature.max}°C
                  </span>
                </div>
                {module.pricing && (
                  <div className='flex justify-between'>
                    <span className='text-zinc-400'>Стоимость аренды:</span>
                    <span className='text-white font-medium'>
                      от {module.pricing.monthly} {module.pricing.currency}/месяц
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className='bg-zinc-900 rounded-xl p-6 mb-6'>
              <button
                onClick={handleOpenCallbackForm}
                className='w-full py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300'
              >
                Арендовать
              </button>
            </div>
          </div>
        </div>

        {/* Описание */}
        <div className='mt-12'>
          <h2 className='text-2xl font-bold text-white mb-6'>Описание</h2>
          <div className='bg-zinc-900 rounded-xl p-6 mb-8'>
            {rentData.generalDescription.map((paragraph, index) => (
              <p key={index} className='text-zinc-400 mb-4 last:mb-0'>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Особенности */}
        <div className='mt-8'>
          <h2 className='text-2xl font-bold text-white mb-6'>Особенности</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {rentData.features.map((feature, index) => (
              <div key={index} className='bg-zinc-900 rounded-xl p-5 flex items-start gap-3'>
                <div className='text-[#FFD700] mt-1'>
                  <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <span className='text-zinc-300'>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Дополнительная комплектация */}
        <div className='mt-16 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-xl p-8 border border-zinc-700 shadow-xl'>
          <div className='flex flex-col md:flex-row items-center gap-6 mb-8'>
            <div className='flex-shrink-0 bg-gradient-to-br from-orange-500 to-yellow-500 p-4 rounded-full'>
              <svg
                className='w-10 h-10 text-white'
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
              <h2 className='text-2xl font-bold text-white mb-2'>Дополнительная комплектация</h2>
              <p className='text-zinc-300'>
                Создайте максимально комфортные условия для проживания и работы
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='bg-black/30 backdrop-blur-sm rounded-lg p-5 border border-zinc-700/50 hover:border-orange-500/30 transition-all duration-300'>
              <h3 className='text-lg font-semibold text-white mb-3 flex items-center'>
                <span className='text-orange-500 mr-2'>
                  <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 10V3L4 14h7v7l9-11h-7z'
                    />
                  </svg>
                </span>
                Бытовая техника
              </h3>
              <p className='text-zinc-400'>
                Холодильник, микроволновая печь, чайник, телевизор, кондиционер и другая техника для
                комфортного проживания
              </p>
            </div>

            <div className='bg-black/30 backdrop-blur-sm rounded-lg p-5 border border-zinc-700/50 hover:border-orange-500/30 transition-all duration-300'>
              <h3 className='text-lg font-semibold text-white mb-3 flex items-center'>
                <span className='text-orange-500 mr-2'>
                  <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                    />
                  </svg>
                </span>
                Постельные принадлежности
              </h3>
              <p className='text-zinc-400'>
                Кровати, матрасы, подушки, одеяла, комплекты постельного белья и полотенца
              </p>
            </div>

            <div className='bg-black/30 backdrop-blur-sm rounded-lg p-5 border border-zinc-700/50 hover:border-orange-500/30 transition-all duration-300'>
              <h3 className='text-lg font-semibold text-white mb-3 flex items-center'>
                <span className='text-orange-500 mr-2'>
                  <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                    />
                  </svg>
                </span>
                Мебель и интерьер
              </h3>
              <p className='text-zinc-400'>
                Столы, стулья, шкафы, тумбочки и другая мебель для создания функционального
                пространства
              </p>
            </div>
          </div>

          <div className='mt-8 text-center'>
            <button
              onClick={handleOpenCallbackForm}
              className='px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300'
            >
              Узнать стоимость комплектации
            </button>
            <p className='text-zinc-500 mt-3 text-sm'>
              Индивидуальный подбор оборудования под ваши потребности
            </p>
          </div>
        </div>

        {/* Форма обратной связи */}
        <div className='mt-20 bg-zinc-900 rounded-xl p-8'>
          <div className='max-w-3xl mx-auto text-center mb-8'>
            <h2 className='text-2xl font-bold text-white mb-4'>Получить расчет стоимости аренды</h2>
            <p className='text-zinc-400'>
              Оставьте заявку, и наш специалист рассчитает стоимость аренды с учетом ваших
              требований в течение 30 минут
            </p>
          </div>
          <ContactForm />
        </div>
      </div>

      {/* Форма обратного звонка */}
      <CallbackForm isOpen={showCallbackForm} onClose={handleCloseCallbackForm} />
    </main>
  )
}

export default RentDetailPage
