'use client'

import { useState } from 'react'
import DeliveryHero from './sections/DeliveryHero'
import DeliveryTypes from './sections/DeliveryTypes'
import DeliveryAdvantages from './sections/DeliveryAdvantages'
import PaymentOptions from './sections/PaymentOptions'
import CallbackForm from '@/components/features/CallbackForm'
import ContactForm from '@/components/features/ContactForm'

interface DeliveryContentProps {
  city?: 'khabarovsk' | 'irkutsk'
}

const DeliveryContent = ({ city = 'khabarovsk' }: DeliveryContentProps) => {
  const [showCallbackForm, setShowCallbackForm] = useState(false)

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
      <DeliveryAdvantages isIrkutsk={isIrkutsk} />
      <PaymentOptions />
      <ContactForm city={city} />
      <CallbackForm isOpen={showCallbackForm} onClose={handleCloseCallbackForm} />
    </div>
  )
}

export default DeliveryContent
