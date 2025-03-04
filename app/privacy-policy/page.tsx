/* eslint-disable max-len */
import { Metadata } from 'next'
import PrivacyPolicyPage from '@/components/features/PrivacyPolicyPage/PrivacyPolicyPage'

export const metadata: Metadata = {
  title: 'Политика использования файлов cookie | BST HAB',
  description:
    'Узнайте, как BST HAB использует файлы cookie для улучшения работы сайта. Информация о типах cookie-файлов, их назначении и управлении ими',
  openGraph: {
    title: 'Политика использования файлов cookie | BST HAB',
    description:
      'Узнайте, как BST HAB использует файлы cookie для улучшения вашего опыта использования сайта. Информация о настройках и управлении cookie-файлами',
    type: 'website',
    url: 'https://bst-hab.ru/privacy-policy',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BST HAB - Политика использования cookie',
      },
    ],
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Политика cookie-файлов BST HAB | Прозрачность и контроль',
    description:
      'Информация об использовании cookie-файлов на сайте BST HAB. Узнайте, как управлять настройками cookie для комфортного использования сайта',
    images: '/img/og-image.jpg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://bst-hab.ru/privacy-policy',
  },
  verification: {
    google: 'verification_token',
    yandex: 'verification_token',
  },
}

export default function PrivacyCookiePage() {
  return <PrivacyPolicyPage />
}
