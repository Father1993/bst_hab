'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useCityDetection } from '@/components/hooks/useCityDetection'
import { COMPANY_HISTORY } from '@/components/shared/constants'

const AboutHistory = () => {
  const city = useCityDetection()
  const isIrkutsk = city === 'irkutsk'

  const fixText = (s: string) => {
    if (!isIrkutsk) return s
    return s
      .replaceAll('в Хабаровске', 'в Иркутске')
      .replaceAll('Хабаровске', 'Иркутске')
      .replaceAll('Хабаровского края', 'Иркутской области')
      .replaceAll('Хабаровскому краю', 'Иркутской области')
      .replaceAll('Хабаровск', 'Иркутск')
  }

  const history = [
    ...COMPANY_HISTORY.map(m => ({
      ...m,
      description: fixText(m.description),
    })),
    ...(isIrkutsk
      ? [
          {
            year: '2025',
            title: 'Открытие филиала в Иркутске',
            description:
              'В 2025 году мы открыли филиал в Иркутске: расширяемся благодаря стабильному качеству бытовок и модульных конструкций. Наши решения зарекомендовали себя в суровых дальневосточных условиях — теперь те же стандарты производства, сервиса и логистики доступны и в Иркутской области.',
          },
        ]
      : []),
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id='history' className='py-16 md:py-24 bg-zinc-900 relative overflow-hidden'>
      {/* Фоновый паттерн */}
      <div className='absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20' />

      <div className='container mx-auto px-4 relative'>
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className='text-3xl md:text-4xl font-bold text-white mb-4'
          >
            История нашего <span className='text-[#FFD700]'>развития</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-gray-400 max-w-2xl mx-auto'
          >
            Путь от небольшого производства до лидера рынка модульного строительства {isIrkutsk ? 'в Иркутской области' : 'на Дальнем Востоке'}
          </motion.p>
        </div>

        <div ref={ref} className='relative'>
          {/* Линия времени */}
          <div className='absolute left-[50%] top-0 bottom-0 w-px bg-zinc-800' />

          {/* Вехи */}
          <div className='space-y-24'>
            {history.map((milestone, index) => (
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
                    <div className='text-[#FFD700] font-bold text-xl mb-2'>{milestone.year}</div>
                    <h3 className='text-2xl font-bold text-white mb-4'>{milestone.title}</h3>
                    <p className='text-gray-400'>{milestone.description}</p>
                  </div>
                </div>

                {/* Точка на линии времени */}
                <div className='relative z-10'>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.2 }}
                    className='w-16 h-16 rounded-full bg-[#FFD700] flex items-center justify-center text-black font-bold'
                  >
                    {milestone.year}
                  </motion.div>
                </div>

                {/* Пустой div для сохранения flex-структуры */}
                <div className='flex-1' />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHistory
