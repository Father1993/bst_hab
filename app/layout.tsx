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
    default: 'BST HAB - Производство и аренда модульных конструкций в Хабаровске',
  },
  description:
    'Производство и аренда бытовок, модульных гаражей и строительных конструкций в Хабаровске. ✓ Быстрое изготовление ✓ Доставка и монтаж ✓ Типовые и индивидуальные проекты. Звоните: +7 (914) 203-91-97',
  keywords: [
    'бытовки Хабаровск',
    'аренда бытовок Хабаровск',
    'модульные гаражи Хабаровск',
    'строительные бытовки',
    'производство бытовок',
    'аренда строительных модулей',
    'быстровозводимые конструкции',
    'BST HAB',
    'бытовки цена',
    'купить бытовку в Хабаровске',
  ],
  alternates: {
    canonical: 'https://bst-hab.ru',
  },
  openGraph: {
    title: 'BST HAB - Производство и аренда модульных конструкций в Хабаровске',
    description:
      'Производство и аренда бытовок, модульных гаражей и строительных конструкций в Хабаровске. Быстрое изготовление, доставка, монтаж. ✓ Выгодные цены ✓ Собственное производство',
    url: 'https://bst-hab.ru',
    siteName: 'BST HAB',
    images: [
      {
        url: 'https://bst-hab.ru/img/favicons/android-chrome-512x512.png',
        width: 1200,
        height: 630,
        alt: 'BST HAB - Производство и аренда модульных конструкций в Хабаровске',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BST HAB - Производство и аренда модульных конструкций в Хабаровске',
    description:
      'Производство и аренда бытовок, модульных гаражей и строительных конструкций в Хабаровске. ✓ Быстрое изготовление ✓ Доставка и монтаж',
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru' className={montserrat.className}>
      <head>
        <meta charSet='UTF-8' />
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link
          rel='apple-touch-icon'
          href='/apple-touch-icon.png'
          type='image/png'
          sizes='180x180'
        />
        <meta name='theme-color' content='#000000' />
        <meta name='msapplication-TileColor' content='#000000' />
        <link rel='manifest' href='/manifest.json' />

        {/* Микроразметка Schema.org */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'BST HAB',
              url: 'https://bst-hab.ru',
              logo: {
                '@type': 'ImageObject',
                url: 'https://bst-hab.ru/img/logo/bst_hab-logo-black.png',
                width: 180,
                height: 60,
              },
              description: 'Производство и аренда модульных конструкций в Хабаровске',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'ул.Связная, 1Б',
                addressLocality: 'Хабаровск',
                addressRegion: 'Хабаровский край',
                postalCode: '680000',
                addressCountry: 'RU',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+7-914-203-91-97',
                contactType: 'customer service',
                email: '252188@mail.ru',
                availableLanguage: 'Russian',
              },
              sameAs: ['https://vk.com/bsthab', 'https://t.me/bsthab'],
            }),
          }}
        />
      </head>
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
