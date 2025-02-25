/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable max-len */
import { Suspense } from 'react'
import { Metadata } from 'next'
import NotFoundPages from '@/components/features/NotFoundPages'

export const metadata: Metadata = {
  title: 'Страница не найдена | BST HAB',
  description:
    'К сожалению, запрашиваемая страница не найдена. Вернитесь на главную страницу BST HAB для поиска нужной информации',
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  openGraph: {
    title: '404 - Страница не найдена | BST HAB',
    description:
      'Извините, запрашиваемая страница не существует. Вернитесь на главную BST HAB для получения информации.',
    type: 'website',
    url: 'https://bst-hab.ru/404',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '404 - Страница не найдена | BST HAB',
      },
    ],
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: '404 - Страница не найдена | BST HAB',
    description: 'Упс! Страница, которую вы ищете, не существует. Вернитесь на главную BST HAB',
    images: '/img/og-image.jpg',
  },
  alternates: {
    canonical: 'https://bst-hab.ru/404',
  },
}

const NotFound = () => (
  <Suspense fallback={<div>Загрузка...</div>}>
    <NotFoundPages />
  </Suspense>
)

export default NotFound
