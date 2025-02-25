import { ContactOffice, SocialLink, ContactMethod, TeamMember, Testimonial, FAQ } from './types'
import { COMPANY_INFO } from '@/components/shared/constants'

export const MAIN_OFFICE: ContactOffice = {
  city: 'Хабаровск',
  address: COMPANY_INFO.address,
  phone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  workHours: 'Пн-Пт: 9:00 - 18:00',
  coordinates: [48.480223, 135.071917], // Координаты Хабаровска
  features: [
    'Демонстрация продукции',
    'Комфортная переговорная',
    'Бесплатная парковка',
    'Удобная транспортная доступность',
  ],
  imageUrl: '/img/office.webp',
}

export const CONTACT_METHODS: ContactMethod[] = [
  {
    icon: 'phone',
    title: 'Позвоните нам',
    description: 'Мгновенная консультация по всем вопросам',
    action: 'Позвонить сейчас',
    link: `tel:${COMPANY_INFO.phone}`,
    responseTime: 'Мгновенно',
    availableHours: '9:00 - 19:00',
    benefits: [
      'Быстрое решение вопросов',
      'Профессиональная консультация',
      'Индивидуальный подход',
    ],
  },
  {
    icon: 'whatsapp',
    title: 'WhatsApp',
    description: 'Быстрые ответы и медиафайлы',
    action: 'Написать в WhatsApp',
    link: `https://wa.me/${COMPANY_INFO.whatsapp}`,
    responseTime: 'До 15 минут',
    availableHours: '9:00 - 19:00',
    benefits: ['Обмен фото и документами', 'История переписки', 'Быстрые ответы'],
  },
  {
    icon: 'email',
    title: 'Электронная почта',
    description: 'Для официальных запросов',
    action: 'Написать письмо',
    link: `mailto:${COMPANY_INFO.email}`,
    responseTime: 'До 2 часов',
    availableHours: '24/7',
    benefits: ['Официальные документы', 'Детальные консультации', 'Коммерческие предложения'],
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: 'vk',
    name: 'ВКонтакте',
    url: 'https://vk.com/company',
    color: '#0077FF',
    followers: '5K+',
  },
  {
    icon: 'telegram',
    name: 'Telegram',
    url: 'https://t.me/company',
    color: '#229ED9',
    followers: '2K+',
  },
  {
    icon: 'youtube',
    name: 'YouTube',
    url: 'https://youtube.com/company',
    color: '#FF0000',
    followers: '1K+',
  },
]

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Владимир Александрович',
    position: 'Директор',
    photo: '/img/team/engineer.webp',
    experience: '30 лет',
    specialization: ['Проектирование', 'Расчёт конструкций', 'Согласование проектов'],
  },
  {
    name: 'Евгений Смирнов',
    position: 'Менеджер по работе с клиентами',
    photo: '/img/team/manager.webp',
    experience: '19 лет',
    specialization: ['Консультации', 'Сопровождение сделок', 'Документооборот'],
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    author: 'Иван Сергеев',
    company: 'ООО "СтройИнвест"',
    text: 'Отличный сервис и профессиональный подход. Заказывали модульные конструкции для строительной площадки - все выполнено в срок и с высоким качеством.',
    rating: 5,
    date: '2024-02-15',
    avatar: '/img/testimonials/1.webp',
  },
  {
    author: 'Мария Козлова',
    company: 'ИП Козлова М.В.',
    text: 'Благодарны команде за оперативность и внимание к деталям. Особенно порадовала скорость ответов в WhatsApp.',
    rating: 5,
    date: '2024-02-10',
    avatar: '/img/testimonials/2.webp',
  },
]

export const CONTACT_FAQS: FAQ[] = [
  {
    question: 'Как быстро вы отвечаете на запросы?',
    answer:
      'Мы стараемся отвечать на все запросы в течение 15-30 минут в рабочее время. На электронные письма - в течение 2 часов.',
    category: 'communication',
  },
  {
    question: 'Можно ли посетить ваш офис без предварительной записи?',
    answer:
      'Да, наш офис открыт для посещений в рабочее время. Однако для более комфортной встречи рекомендуем согласовать время визита заранее.',
    category: 'office',
  },
]
