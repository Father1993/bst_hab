import { motion } from 'framer-motion'
import { ICONS } from '@/components/shared/icon'
import { DELIVERY_TYPES } from '../constants'

const DeliveryTypes = () => {
  return (
    <section className='relative py-16 md:py-24 bg-black overflow-hidden'>
      {/* Градиентный фон */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#FFD700,_transparent_70%)] opacity-10' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#FFD700,_transparent_70%)] opacity-10' />
        <div className='absolute inset-0 bg-gradient-to-b from-black/0 via-black/80 to-black/0' />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Способы <span className='text-[#FFD700]'>доставки</span>
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Мы предлагаем различные способы доставки модульных конструкций, чтобы удовлетворить
            потребности каждого клиента
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
          {DELIVERY_TYPES.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='group bg-zinc-800/30 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/30 hover:border-[#FFD700]/30 transition-all duration-300'
            >
              <div className='w-16 h-16 bg-[#FFD700]/10 rounded-xl flex items-center justify-center text-[#FFD700] mb-6 group-hover:scale-110 transition-transform duration-300'>
                {ICONS[type.icon]}
              </div>
              <h3 className='text-xl font-semibold text-white mb-3 group-hover:text-[#FFD700] transition-colors'>
                {type.title}
              </h3>
              <p className='text-gray-400 text-sm leading-relaxed'>{type.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DeliveryTypes
