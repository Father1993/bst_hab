'use client'

import { motion } from 'framer-motion'
import { ICONS } from '@/components/shared/icon'
import { CONTACT_METHODS } from '../constants'

// Компонент иконки WhatsApp
const WhatsAppIcon = () => (
  <svg
    className='w-6 h-6'
    fill='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
  </svg>
)

// Компонент иконки Telegram
const TelegramIcon = () => (
  <svg
    className='w-6 h-6'
    fill='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' />
  </svg>
)

const ContactMethods = () => {
  return (
    <section className='py-12 container mx-auto px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
        {CONTACT_METHODS.map((method, index) => (
          <motion.div
            key={method.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className='group h-full'
          >
            <a
              href={method.link}
              className='flex flex-col h-full bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/30 hover:border-[#FFD700]/30 transition-all duration-300'
            >
              {/* Иконка и время ответа */}
              <div className='flex items-start justify-between mb-6'>
                <div className='w-12 h-12 bg-[#FFD700]/10 rounded-xl flex items-center justify-center text-[#FFD700] group-hover:scale-110 transition-transform duration-300'>
                  {method.icon === 'whatsapp' ? (
                    <WhatsAppIcon />
                  ) : method.icon === 'telegram' ? (
                    <TelegramIcon />
                  ) : (
                    ICONS[method.icon]
                  )}
                </div>
                <div className='text-right'>
                  <div className='text-sm text-[#FFD700]'>Время ответа</div>
                  <div className='text-gray-400 text-sm'>{method.responseTime}</div>
                </div>
              </div>

              {/* Основная информация */}
              <div className='flex-grow'>
                <h3 className='text-xl font-semibold text-white mb-3 group-hover:text-[#FFD700] transition-colors'>
                  {method.title}
                </h3>
                <p className='text-gray-400 text-sm mb-6 line-clamp-2'>{method.description}</p>

                {/* Преимущества */}
                <div className='space-y-3 mb-6'>
                  {method.benefits.map((benefit, i) => (
                    <div key={i} className='flex items-start text-sm text-gray-400'>
                      <div className='text-[#FFD700] mr-2 shrink-0'>{ICONS.check}</div>
                      <span className='line-clamp-2'>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Время работы и кнопка действия */}
              <div className='flex items-center justify-between pt-4 border-t border-zinc-700/30'>
                <div className='text-sm text-gray-400'>
                  <div className='flex items-center gap-1.5'>
                    <span className='text-[#FFD700]'>{ICONS.clock}</span>
                    <span>{method.availableHours}</span>
                  </div>
                </div>
                <div className='flex items-center text-[#FFD700] group-hover:translate-x-2 transition-transform duration-300'>
                  <span className='mr-2 text-sm font-medium'>{method.action}</span>
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
