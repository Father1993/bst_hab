'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const NotFoundPages = () => {
  return (
    <div className='w-full flex items-center justify-center bg-black'>
      <div className='max-w-5xl w-full px-4'>
        <div className='relative py-20'>
          {/* Основной контент */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className='bg-zinc-900/50 backdrop-blur-lg rounded-3xl p-8 text-center relative overflow-hidden border border-zinc-800'
          >
            {/* Анимированный фон */}
            <div className='absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-10' />

            {/* Строительная каска с 404 */}
            <motion.div
              initial={{ rotateZ: -10 }}
              animate={{ rotateZ: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className='relative inline-block mb-8'
            >
              <svg
                className='w-48 h-48 mx-auto'
                viewBox='0 0 100 100'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                  d='M20,50 L80,50 A30,30 0 0,1 50,80 A30,30 0 0,1 20,50'
                  stroke='#FFA500'
                  strokeWidth='2'
                  className='drop-shadow-[0_0_10px_rgba(255,165,0,0.7)]'
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
                  d='M30,50 A20,20 0 0,1 50,30 A20,20 0 0,1 70,50'
                  stroke='#FFA500'
                  strokeWidth='2'
                  className='drop-shadow-[0_0_10px_rgba(255,165,0,0.7)]'
                />
              </svg>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              >
                <h1 className='text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-2'>
                  404
                </h1>
              </motion.div>
            </motion.div>

            {/* Креативный текст */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className='space-y-4 mb-12'
            >
              <h2 className='text-2xl md:text-3xl font-bold text-white'>
                Упс! Здесь ещё ведутся строительные работы
              </h2>
              <p className='text-lg text-zinc-400 max-w-2xl mx-auto'>
                Похоже, вы забрели на недостроенный участок. Давайте вернёмся на готовые объекты!
              </p>
            </motion.div>

            {/* Кнопки навигации */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link href='/'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 
                  text-white rounded-xl flex items-center justify-center gap-2 transition-all duration-300
                  hover:shadow-[0_0_20px_rgba(255,165,0,0.3)] font-medium'
                >
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                    />
                  </svg>
                  На главную
                </motion.button>
              </Link>
              <Link href='/contacts'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-full sm:w-auto px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white 
                  rounded-xl flex items-center justify-center gap-2 transition-all duration-300
                  border border-zinc-700 hover:border-zinc-600'
                >
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                  Связаться с нами
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPages
