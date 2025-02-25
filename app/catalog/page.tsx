import { Metadata } from 'next'
import catalogData from '@/data/catalog.json'
import { CatalogClient } from '@/components/catalog/CatalogClient'

export const metadata: Metadata = {
  title: 'Каталог модульных конструкций | BST HAB',
  description:
    'Аренда и продажа бытовок, строительных и офисных модулей в Хабаровске. Выгодные цены, быстрая доставка, профессиональный монтаж.',
  keywords: [
    'аренда бытовок Хабаровск',
    'модульные конструкции',
    'строительные бытовки',
    'офисные модули',
    'аренда строительных вагончиков',
  ],
}

export default function CatalogPage() {
  return <CatalogClient catalogData={catalogData} />
}
