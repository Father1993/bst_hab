import './globalStyles/normalize.css'
import './globalStyles/globals.css'
import RootLayout from '@/components/layout/RootLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://bst-habitat.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BST Habitat - Современные решения для бизнеса',
    description:
      'BST Habitat предлагает современные решения для развития вашего бизнеса. Профессиональная разработка, маркетинг и консультации.',
    url: 'https://bst-habitat.ru',
    siteName: 'BST Habitat',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BST Habitat - Современные решения для бизнеса',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BST Habitat - Современные решения для бизнеса',
    description:
      'BST Habitat предлагает современные решения для развития вашего бизнеса. Профессиональная разработка, маркетинг и консультации.',
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
