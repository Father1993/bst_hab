'use client'

import { useState } from 'react'
import DeliveryHero from './sections/DeliveryHero'
import DeliveryTypes from './sections/DeliveryTypes'
import DeliveryAdvantages from './sections/DeliveryAdvantages'
import PaymentOptions from './sections/PaymentOptions'
import CallbackForm from '@/components/features/CallbackForm'
import ContactForm from '@/components/features/ContactForm'

const DeliveryContent = () => {
  const [showCallbackForm, setShowCallbackForm] = useState(false)

  // Обработчик открытия формы обратного звонка
  const handleOpenCallbackForm = () => {
    setShowCallbackForm(true)
  }

  // Обработчик закрытия формы обратного звонка
  const handleCloseCallbackForm = () => {
    setShowCallbackForm(false)
  }

  // Передаем функцию в дочерние компоненты
  return (
    <div className='flex flex-col'>
      <DeliveryHero onCallbackRequest={handleOpenCallbackForm} />
      <DeliveryTypes />
      <DeliveryAdvantages />
      <PaymentOptions />
      <ContactForm />

      {/* Форма обратного звонка */}
      <CallbackForm isOpen={showCallbackForm} onClose={handleCloseCallbackForm} />
    </div>
  )
}

export default DeliveryContent
