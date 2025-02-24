import { Metadata } from 'next'
import AboutHero from '@/components/sections/about/AboutHero/AboutHero'
import AboutHistory from '@/components/sections/about/AboutHistory/AboutHistory'
import AboutProduction from '@/components/sections/about/AboutProduction/AboutProduction'

export const metadata: Metadata = {
  title: 'О компании BST HAB - Производство бытовок и модульных зданий в Хабаровске',
  description:
    'Производим бытовки, дачные домики и модульные здания в Хабаровске с 2013 года. ✓ Каркасные бытовки ✓ Модули из сэндвич-панелей ✓ Переоборудование контейнеров ✓ Индивидуальные размеры ✓ Доставка по ДВ',
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
  ],
  openGraph: {
    title: 'BST HAB - Производство бытовок и модульных зданий в Хабаровске',
    description:
      'Изготавливаем бытовки, дачные домики и модульные здания любой сложности. Каркасные конструкции, сэндвич-панели, переоборудование контейнеров. Работаем с 2013 года.',
    images: ['/img/about-hero.webp'],
    type: 'website',
    locale: 'ru_RU',
  },
  alternates: {
    canonical: 'https://bst-hab.ru/about',
  },
}

export default function About() {
  return (
    <div className='flex flex-col'>
      <AboutHero />
      <AboutProduction />
      <AboutHistory />
    </div>
  )
}
