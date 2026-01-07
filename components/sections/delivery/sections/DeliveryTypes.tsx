'use client'

import { motion } from 'framer-motion'

interface DeliveryTypesProps {
  isIrkutsk?: boolean
}

const DeliveryTypes = ({ isIrkutsk = false }: DeliveryTypesProps) => {
  const city = isIrkutsk ? 'Иркутску' : 'Хабаровску'
  const region = isIrkutsk ? 'Иркутской области' : 'Хабаровскому краю'

  return (
    <section className='relative py-16 md:py-24 bg-black overflow-hidden'>
      {/* Градиентный фон */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#FFD700,_transparent_70%)] opacity-10' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#FFD700,_transparent_70%)] opacity-10' />
        <div className='absolute inset-0 bg-gradient-to-b from-black/0 via-black/80 to-black/0' />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Информация о стоимости доставки */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='bg-zinc-800/30 backdrop-blur-sm rounded-xl p-8 border border-zinc-700/30'
        >
          <h3 className='text-2xl font-bold text-white mb-4'>
            Стоимость <span className='text-[#FFD700]'>доставки</span>
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <p className='text-gray-400 mb-4'>
                Стоимость доставки зависит от количества модулей, расстояния и выбранного способа
                транспортировки:
              </p>
              <ul className='space-y-2'>
                <li className='flex items-start gap-2'>
                  <span className='text-[#FFD700] mt-1'>✓</span>
                  <span className='text-gray-300'>
                    <span className='font-medium text-white'>По городу {city}:</span> от 6 000 -
                    8 000 рублей (доставка автомобилем с краном-манипулятором)
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-[#FFD700] mt-1'>✓</span>
                  <span className='text-gray-300'>
                    <span className='font-medium text-white'>По {region}:</span>{' '}
                    рассчитывается индивидуально в зависимости от расстояния (используются
                    полуприцепы для перевозки 2-х модулей)
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-[#FFD700] mt-1'>✓</span>
                  <span className='text-gray-300'>
                    <span className='font-medium text-white'>Крупные заказы:</span> для организаций,
                    заказывающих от 20-30 модулей, предлагаем специальные условия доставки
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <p className='text-gray-400 mb-4'>Процесс организации доставки:</p>
              <ol className='space-y-2 list-decimal list-inside text-gray-300'>
                <li>Заключаем договор с указанием всех условий доставки</li>
                <li>Согласовываем сроки и способ доставки</li>
                <li>После оплаты организуем транспорт и погрузку</li>
                <li>Доставляем модули точно в срок</li>
                <li>Выполняем разгрузку и, при необходимости, монтаж</li>
              </ol>
              <div className='mt-4 p-4 bg-[#FFD700]/10 rounded-lg'>
                <p className='text-white font-medium'>
                  Для получения точного расчета стоимости доставки, пожалуйста, свяжитесь с нашими
                  менеджерами или заполните форму ниже.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DeliveryTypes
