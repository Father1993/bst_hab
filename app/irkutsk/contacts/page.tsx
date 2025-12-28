import type { Metadata } from 'next'
import { IRKUTSK_OFFICE } from '@/components/shared/constants'
import ContactForm from '@/components/features/ContactForm'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Контакты BST HAB в Иркутске — Адрес, телефоны, время работы',
  description: `Контакты офиса BST HAB в Иркутске. Адрес: ${IRKUTSK_OFFICE.addressFull}. Телефоны: ${IRKUTSK_OFFICE.phone}, ${IRKUTSK_OFFICE.phoneLocal}. Режим работы: ${IRKUTSK_OFFICE.workHours}`,
  keywords: [
    'контакты BST HAB Иркутск',
    'адрес BST HAB Иркутск',
    'телефон бытовки Иркутск',
    'офис модульные конструкции Иркутск',
  ],
  openGraph: {
    title: 'Контакты BST HAB в Иркутске',
    description: `${IRKUTSK_OFFICE.addressFull}. Телефон: ${IRKUTSK_OFFICE.phone}`,
    url: 'https://irkutsk.bst-hab.ru/contacts',
  },
  alternates: {
    canonical: 'https://irkutsk.bst-hab.ru/contacts',
  },
}

export default function IrkutskContactsPage() {
  return (
    <main className='min-h-screen bg-black'>
      {/* Фоновое изображение */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/img/catalog/bg-1.webp'
          alt='Контакты BST HAB Иркутск'
          fill
          priority
          quality={70}
          className='object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black' />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Заголовок */}
        <section className='py-16 md:py-24 text-center'>
          <div className='inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-[#FFD700]/10 bg-[#FFD700]/5'>
            <span className='text-[#FFD700] text-sm font-medium'>Контакты в Иркутске</span>
          </div>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Свяжитесь с нами в <span className='text-[#FFD700]'>Иркутске</span>
          </h1>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Офис компании BST HAB в Иркутске. Мы работаем с клиентами в Иркутске и Иркутской
            области, обеспечивая оперативную связь и консультации по всем вопросам
          </p>
        </section>

        {/* Контактная информация */}
        <section className='py-12'>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
            <div className='bg-zinc-800/30 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/30'>
              <div className='text-[#FFD700] mb-4'>
                <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
              </div>
              <h3 className='text-white font-semibold mb-2 text-xl'>Основной телефон</h3>
              <a
                href={`tel:${IRKUTSK_OFFICE.phoneRaw}`}
                className='text-gray-400 hover:text-[#FFD700] transition-colors text-lg block'
              >
                {IRKUTSK_OFFICE.phone}
              </a>
              <p className='text-sm text-gray-500 mt-1'>Федеральный номер</p>
            </div>

            <div className='bg-zinc-800/30 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/30'>
              <div className='text-[#FFD700] mb-4'>
                <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
              </div>
              <h3 className='text-white font-semibold mb-2 text-xl'>Городской</h3>
              <a
                href={`tel:${IRKUTSK_OFFICE.phoneLocalRaw}`}
                className='text-gray-400 hover:text-[#FFD700] transition-colors text-lg block mb-1'
              >
                {IRKUTSK_OFFICE.phoneLocal}
              </a>
              <p className='text-sm text-gray-500'>или {IRKUTSK_OFFICE.phoneShort}</p>
            </div>

            <div className='bg-zinc-800/30 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/30'>
              <div className='text-[#FFD700] mb-4'>
                <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <h3 className='text-white font-semibold mb-2 text-xl'>Email</h3>
              <a
                href={`mailto:${IRKUTSK_OFFICE.email}`}
                className='text-gray-400 hover:text-[#FFD700] transition-colors'
              >
                {IRKUTSK_OFFICE.email}
              </a>
              <p className='text-sm text-gray-500 mt-1'>Ответ в течение 2 часов</p>
            </div>

            <div className='bg-zinc-800/30 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/30'>
              <div className='text-[#FFD700] mb-4'>
                <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='text-white font-semibold mb-2 text-xl'>Режим работы</h3>
              <p className='text-gray-400'>{IRKUTSK_OFFICE.workHours}</p>
              <p className='text-sm text-gray-500 mt-1'>Вс: выходной</p>
            </div>
          </div>

          {/* Адрес */}
          <div className='bg-zinc-800/30 backdrop-blur-sm rounded-xl p-8 border border-zinc-700/30 mb-12'>
            <div className='flex items-start gap-6'>
              <div className='text-[#FFD700]'>
                <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
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
              <div>
                <h3 className='text-white font-semibold mb-2 text-xl'>Адрес офиса</h3>
                <p className='text-gray-400 text-lg mb-2'>{IRKUTSK_OFFICE.addressFull}</p>
                <p className='text-sm text-gray-500'>
                  Офис расположен в {IRKUTSK_OFFICE.settlement}, {IRKUTSK_OFFICE.region}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Форма обратной связи */}
        <section className='py-12'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Оставьте <span className='text-[#FFD700]'>заявку</span>
            </h2>
            <p className='text-gray-400 max-w-2xl mx-auto'>
              Заполните форму, и мы свяжемся с вами в ближайшее время для обсуждения вашего проекта
            </p>
          </div>
          <ContactForm city='irkutsk' metrikaGoalId='form_submit_irkutsk' />
        </section>
      </div>

      {/* Микроразметка Schema.org */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            mainEntity: {
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
              openingHours: 'Mo-Sa 09:00-19:00',
              url: 'https://irkutsk.bst-hab.ru',
              sameAs: ['https://bst-hab.ru', `https://t.me/${IRKUTSK_OFFICE.whatsapp}`, `https://wa.me/${IRKUTSK_OFFICE.whatsapp}`],
              priceRange: '$$',
              areaServed: {
                '@type': 'AdministrativeArea',
                name: 'Иркутск и Иркутская область',
              },
            },
          }),
        }}
      />
    </main>
  )
}

