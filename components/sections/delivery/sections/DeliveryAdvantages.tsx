import { motion } from 'framer-motion'
import { ICONS } from '@/components/shared/icon'
import { DELIVERY_ADVANTAGES } from '../constants'

const DeliveryAdvantages = () => {
  return (
    <section className='py-16 md:py-24 bg-zinc-900'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-white text-center mb-12'>
          Преимущества <span className='text-[#FFD700]'>нашей доставки</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
          {DELIVERY_ADVANTAGES.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/30'
            >
              <div className='w-16 h-16 bg-[#FFD700]/10 rounded-lg flex items-center justify-center text-[#FFD700] mb-4'>
                {ICONS[advantage.icon]}
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'>{advantage.title}</h3>
              <p className='text-gray-400'>{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DeliveryAdvantages
