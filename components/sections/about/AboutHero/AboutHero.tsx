'use client'

import { motion } from 'framer-motion'
import { COMPANY_STATS } from '@/components/shared/constants'
import { ICONS } from '@/components/shared/icon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const AboutHero = () => {
  const pathname = usePathname()
  const isIrkutsk = pathname?.startsWith('/irkutsk')
  const cityName = isIrkutsk ? 'Иркутске' : 'Хабаровске'

  const stats = [
    {
      number: COMPANY_STATS.experience,
      label: 'лет опыта',
      icon: ICONS.clock,
    },
    {
      number: COMPANY_STATS.projectsCount,
      label: 'реализованных проектов',
      icon: ICONS.building,
    },
    {
      number: COMPANY_STATS.constructionTypes,
      label: 'минимальные сроки',
      icon: ICONS.building,
    },
    {
      number: COMPANY_STATS.support,
      label: 'поддержка клиентов',
      icon: ICONS.clock,
    },
  ]

  // const trustIndicators = [
  //   { image: '/img/gaz.png', alt: 'Партнер 1' },
  //   { image: '/img/nnk.jpg', alt: 'Партнер 2' },
  //   { image: '/img/garant.png', alt: 'Партнер 3' },
  // ]

  return (
    <section className='pt-32 lg:pt-40 pb-16 md:pb-24 bg-black relative overflow-hidden'>
      {/* Фоновый градиент */}
      <div className='absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black to-black' />

      {/* Декоративные элементы */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent' />
      <div className='absolute inset-0 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:40px_40px] opacity-5' />

      <div className='container mx-auto px-4 relative'>
        <div className='max-w-4xl mx-auto text-center mb-16'>
          {/* Бейдж */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-[#FFD700]/10 bg-[#FFD700]/5'
          >
            <span className='text-[#FFD700] text-sm font-medium'>Работаем с 2013 года</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'
          >
            Производство и <span className='text-[#FFD700]'>аренда модульных конструкций</span> в{' '}
            {cityName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-xl text-gray-400 mb-8'
          >
            Изготавливаем каркасные бытовки, модули из сэндвич-панелей и переоборудуем контейнеры.
            Стандартные решения и индивидуальные проекты любой сложности для бизнеса и частных
            клиентов. Всегда есть модули в наличии.
          </motion.p>

          {/* Дополнительные преимущества */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='bg-zinc-800/30 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/30 max-w-3xl mx-auto mb-12'
          >
            <ul className='text-left space-y-3 text-gray-300'>
              <li className='flex items-start gap-2'>
                <span className='text-[#FFD700] mt-1'>✓</span>
                <span>
                  Стандартный размер модуля{' '}
                  <span className='text-[#FFD700] font-medium'>2.44м × 6м × 2.52м</span> (20-футовый
                  контейнер) — удобно в доставке и транспортировке
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-[#FFD700] mt-1'>✓</span>
                <span>
                  <span className='text-[#FFD700] font-medium'>Меньший вес</span> готовых модулей по
                  сравнению с конкурентами — дешевле и удобнее в транспортировке
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-[#FFD700] mt-1'>✓</span>
                <span>
                  <span className='text-[#FFD700] font-medium'>Всегда в наличии</span> — готовые
                  модули для продажи и аренды, быстрая доставка в любую точку Дальнего Востока
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-[#FFD700] mt-1'>✓</span>
                <span>
                  Гибкие условия: продажа, рассрочка, лизинг или аренда с выкупом на индивидуальных
                  условиях
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-[#FFD700] mt-1'>✓</span>
                <span>
                  Широкий ассортимент: модули для ИТР (душ, туалет, кухня, спальня), блок-модули с
                  тамбуром, бытовки, душевые, столовые, гаражи, автосервисы, посты охраны, КПП,
                  общежития и дачные домики
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Статистика */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className='bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/30 hover:border-[#FFD700]/30 transition-all duration-300'
              >
                {stat.icon}
                <div className='text-3xl md:text-4xl font-bold text-[#FFD700] mb-2'>
                  {stat.number}
                </div>
                <div className='text-gray-400 text-sm md:text-base'>{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Доверительные элементы */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='flex flex-wrap items-center justify-center gap-8 mb-12'
          >
            <div className='text-gray-500 text-sm'>Нам доверяют:</div>
            {trustIndicators.map((partner, index) => (
              <Image
                key={index}
                src={partner.image}
                alt={partner.alt}
                width={120}
                height={40}
                className='opacity-50 hover:opacity-100 transition-opacity'
              />
            ))}
          </motion.div> */}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className='flex flex-col sm:flex-row gap-4 justify-center'
          >
            <Link
              href='/rent'
              className='inline-flex items-center justify-center px-8 py-4 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors group'
            >
              <span>Арендовать</span>
              <svg
                className='w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </Link>
            <Link
              href='/sale'
              className='inline-flex items-center justify-center px-8 py-4 border-2 border-[#FFD700] text-[#FFD700] rounded-lg font-semibold hover:bg-[#FFD700] hover:text-black transition-colors'
            >
              Смотреть каталог
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
