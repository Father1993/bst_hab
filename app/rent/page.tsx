import { Metadata } from 'next'
import RentPage from '@/components/features/RentPage/RentPage'

export const metadata: Metadata = {
  title: 'Аренда бытовок в Хабаровске | BST HAB',
  description:
    'Аренда бытовок от производителя в Хабаровске. ✓ Выгодные условия ✓ Быстрая доставка ✓ Монтаж под ключ ✓ Гарантия качества',
  keywords: [
    'аренда бытовок Хабаровск',
    'аренда кпп бытовок',
    'аренда постов охраны',
    'кпп',
    'посты-охраны',
    'аренда строительных бытовок',
    'аренда офисных модулей',
    'аренда жилых модулей',
    'модульные бытовки в аренду',
    'бытовки в аренду Хабаровск',
    'аренда блок контейнеров',
    'BST HAB аренда',
    'аренда строительных вагончиков',
  ],
  openGraph: {
    title: 'Аренда бытовок в Хабаровске | BST HAB',
    description: 'Выгодная аренда бытовок любого назначения. Доставка, монтаж, обслуживание.',
    type: 'website',
    url: 'https://bst-hab.ru/rent',
    siteName: 'BST HAB',
    locale: 'ru_RU',
    images: [
      {
        url: '/img/og-image-rent.jpg',
        width: 1200,
        height: 630,
        alt: 'Аренда бытовок | BST HAB',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Аренда бытовок в Хабаровске | BST HAB',
    description: 'Выгодная аренда бытовок любого назначения от производителя',
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
