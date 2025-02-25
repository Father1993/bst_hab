/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import catalogData from '@/data/catalog.json'
import ProductPage from '@/components/features/ProductPage/ProductPage'

// Универсальные метаданные для всех страниц каталога
export const metadata: Metadata = {
  title: 'Аренда модульных зданий в Хабаровске | BST HAB',
  description:
    'Аренда бытовок, модульных зданий и строительных конструкций в Хабаровске. Выгодные цены, быстрая доставка, профессиональный монтаж.',
  keywords: [
    'аренда модульных зданий',
    'бытовки Хабаровск',
    'аренда бытовок',
    'строительные модули',
    'модульные конструкции',
  ],
  openGraph: {
    title: 'Аренда модульных зданий BST HAB',
    description: 'Профессиональная аренда модульных зданий в Хабаровске',
    type: 'website',
    url: 'https://bst-hab.ru/rent',
    siteName: 'BST HAB',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Аренда модульных зданий BST HAB',
    description: 'Профессиональная аренда модульных зданий в Хабаровске',
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

// Функция для получения данных продукта
function getProductData(slug: string) {
  for (const category of catalogData.categories) {
    const product = category.items.find(item => item.slug === slug)
    if (product) {
      return {
        ...product,
        category: {
          id: category.id,
          name: category.name,
        },
      }
    }
  }
  return null
}

// Генерация всех возможных путей при сборке
export function generateStaticParams() {
  return catalogData.categories.flatMap(category =>
    category.items.map(item => ({
      slug: item.slug,
    }))
  )
}

// Основной компонент страницы
export default function ProductDetails({ params }) {
  const product = getProductData(params.slug)

  if (!product) {
    notFound()
  }

  return <ProductPage product={product} />
}
