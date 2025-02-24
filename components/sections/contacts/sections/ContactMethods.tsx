'use client'

import { motion } from 'framer-motion'
import { ICONS } from '@/components/shared/icon'
import { CONTACT_METHODS } from '../constants'

const ContactMethods = () => {
  return (
    <section className='py-12'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center mb-12'
      >
        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
          Свяжитесь с <span className='text-[#FFD700]'>нами</span>
        </h2>
        <p className='text-gray-400 max-w-2xl mx-auto'>
          Выберите удобный способ связи. Мы всегда на связи и готовы ответить на ваши вопросы
        </p>
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
        {CONTACT_METHODS.map((method, index) => (
          <motion.div
            key={method.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className='group'
          >
            <a
              href={method.link}
              className='block bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/30 hover:border-[#FFD700]/30 transition-all duration-300'
            >
              {/* Иконка и время ответа */}
              <div className='flex items-start justify-between mb-4'>
                <div className='w-12 h-12 bg-[#FFD700]/10 rounded-xl flex items-center justify-center text-[#FFD700] group-hover:scale-110 transition-transform'>
                  {ICONS[method.icon]}
                </div>
                <div className='text-right'>
                  <div className='text-sm text-[#FFD700]'>Время ответа</div>
                  <div className='text-gray-400'>{method.responseTime}</div>
                </div>
              </div>

              {/* Основная информация */}
              <h3 className='text-xl font-semibold text-white mb-2 group-hover:text-[#FFD700] transition-colors'>
                {method.title}
              </h3>
              <p className='text-gray-400 mb-4'>{method.description}</p>

              {/* Преимущества */}
              <div className='space-y-2 mb-6'>
                {method.benefits.map((benefit, i) => (
                  <div key={i} className='flex items-center text-sm text-gray-400'>
                    <div className='text-[#FFD700] mr-2'>{ICONS.check}</div>
                    {benefit}
                  </div>
                ))}
              </div>

              {/* Время работы и кнопка действия */}
              <div className='flex items-center justify-between'>
                <div className='text-sm text-gray-400'>
                  <div className='flex items-center'>
                    {ICONS.clock}
                    <span className='ml-1'>{method.availableHours}</span>
                  </div>
                </div>
                <div className='flex items-center text-[#FFD700] group-hover:translate-x-2 transition-transform'>
                  <span className='mr-2'>{method.action}</span>
                  {ICONS.arrow}
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ContactMethods
