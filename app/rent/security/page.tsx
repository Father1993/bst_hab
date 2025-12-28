import { Metadata } from 'next'
import RentDetailPage from '@/components/features/RentDetailPage/RentDetailPage'

export const metadata: Metadata = {
  title: 'Аренда постов охраны и КПП в Хабаровске | BST HAB',
  description:
    'Аренда постов охраны и КПП от производителя в Хабаровске. Комфортные и функциональные модули для обеспечения безопасности объектов. ✓ Выгодные условия ✓ Быстрая доставка ✓ Монтаж под ключ',
  keywords: [
    'аренда постов охраны Хабаровск',
    'аренда КПП',
    'посты охраны в аренду',
    'КПП в аренду',
    'модульные посты охраны',
    'модульные КПП',
    'аренда модулей безопасности',
    'охранные модули в аренду',
    'BST HAB аренда',
    'аренда модульных конструкций',
  ],
  openGraph: {
    title: 'Аренда постов охраны и КПП в Хабаровске | BST HAB',
    description:
      'Комфортные и функциональные модули для обеспечения безопасности объектов. Доставка, монтаж, обслуживание.',
    type: 'website',
    url: 'https://bst-hab.ru/rent/security',
    siteName: 'BST HAB',
    locale: 'ru_RU',
    images: [
      {
        url: '/img/dec-2025/sec-dec-2025_1.jpg',
        width: 1200,
        height: 630,
        alt: 'Аренда постов охраны и КПП BST HAB',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Аренда постов охраны и КПП в Хабаровске | BST HAB',
    description: 'Комфортные и функциональные модули для обеспечения безопасности объектов',
    images: '/img/dec-2025/sec-dec-2025_1.jpg',
  },
  alternates: {
    canonical: 'https://bst-hab.ru/rent/security',
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

export default function SecurityModulePage() {
  return <RentDetailPage moduleId='security' />
}
