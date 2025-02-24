import { motion } from 'framer-motion'
import { ICONS } from '@/components/shared/icon'
import { DELIVERY_OPTIONS } from '../constants'

const DeliveryOptions = () => {
  return (
    <section className='py-16 md:py-24 bg-black relative'>
      <div className='absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-10' />
      <div className='container mx-auto px-4 relative'>
        <h2 className='text-3xl md:text-4xl font-bold text-white text-center mb-12'>
          Варианты <span className='text-[#FFD700]'>доставки</span>
        </h2>
        <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          {DELIVERY_OPTIONS.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='bg-zinc-800/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-700/30'
            >
              <div className='flex items-start'>
                <div className='w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center text-[#FFD700] mr-4'>
                  {ICONS[option.icon]}
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-white mb-2'>{option.title}</h3>
                  <p className='text-gray-400 mb-2'>{option.description}</p>
                  <span className='inline-block bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-sm'>
                    {option.distance}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DeliveryOptions
