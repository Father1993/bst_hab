import { ContactOffice, SocialLink, ContactMethod } from './types'
import { COMPANY_INFO } from '@/components/shared/constants'

export const MAIN_OFFICE: ContactOffice = {
  city: 'Хабаровск',
  address: COMPANY_INFO.address,
  phone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  workHours: 'Пн-Пт: 9:00 - 18:00',
  coordinates: [48.480223, 135.071917], // Координаты Хабаровска
}

export const CONTACT_METHODS: ContactMethod[] = [
  {
    icon: 'phone',
    title: 'Позвоните нам',
    description: 'Мы ответим на все ваши вопросы',
    action: 'Позвонить сейчас',
    link: `tel:${COMPANY_INFO.phone}`,
  },
  {
    icon: 'whatsapp',
    title: 'WhatsApp',
    description: 'Быстрая связь через мессенджер',
    action: 'Написать в WhatsApp',
    link: `https://wa.me/${COMPANY_INFO.whatsapp}`,
  },
  {
    icon: 'email',
    title: 'Электронная почта',
    description: 'Отправьте нам сообщение',
    action: 'Написать письмо',
    link: `mailto:${COMPANY_INFO.email}`,
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: 'vk',
    name: 'ВКонтакте',
    url: 'https://vk.com/company',
  },
  {
    icon: 'telegram',
    name: 'Telegram',
    url: 'https://t.me/company',
  },
  {
    icon: 'youtube',
    name: 'YouTube',
    url: 'https://youtube.com/company',
  },
]
