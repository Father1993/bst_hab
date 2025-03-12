import { Metadata } from 'next'
import RentDetailPage from '@/components/features/RentDetailPage/RentDetailPage'

export const metadata: Metadata = {
  title: 'Аренда бытовых модулей в Хабаровске | BST HAB',
  description:
    'Аренда бытовых модулей от производителя в Хабаровске. Комфортные жилые помещения для проживания рабочего персонала. ✓ Выгодные условия ✓ Быстрая доставка ✓ Монтаж под ключ',
  keywords: [
    'аренда бытовок Хабаровск',
    'аренда жилых модулей',
    'аренда бытовых модулей',
    'бытовки для рабочих',
    'жилые модули для персонала',
    'модульные здания в аренду',
    'бытовки в аренду Хабаровск',
    'аренда блок контейнеров',
    'BST HAB аренда',
    'аренда строительных вагончиков',
  ],
  openGraph: {
    title: 'Аренда бытовых модулей в Хабаровске | BST HAB',
    description:
      'Комфортные жилые помещения для проживания рабочего персонала. Доставка, монтаж, обслуживание.',
    type: 'website',
    url: 'https://bst-hab.ru/rent/residential',
    siteName: 'BST HAB',
    locale: 'ru_RU',
    images: [
      {
        url: '/img/modules/standart.webp',
        width: 1200,
        height: 630,
        alt: 'Аренда бытовых модулей BST HAB',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Аренда бытовых модулей в Хабаровске | BST HAB',
    description: 'Комфортные жилые помещения для проживания рабочего персонала',
    images: '/img/modules/standart.webp',
  },
  alternates: {
    canonical: 'https://bst-hab.ru/rent/residential',
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

export default function ResidentialModulePage() {
  return <RentDetailPage moduleId='residential' />
}
