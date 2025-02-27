'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface DeliveryHeroProps {
  onCallbackRequest: () => void
}

const DeliveryHero = ({ onCallbackRequest }: DeliveryHeroProps) => {
  return (
    <section className='relative py-32 overflow-hidden'>
      {/* Фоновое изображение */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/img/spec-const.webp'
          alt='Доставка модульных зданий'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black' />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center'
          >
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
              Доставка и монтаж{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500'>
                модульных зданий
              </span>
            </h1>
            <p className='text-xl text-zinc-300 max-w-3xl mx-auto mb-12'>
              Профессиональный монтаж, оперативная доставка в любую точку Хабаровска и Хабаровского
              края. Работаем 24/7.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCallbackRequest}
                className='px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 
                text-white rounded-xl font-medium text-lg shadow-lg hover:shadow-orange-500/20
                transition-all duration-300'
              >
                Рассчитать стоимость доставки
              </motion.button>
              <motion.a
                href='tel:+79142039197'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-4 bg-transparent border-2 border-white/30 
                text-white rounded-xl font-medium text-lg hover:bg-white/10
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
