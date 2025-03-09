'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import rentData from '@/data/rent_data.json'
import ContactForm from '@/components/features/ContactForm'
import CallbackForm from '@/components/features/CallbackForm'
import ImageSlider from './ImageSlider'

const RentDetailPage = () => {
  const [showCallbackForm, setShowCallbackForm] = useState(false)

  // Собираем все изображения из всех типов модулей для слайдера
  const allImages = rentData.moduleTypes.flatMap(type => type.images || [])

  // Обработчик открытия формы обратного звонка
  const handleOpenCallbackForm = () => {
    setShowCallbackForm(true)
  }

  // Обработчик закрытия формы обратного звонка
  const handleCloseCallbackForm = () => {
    setShowCallbackForm(false)
  }

  // Используем данные первого модуля для отображения характеристик
  const defaultModule = rentData.moduleTypes[0]

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
          <span className='text-white'>Модульные конструкции</span>
        </div>
      </div>

      {/* Основной контент */}
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          {/* Галерея изображений */}
          <div className='lg:col-span-7'>
            <ImageSlider images={allImages} />
          </div>

          {/* Информация о продукте */}
          <div className='lg:col-span-5'>
            <h1 className='text-3xl font-bold text-white mb-4'>Модульные конструкции в аренду</h1>

            <div className='bg-zinc-900 rounded-xl p-6 mb-6'>
              <h2 className='text-xl font-semibold text-white mb-4'>Характеристики</h2>
              <div className='space-y-3'>
                <div className='flex justify-between'>
                  <span className='text-zinc-400'>Вместимость:</span>
                  <span className='text-white font-medium'>
                    {defaultModule.specifications.capacity}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-zinc-400'>Габариты:</span>
                  <span className='text-white font-medium'>
                    {defaultModule.specifications.dimensions.length}×
                    {defaultModule.specifications.dimensions.width}×
                    {defaultModule.specifications.dimensions.height}{' '}
                    {defaultModule.specifications.dimensions.units}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-zinc-400'>Площадь:</span>
                  <span className='text-white font-medium'>
                    {defaultModule.specifications.area.value}{' '}
                    {defaultModule.specifications.area.units}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-zinc-400'>Эксплуатация:</span>
                  <span className='text-white font-medium'>
                    от {defaultModule.specifications.temperature.min}°C до +
                    {defaultModule.specifications.temperature.max}°C
                  </span>
                </div>
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

        {/* Типы модулей */}
        <div className='mt-16'>
          <h2 className='text-2xl font-bold text-white mb-6'>Типы модулей в аренду</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {rentData.moduleTypes.map(module => (
              <div key={module.id} className='bg-zinc-900 rounded-xl overflow-hidden'>
                <div className='relative aspect-[4/3]'>
                  <Image
                    src={module.image}
                    alt={module.name}
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  />
                </div>
                <div className='p-5'>
                  <h3 className='text-xl font-semibold text-white mb-2'>{module.name}</h3>
                  <p className='text-zinc-400 text-sm mb-4'>{module.description}</p>
                  <div className='flex flex-col space-y-2 mb-4'>
                    <div className='flex justify-between items-center'>
                      <span className='text-zinc-400 text-sm'>Вместимость:</span>
                      <span className='text-white text-sm font-medium'>
                        {module.specifications.capacity}
                      </span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-zinc-400 text-sm'>Площадь:</span>
                      <span className='text-white text-sm font-medium'>
                        {module.specifications.area.value} {module.specifications.area.units}
                      </span>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <button
                      onClick={handleOpenCallbackForm}
                      className='px-4 py-2 bg-[#FFD700]/10 text-[#FFD700] rounded-lg text-sm font-medium hover:bg-[#FFD700] hover:text-black transition-all duration-300'
                    >
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
