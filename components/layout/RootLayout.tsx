import { ReactNode } from 'react'
import { Metadata } from 'next'
import Header from './Header'
import Footer from './Footer'

// Метаданные по умолчанию
export const metadata: Metadata = {
  title: {
    default: 'BST HAB - Модульное строительство и аренда бытовок',
    template: '%s | BST HAB - Производственная компания',
  },
  description:
    'BST HAB - производство и аренда модульных конструкций: бытовки, гаражи, строительные модули. Быстрое изготовление по типовым и индивидуальным проектам. Выгодные условия аренды.',
  keywords: [
    'модульное строительство',
    'бытовки',
    'аренда бытовок',
    'модульные гаражи',
    'строительные бытовки',
    'производство бытовок',
    'аренда строительных модулей',
    'быстровозводимые конструкции',
    'BST HAB',
  ],
  authors: [{ name: 'BST HAB' }],
  creator: 'BST HAB',
  publisher: 'BST HAB',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
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

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default RootLayout
