import { Metadata } from 'next'
import Hero from '@/components/sections/home/Hero/Hero'
import Benefits from '@/components/sections/home/Benefits/Benefits'
import Features from '@/components/sections/home/Features/Features'
import Projects from '@/components/sections/home/Projects/Projects'
import Process from '@/components/sections/home/Process/Process'
import FAQ from '@/components/sections/home/FAQ/FAQ'
import ContactForm from '@/components/features/ContactForm'

export const metadata: Metadata = {
  title: 'BST HAB - Производство и аренда модульных конструкций в Хабаровске',
  description:
    'Производство и аренда бытовок, модульных гаражей и строительных конструкций в Хабаровске. ✓ 10+ лет опыта ✓ Собственное производство ✓ Быстрая доставка ✓ Гарантия качества',
  keywords: [
    'бытовки Хабаровск',
    'аренда бытовок Хабаровск',
    'модульные гаражи Хабаровск',
    'строительные бытовки',
    'производство бытовок Хабаровск',
    'аренда строительных модулей',
    'быстровозводимые конструкции',
    'BST HAB',
    'модульные конструкции Хабаровск',
    'модульные здания',
    'блок-контейнеры',
    'посты охраны',
    'модульное строительство',
    'быстровозводимые здания',
    'аренда модульных зданий',
    'строительные модули',
  ],
  openGraph: {
    title: 'BST HAB - Лидер в производстве модульных конструкций',
    description:
      'Производство и аренда бытовок, модульных гаражей и строительных конструкций в Хабаровске с гарантией качества',
    type: 'website',
    url: 'https://bst-hab.ru',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BST HAB - Модульные конструкции в Хабаровске',
      },
    ],
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BST HAB - Модульные конструкции в Хабаровске',
    description: 'Производство и аренда бытовок, модульных гаражей и строительных конструкций',
    images: '/img/og-image.jpg',
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
    google: 'verification_token',
    yandex: 'cc6ee10a7e894223',
  },
  alternates: {
    canonical: 'https://bst-hab.ru',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function Home() {
  return (
    <div className='flex flex-col'>
      {/* 1. Привлечение внимания */}
      <Hero />

      {/* 3. Построение доверия */}
      <Features />

      {/* 2. Демонстрация преимуществ */}
      <Benefits />

      {/* 4. Социальное доказательство */}
      <Projects />

      {/* 5. Устранение сомнений */}
      <Process />

      {/* 6. Ответы на возражения */}
      <FAQ />

      {/* 7. Призыв к действию - оптимизирована для уменьшения CLS */}
      <section
        className='py-16 md:py-24 bg-black relative overflow-hidden min-h-[400px]'
        style={{
          // Определяем размеры секции заранее
          containIntrinsicSize: '0 400px',
          contentVisibility: 'auto',
        }}
      >
        {/* Предзагружаем фоновую сетку заранее для предотвращения смещений */}
        <div
          className='absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-10'
          style={{
            // Убеждаемся, что фоновый узор не вызовет смещений
            contain: 'paint layout',
          }}
        />
        <div className='container mx-auto px-4 relative'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Готовы обсудить ваш <span className='text-[#FFD700]'>проект</span>?
            </h2>
            <p className='text-gray-400 max-w-2xl mx-auto'>
              Заполните форму ниже, и мы свяжемся с вами в течение 30 минут для обсуждения деталей
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
