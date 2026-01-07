'use client'

import { useState } from 'react'
import { useCityDetection } from '@/components/hooks/useCityDetection'
import DeliveryHero from './sections/DeliveryHero'
import DeliveryTypes from './sections/DeliveryTypes'
import DeliveryAdvantages from './sections/DeliveryAdvantages'
import PaymentOptions from './sections/PaymentOptions'
import CallbackForm from '@/components/features/CallbackForm'
import ContactForm from '@/components/features/ContactForm'

const DeliveryContent = () => {
  const [showCallbackForm, setShowCallbackForm] = useState(false)
  const city = useCityDetection()

  const handleOpenCallbackForm = () => {
    setShowCallbackForm(true)
  }

  const handleCloseCallbackForm = () => {
    setShowCallbackForm(false)
  }

  const isIrkutsk = city === 'irkutsk'

  return (
    <div className='flex flex-col'>
      <DeliveryHero onCallbackRequest={handleOpenCallbackForm} isIrkutsk={isIrkutsk} />
      <DeliveryTypes isIrkutsk={isIrkutsk} />
      <DeliveryAdvantages />
      <PaymentOptions />
      <ContactForm city={city} />
      <CallbackForm isOpen={showCallbackForm} onClose={handleCloseCallbackForm} />
    </div>
  )
}

export default DeliveryContent
