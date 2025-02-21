import { Metadata } from 'next'
import Hero from '@/components/sections/home/Hero/Hero'

export const metadata: Metadata = {
  title: 'BST HAB - Производство и аренда модульных конструкций',
  description:
    'Производство и аренда бытовок, модульных гаражей и строительных конструкций в Москве и области. Быстрое изготовление, доставка, монтаж. ✓ Выгодные цены ✓ Собственное производство ✓ Гарантия качества',
  keywords: [
    'бытовки',
    'аренда бытовок',
    'модульные гаражи',
    'строительные бытовки',
    'BST HAB',
    'производство бытовок москва',
  ],
}

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Hero />
    </div>
  )
}
