import { Metadata } from 'next'
import DeliveryContent from '@/components/sections/delivery/DeliveryContent'

export const metadata: Metadata = {
  title: 'Доставка модульных конструкций | BST HAB',
  description:
    'Доставка модульных конструкций и бытовок в любой регион России и страны СНГ. Собственный автопарк, различные варианты транспортировки, гарантия сроков.',
  keywords: [
    'доставка модульных конструкций',
    'доставка бытовок Хабаровск',
    'перевозка модульных зданий',
    'транспортировка бытовок',
    'доставка блок-контейнеров',
  ],
}

export default function DeliveryPage() {
  return <DeliveryContent />
}
