import { Metadata } from 'next'
import RentPage from '@/components/features/RentPage/RentPage'

export const metadata: Metadata = {
  title: 'Аренда модульных зданий в Хабаровске | BST HAB',
  description:
    'Аренда современных модульных зданий и бытовок от производителя в Хабаровске. ✓ Выгодные условия ✓ Быстрая доставка ✓ Монтаж под ключ ✓ Гарантия качества',
  keywords: [
    'аренда бытовок Хабаровск',
    'аренда модульных зданий',
    'аренда строительных бытовок',
    'аренда офисных модулей',
    'аренда жилых модулей',
    'модульные здания в аренду',
    'бытовки в аренду Хабаровск',
    'аренда блок контейнеров',
    'BST HAB аренда',
    'аренда строительных вагончиков',
  ],
  openGraph: {
    title: 'Аренда модульных зданий в Хабаровске | BST HAB',
    description:
      'Выгодная аренда модульных зданий любого назначения. Доставка, монтаж, обслуживание.',
    type: 'website',
    url: 'https://bst-hab.ru/rent',
    siteName: 'BST HAB',
    locale: 'ru_RU',
    images: [
      {
        url: '/img/og-image-rent.jpg',
        width: 1200,
        height: 630,
        alt: 'Аренда модульных зданий BST HAB',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Аренда модульных зданий в Хабаровске | BST HAB',
    description: 'Выгодная аренда модульных зданий любого назначения от производителя',
    images: '/img/og-image-rent.jpg',
  },
  alternates: {
    canonical: 'https://bst-hab.ru/rent',
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

export default function Rent() {
  return <RentPage />
}
