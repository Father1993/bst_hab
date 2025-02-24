'use client'

import ContactMethods from './sections/ContactMethods'
import OfficeInfo from './sections/OfficeInfo'
import ContactMap from './sections/ContactMap'
import ContactForm from '@/components/features/ContactForm'

const ContactContent = () => {
  return (
    <div className='flex flex-col'>
      {/* Методы связи */}
      <ContactMethods />

      {/* Информация об офисе */}
      <OfficeInfo />

      {/* Карта */}
      <section className='py-16 md:py-24 bg-zinc-900'>
        <div className='container mx-auto px-4'>
          <ContactMap />
        </div>
      </section>

      {/* Форма обратной связи */}
      <section className='py-16 md:py-24 bg-black relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-10' />
        <div className='container mx-auto px-4 relative'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Остались <span className='text-[#FFD700]'>вопросы</span>?
            </h2>
            <p className='text-gray-400 max-w-2xl mx-auto'>
              Заполните форму, и мы свяжемся с вами в течение 30 минут
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default ContactContent
