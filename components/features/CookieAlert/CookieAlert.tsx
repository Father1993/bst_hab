'use client'

import { motion, AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'
import Link from 'next/link'

interface CookieAlertProps {
  setCookieAlertOpen: (value: boolean) => void
}

const CookieAlert = ({ setCookieAlertOpen }: CookieAlertProps) => {
  const handleAcceptCookie = () => {
    document.cookie = 'CookieBy=BST_HAB; max-age=' + 60 * 60 * 24 * 30 // 30 дней

    if (document.cookie) {
      setCookieAlertOpen(false)
      toast.success('Настройки сохранены', {
        style: {
          background: '#1a1a1a',
          color: '#fff',
          border: '1px solid rgba(255, 215, 0, 0.1)',
        },
        iconTheme: {
          primary: '#FFD700',
          secondary: '#000',
        },
      })
    } else {
      toast.error(
        'Не удалось сохранить настройки. Пожалуйста, разрешите использование cookies в настройках браузера.',
        {
          duration: 5000,
          style: {
            background: '#1a1a1a',
            color: '#fff',
            border: '1px solid rgba(255, 0, 0, 0.1)',
          },
        }
      )
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className='fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md'
      >
        <div className='bg-black/95 border-t border-[#FFD700]/20'>
          <div className='container mx-auto px-4 py-6 md:py-4'>
            <div className='flex flex-col md:flex-row md:items-center justify-between gap-6'>
              <div className='flex-1 pr-8'>
                <div className='flex items-start gap-4'>
                  <div className='hidden md:flex shrink-0 w-12 h-12 rounded-xl bg-[#FFD700]/10 items-center justify-center'>
                    <svg
                      className='w-6 h-6 text-[#FFD700]'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-white font-semibold mb-2'>🍪 Мы используем файлы cookie</h3>
                    <p className='text-gray-400 text-sm leading-relaxed'>
                      Мы используем файлы cookie для улучшения работы сайта, анализа трафика и
                      персонализации контента. Продолжая использовать наш сайт, вы соглашаетесь с
                      нашей{' '}
                      <Link
                        href='/privacy-policy'
                        className='text-[#FFD700] hover:text-[#FFD700]/80 underline underline-offset-4 transition-colors'
                      >
                        политикой использования файлов cookie
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-3 md:gap-4'>
                <button
                  onClick={() => setCookieAlertOpen(false)}
                  className='px-6 py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg border border-gray-600 hover:border-gray-500'
                >
                  Отклонить
                </button>
                <button
                  onClick={handleAcceptCookie}
                  className='px-6 py-2.5 text-sm font-medium text-black bg-[#FFD700] hover:bg-[#FFD700]/90 transition-colors rounded-lg'
                >
                  Принять все
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CookieAlert
