import { Metadata } from 'next'
import AboutHero from '@/components/sections/about/AboutHero/AboutHero'
import AboutHistory from '@/components/sections/about/AboutHistory/AboutHistory'
import AboutProduction from '@/components/sections/about/AboutProduction/AboutProduction'
import AboutShowcase from '@/components/sections/about/AboutShowcase/AboutShowcase'

export const metadata: Metadata = {
  title: 'О компании BST HAB - Производство и аренда бытовок и модульных зданий в Хабаровске',
  description:
    'Производим и сдаем в аренду бытовки, дачные домики и модульные здания в Хабаровске с 2013 года. ✓ Каркасные бытовки ✓ Модули из сэндвич-панелей ✓ Переоборудование контейнеров ✓ Индивидуальные размеры ✓ Доставка по ДВ ✓ Модули в наличии',
  keywords: [
    'бытовки Хабаровск',
    'дачные домики Хабаровск',
    'каркасные бытовки',
    'бытовки из сэндвич-панелей',
    'модульные здания на заказ',
    'переоборудование контейнеров',
    'производство бытовок Хабаровск',
    'модульные дома ДВ',
    'бытовки по размерам заказчика',
    'купить бытовку в Хабаровске',
    'строительные бытовки',
    'модульные конструкции цена',
    'бытовки для дачи',
    'производство модульных зданий',
    'быстровозводимые здания Хабаровск',
    'аренда бытовок Хабаровск',
    'аренда модульных зданий',
    'бытовки в наличии',
    'модули в наличии Хабаровск',
    'аренда строительных бытовок',
  ],
  openGraph: {
    title: 'BST HAB - Производство и аренда бытовок и модульных зданий в Хабаровске',
    description:
      'Изготавливаем и сдаем в аренду бытовки, дачные домики и модульные здания любой сложности. Каркасные конструкции, сэндвич-панели, переоборудование контейнеров. Всегда есть модули в наличии. Работаем с 2013 года.',
    images: ['/img/about-hero.webp'],
    type: 'website',
    locale: 'ru_RU',
  },
  alternates: {
    canonical: 'https://bst-hab.ru/about',
  },
}

export default function About({ city = 'khabarovsk' }: { city?: 'khabarovsk' | 'irkutsk' }) {
  return (
    <div className='flex flex-col'>
      <AboutHero city={city} />
      <AboutProduction city={city} />
      <AboutShowcase city={city} />
      <AboutHistory city={city} />
    </div>
  )
}
