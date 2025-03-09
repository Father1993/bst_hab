import { Metadata } from 'next'
import RentDetailPage from '@/components/features/RentDetailPage/RentDetailPage'

export const metadata: Metadata = {
  title: 'Аренда модульных конструкций | BST HAB',
  description:
    'Аренда современных модульных конструкций различного назначения в Хабаровске. Бытовки, офисные модули, строительные модули и другие типы конструкций. ✓ Выгодные условия ✓ Быстрая доставка ✓ Монтаж под ключ',
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
    title: 'Аренда модульных конструкций | BST HAB',
    description:
      'Выгодная аренда модульных конструкций различного назначения. Доставка, монтаж, обслуживание.',
    type: 'website',
    url: 'https://bst-hab.ru/rent/detail',
    siteName: 'BST HAB',
    locale: 'ru_RU',
    images: [
      {
        url: '/img/favicons/android-chrome-192x192.png',
        width: 1200,
        height: 630,
        alt: 'Аренда модульных конструкций BST HAB',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Аренда модульных конструкций | BST HAB',
    description: 'Выгодная аренда модульных конструкций различного назначения от производителя',
    images: '/img/favicons/android-chrome-192x192.png',
  },
  alternates: {
    canonical: 'https://bst-hab.ru/rent/detail',
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

export default function RentDetail() {
  return <RentDetailPage />
}
