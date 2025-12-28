import { Metadata } from 'next'
import ProductPage from '@/components/features/ProductPage/ProductPage'

export const metadata: Metadata = {
  title: 'Посты охраны и КПП под ключ | Модульные решения для безопасности | BST HAB',
  description:
    'Производство и продажа постов охраны и КПП в Хабаровске. Комфортные и функциональные модульные решения для обеспечения безопасности объектов. ✓ Собственное производство ✓ Доставка и монтаж ✓ Гарантия качества',
  keywords: [
    'посты охраны Хабаровск',
    'КПП модульные',
    'контрольно-пропускные пункты',
    'модульные посты охраны',
    'купить пост охраны',
    'модульные КПП',
    'охранные модули',
    'безопасность объектов',
    'пропускные пункты',
    'посты охраны под ключ',
    'BST HAB',
  ],
  openGraph: {
    title: 'Посты охраны и КПП под ключ | BST HAB',
    description:
      'Производство и продажа постов охраны и КПП в Хабаровске. Комфортные и функциональные модульные решения для обеспечения безопасности объектов.',
    type: 'website',
    url: 'https://bst-hab.ru/sale/posts',
    siteName: 'BST HAB',
    locale: 'ru_RU',
    images: [
      {
        url: '/img/dec-2025/sec-dec-2025_1.jpg',
        width: 1200,
        height: 630,
        alt: 'Посты охраны и КПП BST HAB',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Посты охраны и КПП под ключ | BST HAB',
    description: 'Комфортные и функциональные решения для обеспечения безопасности объектов',
    images: '/img/dec-2025/sec-dec-2025_1.jpg',
  },
  alternates: {
    canonical: 'https://bst-hab.ru/sale/posts',
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

// Данные о продукте для страницы
const productData = {
  id: 'posts',
  name: 'Посты охраны и КПП',
  description: 'Комфортные и функциональные решения для обеспечения безопасности объектов',
  longDescription: `Наша компания предлагает современные модульные посты охраны и контрольно-пропускные пункты (КПП), 
  которые обеспечивают комфортные условия работы для сотрудников службы безопасности и эффективный контроль доступа на объект.
  
  Все модули изготавливаются на собственном производстве с использованием качественных материалов и комплектующих. 
  Мы учитываем специфику работы охранных служб и создаем эргономичные рабочие места с хорошим обзором территории.
  
  Модульные посты охраны и КПП могут быть оснащены всеми необходимыми инженерными системами: 
  отопление, кондиционирование, освещение, системы видеонаблюдения и контроля доступа.`,
  features: [
    'Прочный металлический каркас',
    'Панорамное остекление для лучшего обзора',
    'Утепление минеральной ватой',
    'Электропроводка по ГОСТ',
    'Возможность установки систем безопасности',
    'Эргономичное рабочее место',
    'Быстрый монтаж и демонтаж',
    'Возможность перемещения',
  ],
  specifications: {
    dimensions: {
      length: 'по проекту',
      width: 'по проекту',
      height: 'по проекту',
    },
    area: 'по проекту',
    capacity: '',
    temperature: 'от -45°C до +40°C',
    weight: '',
    lifespan: '',
  },
  images: [
    // Новые фото (декабрь 2025) — первые в галерее
    '/img/dec-2025/sec-dec-2025_1.jpg',
    '/img/dec-2025/sec-dec-2025_2.jpg',
    '/img/dec-2025/sec-dec-2025_3.jpg',
    '/img/dec-2025/sec-dec-2025_4.jpg',
    '/img/dec-2025/sec-dec-2025_5.jpg',
    '/img/dec-2025/sec-dec-2025_7.jpg',
    '/img/dec-2025/sec-dec-2025_8.jpg',
    '/img/dec-2025/sec-dec-2025_9.jpg',
    '/img/dec-2025/sec-dec-2025_10.jpg',

    // Остальные фото
    '/img/modules/new/bst-3.webp',
    '/img/modules/secur-1.webp',
    '/img/modules/secur-2.webp',
    '/img/modules/secur-3.webp',
    '/img/modules/sec/sec-1.webp',
    '/img/modules/sec/sec-2.webp',
    '/img/modules/sec/sec-3.webp',
    '/img/modules/sec/sec-4.webp',
    '/img/modules/sec/sec-5.webp',
    '/img/modules/sec-2.webp',
    '/img/modules/sec-1.webp',
    '/img/modules/sec-3.webp',
    '/img/modules/sec-4.webp',
    '/img/modules/sec00.webp',
    '/img/modules/new/bst-1.webp',
    '/img/modules/new/bst-7.webp',
    '/img/modules/new/bst-9.webp',
    '/img/modules/new/bst-2.webp',
  ],
  advantages: [
    {
      title: 'Быстрая установка',
      description: 'Монтаж в течение 1 дня',
      icon: 'clock',
    },
    {
      title: 'Мобильность',
      description: 'Возможность перемещения при необходимости',
      icon: 'truck',
    },
    {
      title: 'Комфортные условия',
      description: 'Оптимальный микроклимат для работы',
      icon: 'temperature',
    },
    {
      title: 'Индивидуальный подход',
      description: 'Разработка проекта под ваши требования',
      icon: 'customize',
    },
  ],
}

export default function PostsPage() {
  return <ProductPage product={productData} />
}
