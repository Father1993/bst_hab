import type { Metadata } from 'next'
import NotFoundPages from '@/components/features/NotFoundPages'

export const metadata: Metadata = {
  title: 'Страница не найдена | BST HAB Иркутск',
  description:
    'К сожалению, запрашиваемая страница не найдена. Вернитесь на главную страницу BST HAB Иркутск.',
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://irkutsk.bst-hab.ru/404',
  },
}

export default function NotFound() {
  return <NotFoundPages />
}


