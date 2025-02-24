'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FAQ_ITEMS, COMPANY_INFO } from '@/components/shared/constants'
import { ICONS } from '@/components/shared/icon'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className='py-16 md:py-24 bg-black relative overflow-hidden'>
      {/* Фоновые элементы */}
      <div className='absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black to-black' />

      {/* Декоративный элемент */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent' />

      <div className='container mx-auto px-4 relative'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-[#FFD700]/10 bg-[#FFD700]/5'>
            <span className='text-[#FFD700] text-sm font-medium'>FAQ</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Часто задаваемые <span className='text-[#FFD700]'>вопросы</span>
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Ответы на популярные вопросы о нашей продукции и услугах. Если у вас остались
            дополнительные вопросы, свяжитесь с нами
          </p>
        </div>

        <div className='max-w-3xl mx-auto relative'>
          {/* Декоративный элемент для списка */}
          <div className='absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#FFD700]/0 via-[#FFD700]/20 to-[#FFD700]/0' />

          {FAQ_ITEMS.map((faq, index) => (
            <div key={index} className='mb-4 group'>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className='w-full flex items-center justify-between p-6 bg-zinc-800/50 backdrop-blur-sm rounded-xl text-left transition-all duration-300 hover:bg-zinc-800/70 hover:shadow-[0_0_20px_rgba(255,215,0,0.1)] border border-zinc-700/30 hover:border-[#FFD700]/30'
              >
                <span className='text-lg font-medium text-white group-hover:text-[#FFD700] transition-colors'>
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-[#FFD700] transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='overflow-hidden'
                  >
                    <div className='p-6 bg-zinc-800/30 backdrop-blur-sm rounded-b-xl text-gray-400 border-t border-zinc-700/30'>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA с улучшенным дизайном */}
        <div className='text-center mt-16'>
          <p className='text-gray-400 mb-8'>Остались вопросы? Мы с радостью на них ответим</p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className='inline-flex items-center justify-center px-8 py-4 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors'
            >
              {ICONS.phone}
              <span className='ml-2'>Позвонить</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center px-8 py-4 border-2 border-[#FFD700] text-[#FFD700] rounded-lg font-semibold hover:bg-[#FFD700] hover:text-black transition-colors'
            >
              <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z' />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
