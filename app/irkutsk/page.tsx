import type { Metadata } from 'next'
import IrkutskRedirect from './redirect'

export const metadata: Metadata = {
  title: 'BST HAB Иркутск — Производство и аренда модульных конструкций',
  description: `Модульные конструкции в Иркутске: бытовки, гаражи, посты охраны. Собственное производство, быстрая доставка. Офис: ${IRKUTSK_OFFICE.addressFull}. Телефоны: ${IRKUTSK_OFFICE.phone}, ${IRKUTSK_OFFICE.phoneLocal}`,
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
    description: `Производство и аренда бытовок, гаражей, модульных зданий в Иркутске. ${IRKUTSK_OFFICE.phone}`,
    url: 'https://irkutsk.bst-hab.ru',
    siteName: 'BST HAB Иркутск',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://irkutsk.bst-hab.ru',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function IrkutskPage() {
  return <IrkutskRedirect />
}

