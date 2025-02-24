'use client'

import { motion } from 'framer-motion'
import { ICONS } from '@/components/shared/icon'
import { MAIN_OFFICE } from '../constants'

const OfficeInfo = () => {
  return (
    <section className='py-16 md:py-24 bg-black relative overflow-hidden'>
      <div className='absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-10' />
      <div className='container mx-auto px-4 relative'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/30'
          >
            <h2 className='text-3xl font-bold text-white mb-8'>
              Наш офис в <span className='text-[#FFD700]'>{MAIN_OFFICE.city}</span>
            </h2>
            <p className='text-gray-400 mb-8'>
              Приезжайте к нам для личной консультации. Мы покажем примеры работ и поможем подобрать
              оптимальное решение для вашего проекта
            </p>

            <div className='grid md:grid-cols-3 gap-8'>
              {/* Адрес */}
              <div className='flex items-start'>
                <div className='w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center text-[#FFD700] mr-4 shrink-0'>
                  {ICONS.location}
                </div>
                <div>
                  <h3 className='text-white font-medium mb-1'>Адрес</h3>
                  <p className='text-gray-400'>{MAIN_OFFICE.address}</p>
                </div>
              </div>

              {/* Контакты */}
              <div className='flex items-start'>
                <div className='w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center text-[#FFD700] mr-4 shrink-0'>
                  {ICONS.phone}
                </div>
                <div>
                  <h3 className='text-white font-medium mb-1'>Контакты</h3>
                  <p className='text-gray-400 mb-1'>{MAIN_OFFICE.phone}</p>
                  <p className='text-gray-400'>{MAIN_OFFICE.email}</p>
                </div>
              </div>

              {/* Режим работы */}
              <div className='flex items-start'>
                <div className='w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center text-[#FFD700] mr-4 shrink-0'>
                  {ICONS.clock}
                </div>
                <div>
                  <h3 className='text-white font-medium mb-1'>Режим работы</h3>
                  <p className='text-gray-400'>{MAIN_OFFICE.workHours}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OfficeInfo
