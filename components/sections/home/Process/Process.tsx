'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { WORK_PROCESS } from '@/components/shared/constants'
import { ICONS } from '@/components/shared/icon'
import Link from 'next/link'

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className='py-16 md:py-24 bg-black relative overflow-hidden'>
      {/* Фоновый градиент */}
      <div className='absolute inset-0 bg-gradient-radial from-zinc-800/20 to-transparent' />

      <div className='container mx-auto px-4 relative'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Как мы <span className='text-[#FFD700]'>работаем</span>
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Прозрачный процесс работы от первого контакта до сдачи объекта. Каждый этап
            контролируется опытными специалистами
          </p>
        </div>

        <div ref={ref} className='relative'>
          {/* Линия процесса */}
          <div className='absolute left-[50%] top-0 h-[calc(100%-120px)] w-px bg-zinc-800' />

          {/* Шаги */}
          <div className='space-y-24'>
            {WORK_PROCESS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Контент */}
                <div className='flex-1'>
                  <div className={`max-w-lg ${index % 2 === 0 ? 'ml-auto text-right' : 'mr-auto'}`}>
                    <h3 className='text-xl font-bold text-white mb-4'>{step.title}</h3>
                    <p className='text-gray-400'>{step.description}</p>
                  </div>
                </div>

                {/* Иконка */}
                <div className='relative z-10'>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.2 }}
                    className='w-16 h-16 rounded-full bg-[#FFD700] flex items-center justify-center text-black'
                  >
                    {ICONS[step.icon]}
                  </motion.div>
                </div>

                {/* Пустой div для сохранения flex-структуры */}
                <div className='flex-1' />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: WORK_PROCESS.length * 0.2 + 0.4 }}
            className='text-center mt-16'
          >
            <Link
              href={`https://wa.me/79142039197?text=${encodeURIComponent('Здравствуйте! Я с вашего сайта. Интересуют модульные решения и условия аренды. Можно консультацию?')}`}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center px-8 py-4 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors group'
            >
              {ICONS.phone}
              <span className='ml-2'>Бесплатная консультация</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Process
