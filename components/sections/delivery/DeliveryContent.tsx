'use client'

import DeliveryHero from './sections/DeliveryHero'
import DeliveryTypes from './sections/DeliveryTypes'
import DeliveryOptions from './sections/DeliveryOptions'
import DeliveryAdvantages from './sections/DeliveryAdvantages'
import PaymentOptions from './sections/PaymentOptions'
import DeliveryForm from './sections/DeliveryForm'

const DeliveryContent = () => {
  return (
    <div className='flex flex-col'>
      <DeliveryHero />
      <DeliveryTypes />
      <DeliveryOptions />
      <DeliveryAdvantages />
      <PaymentOptions />
      <DeliveryForm />
    </div>
  )
}

export default DeliveryContent
