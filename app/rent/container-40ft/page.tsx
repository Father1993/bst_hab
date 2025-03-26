import { Metadata } from 'next'
import RentDetailPage from '@/components/features/RentDetailPage/RentDetailPage'

export const metadata: Metadata = {
  title: 'Аренда 40-футовых контейнеров в Хабаровске | BST HAB',
  description:
    'Аренда 40-футовых контейнеров от производителя в Хабаровске. Просторные контейнеры для хранения и транспортировки крупногабаритных грузов. ✓ Выгодные условия ✓ Быстрая доставка ✓ Гарантия качества',
  keywords: [
    'аренда 40-футовых контейнеров Хабаровск',
    'аренда контейнеров',
    'морские контейнеры в аренду',
    '40-футовые контейнеры',
    'большие контейнеры Хабаровск',
    'контейнеры для хранения',
    'аренда морских контейнеров',
    'контейнеры для грузов',
    'BST HAB аренда',
    'аренда большого контейнера',
  ],
  openGraph: {
    title: 'Аренда 40-футовых контейнеров в Хабаровске | BST HAB',
    description:
      'Просторные 40-футовые контейнеры для хранения и транспортировки крупногабаритных грузов. Доставка и установка.',
    type: 'website',
    url: 'https://bst-hab.ru/rent/container-40ft',
    siteName: 'BST HAB',
    locale: 'ru_RU',
    images: [
      {
        url: '/img/rent/40-f.webp',
        width: 1200,
        height: 630,
        alt: 'Аренда 40-футовых контейнеров BST HAB',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Аренда 40-футовых контейнеров в Хабаровске | BST HAB',
    description: 'Просторные контейнеры для хранения и транспортировки крупногабаритных грузов',
    images: '/img/rent/40-f.webp',
  },
  alternates: {
    canonical: 'https://bst-hab.ru/rent/container-40ft',
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

export default function Container40ftPage() {
  return <RentDetailPage moduleId='container-40ft' />
}
