import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Metadata } from 'next'

// Метаданные по умолчанию
export const metadata: Metadata = {
  title: {
    default: 'BST Habitat - Современные решения для бизнеса',
    template: '%s | BST Habitat',
  },
  description:
    'BST Habitat предлагает современные решения для развития вашего бизнеса. Профессиональная разработка, маркетинг и консультации.',
  keywords: [
    'бизнес решения',
    'разработка',
    'маркетинг',
    'консалтинг',
    'BST Habitat',
  ],
  authors: [{ name: 'BST Habitat Team' }],
  creator: 'BST Habitat',
  publisher: 'BST Habitat',
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
      <main className='min-h-screen container mx-auto px-4 py-8'>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default RootLayout
