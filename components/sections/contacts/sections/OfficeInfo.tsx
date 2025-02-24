'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MAIN_OFFICE, TEAM_MEMBERS } from '../constants'
import { ICONS } from '@/components/shared/icon'

const OfficeInfo = () => {
  return (
    <section className='py-12'>
      <div className='grid md:grid-cols-2 gap-8'>
        {/* Информация об офисе */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='space-y-8'
        >
          <div>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Наш офис в <span className='text-[#FFD700]'>{MAIN_OFFICE.city}</span>
            </h2>
            <p className='text-gray-400'>
              Приезжайте к нам для личной консультации и осмотра образцов продукции. Наши
              специалисты помогут вам выбрать оптимальное решение
            </p>
          </div>

          {/* Основная информация */}
          <div className='grid grid-cols-2 gap-4'>
            <div className='bg-zinc-800/30 backdrop-blur-sm rounded-xl p-4 border border-zinc-700/30'>
              <div className='text-[#FFD700] mb-2'>{ICONS.location}</div>
              <div className='text-white font-medium mb-1'>Адрес</div>
              <div className='text-gray-400 text-sm'>{MAIN_OFFICE.address}</div>
            </div>
            <div className='bg-zinc-800/30 backdrop-blur-sm rounded-xl p-4 border border-zinc-700/30'>
              <div className='text-[#FFD700] mb-2'>{ICONS.clock}</div>
              <div className='text-white font-medium mb-1'>Режим работы</div>
              <div className='text-gray-400 text-sm'>{MAIN_OFFICE.workHours}</div>
            </div>
            <div className='bg-zinc-800/30 backdrop-blur-sm rounded-xl p-4 border border-zinc-700/30'>
              <div className='text-[#FFD700] mb-2'>{ICONS.phone}</div>
              <div className='text-white font-medium mb-1'>Телефон</div>
              <a
                href={`tel:${MAIN_OFFICE.phone}`}
                className='text-gray-400 text-sm hover:text-[#FFD700] transition-colors'
              >
                {MAIN_OFFICE.phone}
              </a>
            </div>
            <div className='bg-zinc-800/30 backdrop-blur-sm rounded-xl p-4 border border-zinc-700/30'>
              <div className='text-[#FFD700] mb-2'>{ICONS.email}</div>
              <div className='text-white font-medium mb-1'>Email</div>
              <a
                href={`mailto:${MAIN_OFFICE.email}`}
                className='text-gray-400 text-sm hover:text-[#FFD700] transition-colors'
              >
                {MAIN_OFFICE.email}
              </a>
            </div>
          </div>

          {/* Особенности офиса */}
          <div>
            <h3 className='text-xl font-semibold text-white mb-4'>Наши преимущества</h3>
            <div className='grid grid-cols-2 gap-3'>
              {MAIN_OFFICE.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className='flex items-center text-gray-400'
                >
                  <div className='text-[#FFD700] mr-2'>{ICONS.check}</div>
                  <span className='text-sm'>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Фото офиса */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='relative'
        >
          <div className='aspect-[4/3] rounded-2xl overflow-hidden'>
            <Image
              src={MAIN_OFFICE.imageUrl}
              alt='Офис компании'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </div>

          {/* Наша команда */}
          <div className='mt-8'>
            <h3 className='text-xl font-semibold text-white mb-4'>Наша команда</h3>
            <div className='grid grid-cols-2 gap-4'>
              {TEAM_MEMBERS.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className='bg-zinc-800/30 backdrop-blur-sm rounded-xl p-4 border border-zinc-700/30'
                >
                  <div className='flex items-center mb-3'>
                    <div className='relative w-12 h-12 rounded-full overflow-hidden mr-3'>
                      <Image src={member.photo} alt={member.name} fill className='object-cover' />
                    </div>
                    <div>
                      <div className='text-white font-medium'>{member.name}</div>
                      <div className='text-gray-400 text-sm'>{member.position}</div>
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <div className='flex items-center text-sm text-gray-400'>
                      <div className='text-[#FFD700] mr-2'>{ICONS.star}</div>
                      Опыт: {member.experience}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OfficeInfo
