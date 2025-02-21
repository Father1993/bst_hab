import { Metadata } from 'next'
import RootLayout from '@/components/layout/RootLayout'
import './globalStyles/normalize.css'
import './globalStyles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://bst-hab.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BST HAB - Производство и аренда модульных конструкций',
    description:
      'Производство и аренда бытовок, модульных гаражей и строительных конструкций. Быстрое изготовление, доставка, монтаж. Типовые и индивидуальные проекты.',
    url: 'https://bst-hab.ru',
    siteName: 'BST HAB',
    images: [
      {
        url: '/og-image.jpg',
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
    images: ['/og-image.jpg'],
  },
  verification: {
    yandex: 'ваш-код-верификации',
    google: 'ваш-код-верификации',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
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
