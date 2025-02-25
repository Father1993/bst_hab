'use client'

import { motion } from 'framer-motion'
import ContactMethods from './sections/ContactMethods'
import OfficeInfo from './sections/OfficeInfo'
import ContactMap from './sections/ContactMap'
import ContactForm from '@/components/features/ContactForm'
import { TESTIMONIALS } from './constants'
import { ICONS } from '@/components/shared/icon'
import Image from 'next/image'

const ContactContent = () => {
  return (
    <div className='min-h-screen bg-black relative overflow-hidden'>
      {/* Фоновое изображение */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/img/catalog/bg-1.webp'
          alt='Каталог модульных конструкций'
          fill
          priority
          quality={70}
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black' />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='py-16 md:py-24 text-center'
        >
          <div className='inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-[#FFD700]/10 bg-[#FFD700]/5'>
            <span className='text-[#FFD700] text-sm font-medium'>Контакты</span>
          </div>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Свяжитесь с нами <span className='text-[#FFD700]'>удобным способом</span>
          </h1>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Мы всегда на связи и готовы ответить на ваши вопросы. Выберите удобный способ связи или
            приезжайте к нам в офис для личной консультации
          </p>
        </motion.div>

        {/* Методы связи */}
        <ContactMethods />

        {/* Информация об офисе */}
        <OfficeInfo />

        {/* Карта и FAQ */}
        <ContactMap />

        {/* Отзывы */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='py-12'
        >
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Что говорят наши <span className='text-[#FFD700]'>клиенты</span>
            </h2>
            <p className='text-gray-400 max-w-2xl mx-auto'>
              Отзывы наших клиентов о работе с нами и качестве наших услуг
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-6'>
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className='bg-zinc-800/30 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/30'
              >
                <div className='flex items-center mb-4'>
                  {testimonial.avatar && (
                    <div className='relative w-12 h-12 rounded-full overflow-hidden mr-4'>
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className='object-cover'
                      />
                    </div>
                  )}
                  <div>
                    <div className='text-white font-medium'>{testimonial.author}</div>
                    <div className='text-gray-400 text-sm'>{testimonial.company}</div>
                  </div>
                  <div className='ml-auto flex items-center'>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <div key={i} className='text-[#FFD700]'>
                        {ICONS.star}
                      </div>
                    ))}
                  </div>
                </div>
                <p className='text-gray-400'>{testimonial.text}</p>
                <div className='mt-4 text-sm text-gray-500'>{testimonial.date}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Форма обратной связи */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='py-12'
          id='contact-form'
        >
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Оставьте <span className='text-[#FFD700]'>заявку</span>
            </h2>
            <p className='text-gray-400 max-w-2xl mx-auto'>
              Заполните форму, и мы свяжемся с вами в ближайшее время для обсуждения вашего проекта
            </p>
          </div>
          <ContactForm />
        </motion.section>
      </div>
    </div>
  )
}

export default ContactContent
