'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface DeliveryAdvantagesProps {
  isIrkutsk?: boolean
}

const DeliveryAdvantages = ({ isIrkutsk: _isIrkutsk = false }: DeliveryAdvantagesProps) => {
  return (
    <section className='py-16 md:py-24 bg-zinc-900 relative overflow-hidden'>
      {/* Фоновые элементы */}
      <div className='absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20' />

      <div className='container mx-auto px-4 relative'>
        {/* Фотогалерея процесса доставки */}
        <div className='mb-12'>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-2xl md:text-3xl font-bold text-white text-center mb-8'
          >
            Фотографии <span className='text-[#FFD700]'>процесса доставки</span>
          </motion.h3>

          {/* Современная адаптивная галерея */}
          <div className='grid grid-cols-12 gap-4'>
            {/* Первый ряд - левая колонка (2 фото) */}
            <div className='col-span-12 sm:col-span-4 grid grid-cols-1 gap-4'>
              {/* Фото 1: Погрузка с помощью крана */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='relative aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden group'
              >
                <Image
                  src='/img/delivery/bst-hab-delivery-3.webp'
                  alt='Погрузка модульного здания краном'
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 33vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60' />
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                  <h4 className='text-white font-semibold'>Погрузка с помощью крана</h4>
                </div>
              </motion.div>

              {/* Фото 3: Разгрузка на объекте */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='relative aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden group'
              >
                <Image
                  src='/img/delivery/bst-hab-delivery-4.webp'
                  alt='Разгрузка модуля на объекте'
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 33vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60' />
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                  <h4 className='text-white font-semibold'>Разгрузка на объекте</h4>
                </div>
              </motion.div>
            </div>

            {/* Первый ряд - правая колонка (большое фото) */}
            <div className='col-span-12 sm:col-span-8'>
              {/* Фото 2: Транспортировка по городу */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='relative aspect-[16/9] sm:aspect-[16/9] rounded-xl overflow-hidden group h-full'
              >
                <Image
                  src='/img/delivery/bst-hab-delivery-6.webp'
                  alt='Грузовик с модульными зданиями'
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 66vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60' />
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                  <h4 className='text-white font-semibold'>Транспортировка по городу</h4>
                </div>
              </motion.div>
            </div>

            {/* Разделитель между рядами */}
            <div className='col-span-12 h-4'></div>

            {/* Второй ряд - левая колонка (большое фото) */}
            <div className='col-span-12 sm:col-span-9'>
              {/* Фото 4: Перевозка нескольких модулей */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='relative aspect-[16/9] sm:aspect-[16/9] rounded-xl overflow-hidden group h-full'
              >
                <Image
                  src='/img/delivery/bst-hab-delivery.webp'
                  alt='Перевозка нескольких модулей по краю'
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 66vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60' />
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                  <h4 className='text-white font-semibold'>Перевозка нескольких модулей</h4>
                </div>
              </motion.div>
            </div>

            {/* Второй ряд - правая колонка (2 фото) */}
            <div className='col-span-12 sm:col-span-3 grid grid-cols-1 gap-12'>
              {/* Фото 5: Подготовка к установке */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='relative aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden group'
              >
                <Image
                  src='/img/delivery/bst-hab-delivery-5.webp'
                  alt='Подготовка к установке модуля'
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 33vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60' />
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                  <h4 className='text-white font-semibold'>Подготовка к установке</h4>
                </div>
              </motion.div>

              {/* Фото 6: Установка на площадке */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='relative aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden group'
              >
                <Image
                  src='/img/delivery/bst-hab-2-delivery.webp'
                  alt='Установка модуля на площадке'
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 33vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60' />
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                  <h4 className='text-white font-semibold'>Установка на площадке</h4>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeliveryAdvantages
