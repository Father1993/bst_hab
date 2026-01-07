import { Metadata } from 'next'
import SaleBuildings from '@/components/sections/sale/SaleBuildings'

export const metadata: Metadata = {
  title: 'Модульные здания и бытовки в Хабаровске | BST HAB',
  description:
    'Производство и продажа модульных зданий, бытовок, офисов и АБК в Хабаровске. ✓ Собственное производство ✓ Доставка и монтаж ✓ Гарантия качества ✓ Сертификация по ГОСТ',
  keywords: [
    'модульные здания Хабаровск',
    'бытовки купить',
    'модульные конструкции',
    'блок-контейнеры',
    'модульные офисы',
    'АБК модульные',
    'модульные столовые',
    'модульные общежития',
    'быстровозводимые здания',
    'модульные киоски',
    'BST HAB',
  ],
  openGraph: {
    title: 'Модульные здания под ключ в Хабаровске | BST HAB',
    description:
      'Производство и продажа модульных зданий любой сложности. Быстрая доставка, профессиональный монтаж, гарантия качества.',
    type: 'website',
    url: 'https://bst-hab.ru/sale',
    images: [
      {
        url: '/img/og-modules.jpg',
        width: 1200,
        height: 630,
        alt: 'Модульные здания BST HAB',
      },
    ],
    locale: 'ru_RU',
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
}

export default function ModulesPage() {
  return <SaleBuildings />
}
