'use client'

import { motion } from 'framer-motion'
import { ICONS } from '@/components/shared/icon'
import { PAYMENT_OPTIONS } from '../constants'

const PaymentOptions = () => {
  return (
    <section className='py-16 md:py-24 bg-black relative'>
      <div className='absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-10' />
      <div className='container mx-auto px-4 relative'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Способы <span className='text-[#FFD700]'>оплаты</span>
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Мы предлагаем удобные и безопасные способы оплаты для частных лиц и организаций
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16'>
          {PAYMENT_OPTIONS.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/30 hover:border-[#FFD700]/30 transition-all duration-300 group'
            >
              <div className='flex items-center'>
                <div className='w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center text-[#FFD700] mr-4 group-hover:bg-[#FFD700]/20 transition-colors'>
                  {ICONS[option.icon]}
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-white mb-1 group-hover:text-[#FFD700] transition-colors'>
                    {option.title}
                  </h3>
                  <p className='text-gray-400'>{option.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Процесс оплаты и доставки */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='bg-zinc-800/30 backdrop-blur-sm rounded-xl p-8 border border-zinc-700/30 max-w-4xl mx-auto'
        >
          <h3 className='text-2xl font-bold text-white mb-6 text-center'>
            Процесс <span className='text-[#FFD700]'>оформления доставки</span>
          </h3>

          <div className='space-y-6'>
            <div className='flex gap-4'>
              <div className='w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center text-black font-bold flex-shrink-0'>
                1
              </div>
              <div>
                <h4 className='text-lg font-semibold text-white mb-1'>Заключение договора</h4>
                <p className='text-gray-400'>
                  Заключаем договор на поставку модульных конструкций с указанием всех условий
                  доставки, сроков и стоимости. Для организаций предоставляем полный пакет
                  документов.
                </p>
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center text-black font-bold flex-shrink-0'>
                2
              </div>
              <div>
                <h4 className='text-lg font-semibold text-white mb-1'>Оплата</h4>
                <p className='text-gray-400'>
                  После заключения договора вы оплачиваете заказ выбранным способом. Для крупных
                  заказов возможна оплата по этапам или предоставление рассрочки.
                </p>
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center text-black font-bold flex-shrink-0'>
                3
              </div>
              <div>
                <h4 className='text-lg font-semibold text-white mb-1'>Организация транспорта</h4>
                <p className='text-gray-400'>
                  Мы организуем подходящий транспорт в зависимости от количества модулей и
                  расстояния. Для доставки по городу используем автомобили с краном-манипулятором,
                  для доставки по краю — полуприцепы.
                </p>
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center text-black font-bold flex-shrink-0'>
                4
              </div>
              <div>
                <h4 className='text-lg font-semibold text-white mb-1'>Доставка и установка</h4>
                <p className='text-gray-400'>
                  В согласованный срок доставляем модули на объект, выполняем разгрузку и, при
                  необходимости, монтаж. По завершении работ подписываем акт приема-передачи.
                </p>
              </div>
            </div>
          </div>

          <div className='mt-8 p-4 bg-[#FFD700]/10 rounded-lg'>
            <p className='text-white text-center'>
              Для крупных заказов от 20-30 модулей предлагаем индивидуальные условия оплаты и
              доставки. Свяжитесь с нашими менеджерами для получения персонального предложения.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PaymentOptions
