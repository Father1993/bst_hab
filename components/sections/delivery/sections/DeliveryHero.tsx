'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface DeliveryHeroProps {
  onCallbackRequest: () => void
  isIrkutsk?: boolean
}

const DeliveryHero = ({ onCallbackRequest, isIrkutsk = false }: DeliveryHeroProps) => {
  const cityWhere = isIrkutsk ? 'Иркутске' : 'Хабаровске'
  const cityGen = isIrkutsk ? 'Иркутска' : 'Хабаровска'
  const region = isIrkutsk ? 'Иркутской области' : 'Хабаровского края'

  return (
    <section className='relative py-32 overflow-hidden'>
      {/* Фоновое изображение */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/img/delivery/delivery-hero.webp'
          alt={`Доставка модульных зданий и бытовок в ${cityWhere}`}
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black' />
      </div>

      {/* Декоративные элементы */}
      <div className='absolute inset-0 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:40px_40px] opacity-5' />
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center'
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-[#FFD700]/10 bg-[#FFD700]/5'
            >
              <span className='text-[#FFD700] text-sm font-medium'>
                {isIrkutsk
                  ? 'Работаем 24/7 по Иркутской области'
                  : 'Работаем 24/7 по Дальнему Востоку'}
              </span>
            </motion.div>

            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
              Быстрая доставка{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-yellow-500'>
                модульных зданий
              </span>
            </h1>
            <p className='text-xl text-zinc-300 max-w-3xl mx-auto mb-8'>
              Профессиональная, оперативная доставка в любую точку {cityGen} и {region}. От одной
              бытовки до крупных партий модулей для строительных площадок.
            </p>

            {/* Преимущества доставки */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-12'
            >
              <div className='bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-[#FFD700]/10'>
                <div className='text-[#FFD700] text-xl font-bold mb-1'>от 6 000 ₽</div>
                <div className='text-gray-300 text-sm'>Доставка по городу</div>
              </div>
              <div className='bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-[#FFD700]/10'>
                <div className='text-[#FFD700] text-xl font-bold mb-1'>2 модуля</div>
                <div className='text-gray-300 text-sm'>На одном полуприцепе</div>
              </div>
              <div className='bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-[#FFD700]/10'>
                <div className='text-[#FFD700] text-xl font-bold mb-1'>100%</div>
                <div className='text-gray-300 text-sm'>Безопасная погрузка</div>
              </div>
            </motion.div>

            <div className='flex flex-wrap justify-center gap-4'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCallbackRequest}
                className='px-8 py-4 bg-gradient-to-r from-[#FFD700] to-yellow-500 
                text-black rounded-xl font-medium text-lg shadow-lg hover:shadow-[#FFD700]/20
                transition-all duration-300'
              >
                Рассчитать стоимость доставки
              </motion.button>
              <motion.a
                href='tel:+79145422188'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-4 bg-transparent border-2 border-[#FFD700]/30 
                text-white rounded-xl font-medium text-lg hover:bg-[#FFD700]/10
                transition-all duration-300'
              >
                Позвонить сейчас
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DeliveryHero
