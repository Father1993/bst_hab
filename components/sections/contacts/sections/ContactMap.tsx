'use client'

import { motion } from 'framer-motion'
import { MAIN_OFFICE, CONTACT_FAQS } from '../constants'

const ContactMap = () => {
  return (
    <section className='py-12'>
      <div className='grid md:grid-cols-2 gap-8'>
        {/* Карта */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='relative aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden'
        >
          <iframe
            src='https://yandex.ru/map-widget/v1/?um=constructor%3A2d65e2169a6db4048da7bf1886ce2b0f69ebfa6566c026cb3625e431f1c222be&amp;source=constructor'
            width='100%'
            height='100%'
            className='absolute inset-0 border-0'
            allowFullScreen
          />
        </motion.div>

        {/* FAQ и дополнительная информация */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='space-y-8'
        >
          <div>
            <h2 className='text-3xl font-bold text-white mb-4'>
              Часто задаваемые <span className='text-[#FFD700]'>вопросы</span>
            </h2>
            <p className='text-gray-400'>Ответы на популярные вопросы</p>
          </div>

          <div className='space-y-4'>
            {CONTACT_FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className='bg-zinc-800/30 backdrop-blur-sm rounded-xl p-4 border border-zinc-700/30'
              >
                <h3 className='text-white font-medium mb-2'>{faq.question}</h3>
                <p className='text-gray-400 text-sm'>{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          {/* Призыв к действию */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className='bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 rounded-xl p-6 border border-[#FFD700]/20'
          >
            <h3 className='text-xl font-semibold text-white mb-2'>Нужна консультация?</h3>
            <p className='text-gray-400 mb-4'>
              Наши специалисты готовы ответить на все ваши вопросы и помочь с выбором решения
            </p>
            <div className='flex flex-wrap gap-4'>
              <a
                href={`tel:${MAIN_OFFICE.phone}`}
                className='inline-flex items-center px-6 py-3 bg-[#FFD700] text-black rounded-lg font-medium hover:bg-[#FFD700]/90 transition-colors'
              >
                Позвонить
              </a>
              <a
                href='#contact-form'
                className='inline-flex items-center px-6 py-3 border border-[#FFD700] text-[#FFD700] rounded-lg font-medium hover:bg-[#FFD700]/10 transition-colors'
              >
                Оставить заявку
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactMap
