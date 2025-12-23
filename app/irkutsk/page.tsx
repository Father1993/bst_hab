import type { Metadata } from 'next'
import IrkutskRedirect from './redirect'

export const metadata: Metadata = {
  title: 'BST HAB Иркутск — Производство и аренда модульных конструкций',
  description: 'Модульные конструкции в Иркутске: бытовки, гаражи, посты охраны. Собственное производство, быстрая доставка. Офис: ул. Промышленная, 3Б, рп. Маркова. Телефоны: +7 (4212) 25-21-88, +7 (3952) 98-27-27',
  keywords: [
    'бытовки Иркутск',
    'модульные конструкции Иркутск',
    'гаражи из сэндвич панелей Иркутск',
    'аренда бытовок Иркутск',
    'производство бытовок Иркутск',
    'строительные модули Иркутск',
    'посты охраны Иркутск',
    'модульные здания Иркутская область',
    'BST HAB Иркутск',
  ],
  openGraph: {
    title: 'BST HAB Иркутск — Модульные конструкции',
    description: 'Производство и аренда бытовок, гаражей, модульных зданий в Иркутске. +7 (4212) 25-21-88',
    url: 'https://irkutsk.bst-hab.ru',
    siteName: 'BST HAB Иркутск',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://irkutsk.bst-hab.ru',
  },
  robots: {
    index: false, // Не индексируем страницу редиректа
    follow: false,
  },
}

export default function IrkutskPage() {
  return <IrkutskRedirect />
}

