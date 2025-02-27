'use client'

import { useState } from 'react'
import DeliveryHero from './sections/DeliveryHero'
import DeliveryTypes from './sections/DeliveryTypes'
import DeliveryOptions from './sections/DeliveryOptions'
import DeliveryAdvantages from './sections/DeliveryAdvantages'
import PaymentOptions from './sections/PaymentOptions'
import DeliveryForm from './sections/DeliveryForm'
import CallbackForm from '@/components/features/CallbackForm'

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
      <DeliveryOptions />
      <DeliveryAdvantages />
      <PaymentOptions />
      <DeliveryForm />

      {/* Форма обратного звонка */}
      <CallbackForm isOpen={showCallbackForm} onClose={handleCloseCallbackForm} />
    </div>
  )
}

export default DeliveryContent
