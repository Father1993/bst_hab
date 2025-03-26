import { Metadata } from 'next'
import RentDetailPage from '@/components/features/RentDetailPage/RentDetailPage'

export const metadata: Metadata = {
  title: 'Аренда 20-футовых контейнеров в Хабаровске | BST HAB',
  description:
    'Аренда 20-футовых контейнеров от производителя в Хабаровске. Компактные контейнеры для хранения и перевозки грузов. ✓ Выгодные условия ✓ Быстрая доставка ✓ Гарантия качества',
  keywords: [
    'аренда 20-футовых контейнеров Хабаровск',
    'аренда контейнеров',
    'морские контейнеры в аренду',
    '20-футовые контейнеры',
    'контейнеры средних размеров',
    'контейнеры для хранения',
    'аренда морских контейнеров',
    'контейнеры для грузов',
    'BST HAB аренда',
    'аренда стандартного контейнера',
  ],
  openGraph: {
    title: 'Аренда 20-футовых контейнеров в Хабаровске | BST HAB',
    description:
      'Компактные 20-футовые контейнеры для хранения и перевозки грузов. Доставка и установка.',
    type: 'website',
    url: 'https://bst-hab.ru/rent/container-20ft',
    siteName: 'BST HAB',
    locale: 'ru_RU',
    images: [
      {
        url: '/img/rent/20-f.webp',
        width: 1200,
        height: 630,
        alt: 'Аренда 20-футовых контейнеров BST HAB',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Аренда 20-футовых контейнеров в Хабаровске | BST HAB',
    description: 'Компактные контейнеры для хранения и перевозки грузов',
    images: '/img/rent/20-f.webp',
  },
  alternates: {
    canonical: 'https://bst-hab.ru/rent/container-20ft',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Container20ftPage() {
  return <RentDetailPage moduleId='container-20ft' />
}
