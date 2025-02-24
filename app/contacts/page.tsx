import { Metadata } from 'next'
import ContactContent from '@/components/sections/contacts/ContactContent'

export const metadata: Metadata = {
  title: 'Контакты | BST HAB',
  description:
    'Свяжитесь с нами для консультации по модульным конструкциям. Офис в Хабаровске, работаем по всему Дальнему Востоку. Быстрая связь через WhatsApp и электронную почту.',
  keywords: [
    'контакты BST HAB',
    'модульные конструкции Хабаровск',
    'бытовки контакты',
    'связаться BST HAB',
    'офис модульные конструкции',
    'заказать бытовку Хабаровск',
  ],
}

export default function ContactsPage() {
  return <ContactContent />
}
