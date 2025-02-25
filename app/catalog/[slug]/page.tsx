/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import catalogData from '@/data/catalog.json'
import ProductPage from '@/components/features/ProductPage/ProductPage'

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

// Генерация метаданных для конкретной страницы
export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = await params
  const product = getProductData(slug)

  if (!product) {
    return {
      title: 'Товар не найден | BST HAB',
      description: 'Запрашиваемый товар не найден',
    }
  }

  const priceText = product.pricing.rent.monthly
    ? `от ${product.pricing.rent.monthly.toLocaleString()} ₽/мес`
    : ''

  return {
    title: `${product.name} - ${priceText} | BST HAB`,
    description: `${product.description} ✓ ${product.specifications.area.value} ${
      product.specifications.area.units
    } ✓ ${product.specifications.capacity} ✓ ${product.features.join(' ✓ ')}. Аренда в Хабаровске.`,
    keywords: [
      product.name,
      'аренда модульных зданий',
      'бытовки Хабаровск',
      'аренда бытовок',
      product.category.name,
      ...product.features,
    ],
    openGraph: {
      title: `${product.name} - BST HAB`,
      description: product.description,
      type: 'website',
      url: `https://bst-hab.ru/catalog/${product.slug}`,
      siteName: 'BST HAB',
      locale: 'ru_RU',
      images: [
        {
          url: product.images.main,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} - BST HAB`,
      description: product.description,
      images: [product.images.main],
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
export default async function ProductDetails({ params }) {
  const { slug } = await params
  const product = getProductData(slug)

  if (!product) {
    notFound()
  }

  return <ProductPage product={product} />
}
