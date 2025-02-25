import { Metadata } from 'next'
import catalogData from '@/data/catalog.json'
import { CatalogClient } from '@/components/catalog/CatalogClient'

// Генерация метаданных для страницы каталога
export async function generateMetadata(): Promise<Metadata> {
  // Получаем общее количество товаров
  const totalProducts = catalogData.categories.reduce(
    (acc, category) => acc + category.items.length,
    0
  )

  // Получаем список всех категорий
  const categoryNames = catalogData.categories.map(category => category.name).join(', ')

  return {
    title: 'Каталог модульных конструкций | BST HAB',
    description: `Аренда и продажа ${categoryNames.toLowerCase()}. ${totalProducts} вариантов модульных конструкций в наличии. Выгодные цены, быстрая доставка, профессиональный монтаж.`,
    keywords: [
      'аренда бытовок Хабаровск',
      'модульные конструкции',
      'строительные бытовки',
      'офисные модули',
      'аренда строительных вагончиков',
      ...catalogData.categories.map(category => `аренда ${category.name.toLowerCase()}`),
    ],
    openGraph: {
      title: 'Каталог модульных конструкций BST HAB',
      description: `Профессиональная аренда модульных зданий в Хабаровске. ${totalProducts} вариантов в наличии.`,
      type: 'website',
      url: 'https://bst-hab.ru/catalog',
      siteName: 'BST HAB',
      locale: 'ru_RU',
      images: [
        {
          url: '/img/catalog/bg-1.webp',
          width: 1200,
          height: 630,
          alt: 'Каталог модульных конструкций BST HAB',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Каталог модульных конструкций BST HAB',
      description: `Профессиональная аренда модульных зданий в Хабаровске. ${totalProducts} вариантов в наличии.`,
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

// Основной компонент страницы
export default function CatalogPage() {
  return <CatalogClient catalogData={catalogData} />
}
