'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PRODUCTION_BENEFITS } from '@/components/shared/constants'
import { ICONS } from '@/components/shared/icon'
import Image from 'next/image'

const Benefits = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className='py-16 md:py-24 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden'>
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
        <div className='absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black' />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Преимущества <span className='text-[#FFD700]'>модульного строительства</span>
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto mb-10 mt-6'>
            Современный подход к строительству, который сочетает в себе скорость, качество и
            экономическую эффективность
          </p>
        </div>

        <div
          ref={ref}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10'
        >
          {PRODUCTION_BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className='relative group'
            >
              {/* Карточка */}
              <div className='bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 h-full border border-zinc-700/30 hover:border-[#FFD700]/30 transition-colors'>
                {/* Иконка */}
                <div className='w-16 h-16 bg-[#FFD700]/10 rounded-lg flex items-center justify-center text-[#FFD700] mb-6 group-hover:bg-[#FFD700]/20 transition-colors'>
                  {ICONS[benefit.icon]}
                </div>

                {/* Статистика */}
                <div className='absolute top-6 right-6'>
                  <span className='text-2xl font-bold text-[#FFD700]'>{benefit.stat}</span>
                </div>

                {/* Контент */}
                <h3 className='text-xl font-semibold text-white mb-3'>{benefit.title}</h3>
                <p className='text-gray-400'>{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className='mt-16 text-center'
        >
          <div className='inline-flex items-center justify-center px-6 py-3 rounded-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/30'>
            {ICONS.star}
            <span className='text-gray-400 ml-2'>
              Работаем с физическими и юридическими лицами. НДС включен
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits
