'use client'

import { motion } from 'framer-motion'

const ContactMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='w-full rounded-2xl overflow-hidden shadow-lg bg-zinc-800'
    >
      <div className='aspect-[16/9] relative w-full'>
        <iframe
          src='https://yandex.ru/map-widget/v1/?um=constructor%3A0bee92a5bad6babc2c771a36899e7b6c4befd1ab6fe594063a9d7c1b7c9db950&amp;source=constructor'
          className='absolute inset-0 w-full h-full'
          frameBorder='0'
          title='Яндекс Карта'
          allow='geolocation'
        />
      </div>
    </motion.div>
  )
}

export default ContactMap
