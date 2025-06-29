import { Metadata } from 'next'
import ProductPage from '@/components/features/ProductPage/ProductPage'

export const metadata: Metadata = {
  title: 'Стандартные модульные здания под ключ | Бытовки с тамбуром и без | BST HAB',
  description:
    'Производство и продажа стандартных модульных зданий в Хабаровске: бытовки, ИТР с душем и туалетом, блок-модули с тамбуром и без, столовые, бани, сушилки. ✓ Собственное производство ✓ Доставка и монтаж ✓ Гарантия качества',
  keywords: [
    'стандартные модули Хабаровск',
    'бытовки с тамбуром',
    'бытовки без тамбура',
    'блок-модули Хабаровск',
    'модульные бытовки',
    'бытовки для рабочих',
    'бытовки для ИТР',
    'модульные столовые',
    'модульные бани',
    'модульные сушилки',
    'купить бытовку в Хабаровске',
    'модульные здания под ключ',
    'BST HAB',
  ],
  openGraph: {
    title: 'Стандартные модульные здания под ключ | BST HAB',
    description:
      'Производство и продажа стандартных модульных зданий в Хабаровске с доставкой и монтажом. Бытовки с тамбуром и без, блок-модули, столовые, бани, сушилки.',
    type: 'website',
    url: 'https://bst-hab.ru/sale/standard-modules',
    siteName: 'BST HAB',
    locale: 'ru_RU',
    images: [
      {
        url: '/img/modules/standart.webp',
        width: 1200,
        height: 630,
        alt: 'Стандартные модульные здания BST HAB',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Стандартные модульные здания под ключ | BST HAB',
    description:
      'Бытовки, ИТР с душем и туалетом, блок-модули с тамбуром и без, столовые, бани, сушилки',
    images: '/img/modules/standart.webp',
  },
  alternates: {
    canonical: 'https://bst-hab.ru/sale/standard-modules',
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
  id: 'standard-modules',
  name: 'Стандартные модульные здания',
  description:
    'Бытовки, ИТР с душем и туалетом, блок-модули с тамбуром и без, столовые, бани, сушилки',
  longDescription: `Наша компания предлагает широкий выбор стандартных модульных зданий высокого качества. 
  Все конструкции изготавливаются на собственном производстве с использованием современных материалов и технологий.
  
  Мы производим различные типы модулей для разных задач:
  
  • ИТР модули с различными комплектациями: с душем, туалетом, кухней, спальным местом или их комбинациями. 
  Эти модули обеспечивают комфортные условия для инженерно-технических работников на объектах.
  
  • Блок-модули с тамбуром и без. Тамбур обеспечивает дополнительную теплоизоляцию и защиту от осадков, 
  что особенно актуально для суровых климатических условий Дальнего Востока.
  
  • Специализированные модули: столовые для организации питания, душевые и туалетные модули для санитарных нужд, 
  бани для отдыха персонала, сушилки для спецодежды и обуви.
  
  Каждый модуль проходит строгий контроль качества и соответствует всем строительным нормам и требованиям безопасности. 
  Мы можем адаптировать любой стандартный модуль под ваши конкретные потребности.`,
  features: [
    'Прочный металлический каркас',
    'Электропроводка по ГОСТ',
    'Возможность комплектации с тамбуром или без',
    'Пожарная сигнализация',
    'Возможность перепланировки',
    'Быстрый монтаж и демонтаж',
    'Доставка и установка под ключ',
  ],
  specifications: {
    dimensions: {
      length: 'под требования заказчика',
      width: '',
      height: '',
    },
    area: 'от 14.4 м²',
    capacity: '',
    temperature: 'от -45°C до +40°C',
    weight: '',
    lifespan: '',
  },
  images: [
    '/img/modules/new/bst-3.webp',
    '/img/modules/standart/1.webp',
    '/img/modules/standart/02.webp',
    '/img/modules/standart/2.webp',
    '/img/modules/standart/3.webp',
    '/img/modules/standart/4.webp',
    '/img/modules/standart/5.webp',
    '/img/modules/standart/6.webp',
    '/img/modules/standart/7.webp',
    '/img/modules/standart/8.webp',
    '/img/modules/standart/b1.webp',
    '/img/modules/standart/b2.webp',
    '/img/modules/standart/b4.webp',
    '/img/modules/standart/b5.webp',
    '/img/modules/standart/b6.webp',
    '/img/modules/standart/b7.webp',
    '/img/modules/standart/b10.webp',
    '/img/modules/standart/b11.webp',
    '/img/modules/standart/b12.webp',
    '/img/modules/others/out-2.webp',
    '/img/modules/others/out-4.webp',
    '/img/modules/others/int-4.webp',
    '/img/modules/others/int-2.webp',
    '/img/modules/new/bst-1.webp',
    '/img/modules/new/bst-7.webp',
    '/img/modules/new/bst-9.webp',
    '/img/modules/new/bst-2.webp',
  ],
  advantages: [
    {
      title: 'Быстрое производство',
      description: 'Срок изготовления от 5 рабочих дней',
      icon: 'clock',
    },
    {
      title: 'Доставка и монтаж',
      description: 'Полный комплекс услуг под ключ',
      icon: 'truck',
    },
    {
      title: 'Индивидуальный подход',
      description: 'Возможность изготовления по вашим размерам',
      icon: 'customize',
    },
    {
      title: 'Гарантия качества',
      description: 'Гарантия на конструкцию 12 месяцев',
      icon: 'shield',
    },
  ],
}

export default function StandardModulesPage() {
  return <ProductPage product={productData} />
}
