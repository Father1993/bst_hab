import { motion } from 'framer-motion'

const DeliveryHero = () => {
  return (
    <section className='py-16 md:py-24 bg-black relative overflow-hidden'>
      <div className='absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-10' />
      <div className='container mx-auto px-4 relative'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-4xl md:text-5xl font-bold text-white mb-6'
          >
            Доставка в любой регион <span className='text-[#FFD700]'>России и СНГ</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='text-xl text-gray-400 mb-8'
          >
            Осуществляем доставку модулей или модульного здания на ваш объект. Собственный парк
            самогрузов и манипуляторов, работаем с проверенными перевозчиками.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default DeliveryHero
