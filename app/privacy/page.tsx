/* eslint-disable max-len */
import PrivacyPage from '@/components/features/PrivacyPage/PrivacyPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | BST HAB',
  description:
    'Ознакомьтесь с политикой конфиденциальности BST HAB. Мы заботимся о защите ваших персональных данных и обеспечиваем прозрачность в обработке информации наших клиентов',
  openGraph: {
    title: 'Политика конфиденциальности BST HAB | Защита ваших данных',
    description:
      'Узнайте, как BST HAB обеспечивает безопасность ваших персональных данных. Наша политика конфиденциальности гарантирует прозрачность и надежность в обработке информации.',
    type: 'website',
    url: 'https://bst-hab.ru/privacy',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Логотип BST HAB',
      },
    ],
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary',
    title: 'Политика конфиденциальности BST HAB | Ваши данные под защитой',
    description:
      'BST HAB гарантирует безопасность ваших персональных данных. Ознакомьтесь с нашей политикой конфиденциальности для полной информации',
    images: '/img/og-image.jpg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://bst-hab.ru/privacy',
  },
}

export default function PrivacyPolicy() {
  return <PrivacyPage />
}
