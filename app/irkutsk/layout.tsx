import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://irkutsk.bst-hab.ru'),
  title: {
    template: '%s | BST HAB Иркутск',
    default: 'BST HAB Иркутск - Производство и аренда модульных конструкций',
  },
  description:
    'Производство и аренда бытовок, модульных гаражей и строительных конструкций в Иркутске и Иркутской области. ✓ Быстрое изготовление ✓ Доставка и монтаж ✓ Типовые и индивидуальные проекты. Звоните: +7 (4212) 25-21-88, +7 (3952) 98-27-27',
  keywords: [
    'бытовки Иркутск',
    'аренда бытовок Иркутск',
    'гаражи из сэндвич панелей Иркутск',
    'строительные бытовки Иркутск',
    'производство бытовок Иркутск',
    'аренда строительных модулей Иркутск',
    'быстровозводимые конструкции Иркутск',
    'BST HAB Иркутск',
    'модульные конструкции Иркутская область',
    'купить бытовку в Иркутске',
  ],
  alternates: {
    canonical: 'https://irkutsk.bst-hab.ru',
  },
  openGraph: {
    title: 'BST HAB Иркутск - Производство и аренда модульных конструкций',
    description:
      'Производство и аренда бытовок, модульных гаражей и строительных конструкций в Иркутске. Быстрое изготовление, доставка, монтаж. ✓ Выгодные цены ✓ Собственное производство',
    url: 'https://irkutsk.bst-hab.ru',
    siteName: 'BST HAB Иркутск',
    images: [
      {
        url: 'https://bst-hab.ru/img/favicons/android-chrome-512x512.png',
        width: 1200,
        height: 630,
        alt: 'BST HAB - Производство и аренда модульных конструкций в Иркутске',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BST HAB Иркутск - Модульные конструкции',
    description:
      'Производство и аренда бытовок, модульных гаражей и строительных конструкций в Иркутске. ✓ Быстрое изготовление ✓ Доставка и монтаж',
    images: ['https://bst-hab.ru/img/favicons/android-chrome-512x512.png'],
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
  verification: {
    google: 'qwea9m2lHkkA0v9SAwRC0QfsALfcBlBUhstyEMx53Wo',
    yandex: 'cc6ee10a7e894223',
  },
}

export default function IrkutskLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

