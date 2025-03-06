'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ContactForm from '@/components/features/ContactForm'
import CallbackForm from '@/components/features/CallbackForm'
import FAQ from '../home/FAQ/FAQ'
import Features from '../home/Features/Features'
import VideoReviews from './VideoReviews'

const SaleBuildings = () => {
  const [showCallbackForm, setShowCallbackForm] = useState(false)

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
      {/* Hero секция */}
      <section className='relative p-10 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff11_0,#00000099_100%)]' />
        <div className='container mx-auto px-4 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center'
          >
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
              Модульные здания{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500'>
                под ключ
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-12'>
              Производство и монтаж модульных конструкций любой сложности. От отдельных
              блок-контейнеров до многоэтажных комплексов.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenCallbackForm}
              className='px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 
              text-white rounded-xl font-medium text-lg shadow-lg hover:shadow-orange-500/20
              transition-all duration-300'
            >
              Рассчитать стоимость
            </motion.button>
          </motion.div>
        </div>
        <div className='absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-20' />
      </section>

      <Features />
      <VideoReviews />

      {/* Форма обратной связи */}
      <section className='py-20 bg-zinc-900'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              Получить консультацию
            </h2>
            <p className='text-zinc-400'>
              Оставьте заявку, и наш специалист свяжется с вами в течение 30 минут для обсуждения
              вашего проекта
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Форма обратного звонка */}
      <CallbackForm isOpen={showCallbackForm} onClose={handleCloseCallbackForm} />

      <FAQ />
    </main>
  )
}

export default SaleBuildings
