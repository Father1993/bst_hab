import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import RootLayout from '@/components/layout/RootLayout'
import YandexMetrika from '@/components/shared/YandexMetrika'
import EmailJSProvider from '@/components/providers/EmailJSProvider'
import './globalStyles/normalize.css'
import './globalStyles/globals.css'

// Подключаем шрифт
const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  preload: true,
  // Предварительная загрузка всех вариантов
  weight: ['400', '500', '600', '700'],
  // Задаём размеры заранее для уменьшения CLS
  fallback: ['Arial', 'sans-serif'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bst-hab.ru'),
  title: {
    template: '%s | BST HAB',
    default: 'BST HAB - Производство и аренда модульных конструкций в Хабаровске',
  },
  description:
    'Производство и аренда бытовок, модульных гаражей и строительных конструкций в Хабаровске. ✓ Быстрое изготовление ✓ Доставка и монтаж ✓ Типовые и индивидуальные проекты. Звоните: +7 (4212) 25-21-88',
  keywords: [
    'бытовки Хабаровск',
    'аренда бытовок Хабаровск',
    'гаражи из сэндвич панелей Хабаровск',
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
        {/* Обновленный метатег Яндекса */}
        <meta name='yandex-verification' content='cc6ee10a7e894223' />
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

        {/* Предзагрузка важных ресурсов для уменьшения CLS */}
        <link rel='preload' href='/img/catalog/bg-1.webp' as='image' type='image/webp' />

        {/* Предзагрузка видео на главной странице - значительно улучшает LCP */}
        <link rel='preload' href='/img/video_bg.mp4' as='video' type='video/mp4' />
        <link rel='preload' href='/img/2.webp' as='image' type='image/webp' fetchPriority='high' />

        {/* Оптимизации для ускорения LCP */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          /* Заранее резервируем место для элементов Hero, чтобы уменьшить CLS */
          h1.text-4xl {
            text-rendering: optimizeSpeed;
            content-visibility: auto;
            contain-intrinsic-size: 0 250px;
          }
          
          /* Заранее устанавливаем минимальную высоту для ключевых секций */
          section.min-h-screen {
            min-height: 100vh;
            content-visibility: auto;
          }
          
          /* Оптимизация CSS для ускорения отрисовки текста */
          .font-bold {
            font-display: swap;
            text-rendering: optimizeSpeed;
          }
        `,
          }}
        />

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
                telephone: '+7 (914) 542-21-88',
                contactType: 'customer service',
                email: '252188dv@mail.ru',
                availableLanguage: 'Russian',
              },
              sameAs: ['https://t.me/+79145422188', 'https://t.me/+79145422188'],
            }),
          }}
        />

        {/* Яндекс.Метрика */}
        <YandexMetrika />
      </head>
      <body>
        <EmailJSProvider>
          <RootLayout>{children}</RootLayout>
        </EmailJSProvider>
      </body>
    </html>
  )
}
