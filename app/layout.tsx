import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import RootLayout from '@/components/layout/RootLayout'
import './globalStyles/normalize.css'
import './globalStyles/globals.css'

// Подключаем шрифт
const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bst-hab.ru'),
  title: {
    template: '%s | BST HAB',
    default: 'BST HAB - Производство и аренда модульных конструкций',
  },
  description:
    'Производство и аренда бытовок, модульных гаражей и строительных конструкций. Быстрое изготовление, доставка, монтаж. Типовые и индивидуальные проекты.',
  keywords: [
    'бытовки Хабаровск',
    'аренда бытовок',
    'модульные гаражи',
    'строительные бытовки',
    'производство бытовок',
    'аренда строительных модулей',
    'быстровозводимые конструкции',
    'BST HAB',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BST HAB - Производство и аренда модульных конструкций',
    description:
      'Производство и аренда бытовок, модульных гаражей и строительных конструкций. Быстрое изготовление, доставка, монтаж.',
    url: 'https://bst-hab.ru',
    siteName: 'BST HAB',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BST HAB - Производство и аренда модульных конструкций',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BST HAB - Производство и аренда модульных конструкций',
    description:
      'Производство и аренда бытовок, модульных гаражей и строительных конструкций. Быстрое изготовление, доставка, монтаж.',
    images: ['/img/og-image.jpg'],
  },
  verification: {
    yandex: 'ваш-код-верификации',
    google: 'ваш-код-верификации',
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
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru' className={montserrat.className}>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link
          rel='apple-touch-icon'
          href='/apple-touch-icon.png'
          type='image/png'
          sizes='180x180'
        />
        <meta name='theme-color' content='#ffffff' />
        <meta name='msapplication-TileColor' content='#ffffff' />
      </head>
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
