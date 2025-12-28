import type { Metadata } from 'next'
import Hero from '@/components/sections/home/Hero/Hero'
import Features from '@/components/sections/home/Features/Features'
import Benefits from '@/components/sections/home/Benefits/Benefits'
import Process from '@/components/sections/home/Process/Process'
import Projects from '@/components/sections/home/Projects/Projects'
import FAQ from '@/components/sections/home/FAQ/FAQ'
import ContactForm from '@/components/features/ContactForm'
import { IRKUTSK_OFFICE } from '@/components/shared/constants'

export const metadata: Metadata = {
  title: 'BST HAB Иркутск — Производство и аренда модульных конструкций',
  description:
    'Модульные конструкции в Иркутске: бытовки, гаражи, посты охраны. Собственное производство, быстрая доставка. Офис: ул. Промышленная, 3Б, рп. Маркова. Телефоны: +7 (4212) 25-21-88, +7 (3952) 98-27-27',
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
    description:
      'Производство и аренда бытовок, гаражей, модульных зданий в Иркутске. +7 (4212) 25-21-88',
    url: 'https://irkutsk.bst-hab.ru',
    siteName: 'BST HAB Иркутск',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://irkutsk.bst-hab.ru',
  },
  robots: {
    index: true, // Индексируем основную страницу Иркутска
    follow: true,
  },
}

export default function IrkutskPage() {
  return (
    <main className='min-h-screen bg-black'>
      <Hero city='irkutsk' />
      <Features />
      <Benefits />
      <Process />
      <Projects />

      {/* Секция с контактами и формой для Иркутска */}
      <section className='py-16 md:py-24 bg-black relative'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Свяжитесь с нами в <span className='text-[#FFD700]'>Иркутске</span>
            </h2>
            <p className='text-gray-400 max-w-2xl mx-auto'>
              Оставьте заявку, и мы свяжемся с вами для консультации по вашему проекту
            </p>
          </div>

          {/* Контактная информация Иркутска */}
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
            <div className='bg-zinc-900/60 backdrop-blur-md rounded-xl p-6 border border-zinc-800/50'>
              <div className='text-[#FFD700] mb-3'>
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
              </div>
              <h3 className='text-white font-semibold mb-2'>Основной</h3>
              <a
                href={`tel:${IRKUTSK_OFFICE.phoneRaw}`}
                className='text-gray-400 hover:text-[#FFD700] transition-colors block'
              >
                {IRKUTSK_OFFICE.phone}
              </a>
            </div>

            <div className='bg-zinc-900/60 backdrop-blur-md rounded-xl p-6 border border-zinc-800/50'>
              <div className='text-[#FFD700] mb-3'>
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
              </div>
              <h3 className='text-white font-semibold mb-2'>Городской</h3>
              <a
                href={`tel:${IRKUTSK_OFFICE.phoneLocalRaw}`}
                className='text-gray-400 hover:text-[#FFD700] transition-colors block mb-1'
              >
                {IRKUTSK_OFFICE.phoneLocal}
              </a>
              <p className='text-xs text-gray-500'>или {IRKUTSK_OFFICE.phoneShort}</p>
            </div>

            <div className='bg-zinc-900/60 backdrop-blur-md rounded-xl p-6 border border-zinc-800/50'>
              <div className='text-[#FFD700] mb-3'>
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <h3 className='text-white font-semibold mb-2'>Email</h3>
              <a
                href={`mailto:${IRKUTSK_OFFICE.email}`}
                className='text-gray-400 hover:text-[#FFD700] transition-colors text-sm'
              >
                {IRKUTSK_OFFICE.email}
              </a>
            </div>

            <div className='bg-zinc-900/60 backdrop-blur-md rounded-xl p-6 border border-zinc-800/50'>
              <div className='text-[#FFD700] mb-3'>
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
              </div>
              <h3 className='text-white font-semibold mb-2'>Адрес</h3>
              <p className='text-gray-400 text-sm'>{IRKUTSK_OFFICE.addressFull}</p>
            </div>
          </div>

          <ContactForm city='irkutsk' metrikaGoalId='form_submit_irkutsk' />
        </div>
      </section>

      <FAQ />

      {/* Микроразметка Schema.org для SEO */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: IRKUTSK_OFFICE.name,
            telephone: [IRKUTSK_OFFICE.phoneRaw, IRKUTSK_OFFICE.phoneLocalRaw],
            email: IRKUTSK_OFFICE.email,
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'ул. Промышленная, 3Б',
              addressLocality: IRKUTSK_OFFICE.settlement,
              addressRegion: IRKUTSK_OFFICE.region,
              addressCountry: 'RU',
            },
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Иркутск и Иркутская область',
            },
            openingHours: 'Mo-Sa 09:00-19:00',
            url: 'https://irkutsk.bst-hab.ru',
            sameAs: [
              'https://bst-hab.ru',
              `https://t.me/${IRKUTSK_OFFICE.whatsapp}`,
              `https://wa.me/${IRKUTSK_OFFICE.whatsapp}`,
            ],
            priceRange: '$$',
            description:
              'Производство и аренда модульных конструкций: бытовки, гаражи, строительные модули в Иркутске',
          }),
        }}
      />
    </main>
  )
}
