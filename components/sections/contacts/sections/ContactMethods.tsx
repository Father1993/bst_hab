import { motion } from 'framer-motion'
import { ICONS } from '@/components/shared/icon'
import { CONTACT_METHODS, SOCIAL_LINKS } from '../constants'

const ContactMethods = () => {
  return (
    <section className='py-16 md:py-24 bg-zinc-900'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-3xl md:text-4xl font-bold text-white mb-4'
          >
            Как с нами <span className='text-[#FFD700]'>связаться</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='text-gray-400 max-w-2xl mx-auto'
          >
            Выберите удобный для вас способ связи. Мы всегда на связи и готовы ответить на ваши
            вопросы
          </motion.p>
        </div>

        {/* Методы связи */}
        <div className='grid md:grid-cols-3 gap-8 mb-16'>
          {CONTACT_METHODS.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target={method.icon === 'whatsapp' ? '_blank' : undefined}
              rel={method.icon === 'whatsapp' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/30 hover:border-[#FFD700]/30 transition-all group'
            >
              <div className='w-16 h-16 bg-[#FFD700]/10 rounded-lg flex items-center justify-center text-[#FFD700] mb-4 group-hover:bg-[#FFD700]/20 transition-colors'>
                {ICONS[method.icon]}
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'>{method.title}</h3>
              <p className='text-gray-400 mb-4'>{method.description}</p>
              <span className='inline-flex items-center text-[#FFD700] font-medium group-hover:gap-2 transition-all'>
                {method.action}
                <svg
                  className='w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </span>
            </motion.a>
          ))}
        </div>

        {/* Социальные сети */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='flex justify-center gap-6'
        >
          {SOCIAL_LINKS.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 bg-zinc-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-[#FFD700] hover:bg-zinc-700/50 transition-colors'
            >
              {ICONS[social.icon]}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ContactMethods
