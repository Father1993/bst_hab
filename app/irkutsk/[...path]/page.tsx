import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import AboutPage from '@/app/about/page'
import DeliveryPage from '@/app/delivery/page'
import PrivacyPage from '@/app/privacy/page'
import PrivacyPolicyPage from '@/app/privacy-policy/page'
import SalePage from '@/app/sale/page'
import RentPage from '@/app/rent/page'
import SaleStandardModulesPage from '@/app/sale/standard-modules/page'
import SaleGaragesPage from '@/app/sale/garages/page'
import SalePostsPage from '@/app/sale/posts/page'
import SaleLargeBuildingsPage from '@/app/sale/large-buildings/page'
import SaleCountryHousesPage from '@/app/sale/country-houses/page'
import SaleBusinessPage from '@/app/sale/business/page'

import RentDetailPage from '@/components/features/RentDetailPage/RentDetailPage'

type Params = { path: string[] }
type Props = { params: Promise<Params> }

const IRK_DOMAIN = process.env.NEXT_PUBLIC_IRKUTSK_DOMAIN || 'https://irkutsk.bst-hab.ru'

const canonical = (path: string) => `${IRK_DOMAIN}${path.startsWith('/') ? path : `/${path}`}`

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { path: parts } = await params
  const p = parts.join('/')
  const path = `/${p}`.replace(/\/+$/, '') || '/'

  const base: Metadata = {
    alternates: { canonical: canonical(path === '/' ? '' : path) },
    openGraph: { url: canonical(path === '/' ? '' : path) },
  }

  // SEO: простые, но “чистые” заголовки/описания под Иркутск без дублей
  switch (p) {
    case 'about':
      return {
        ...base,
        title: 'О компании BST HAB в Иркутске — производство и аренда модульных конструкций',
        description:
          'BST HAB — производство модульных конструкций и бытовок. Работаем с 2013 года, филиал в Иркутске открыт в 2025. Типовые и индивидуальные решения, доставка и монтаж.',
      }
    case 'rent':
      return {
        ...base,
        title: 'Аренда бытовок и модульных зданий в Иркутске | BST HAB',
        description:
          'Аренда бытовок, КПП, постов охраны и модульных решений в Иркутске и Иркутской области. Быстрая доставка, монтаж, обслуживание. Выгодные условия от производителя.',
      }
    case 'rent/container-20ft':
      return {
        ...base,
        title: 'Аренда 20‑футовых контейнеров в Иркутске | BST HAB',
        description:
          'Аренда 20‑футовых контейнеров в Иркутске: компактные решения для хранения и перевозки. Доставка и установка. Выгодные условия от производителя.',
      }
    case 'rent/container-40ft':
      return {
        ...base,
        title: 'Аренда 40‑футовых контейнеров в Иркутске | BST HAB',
        description:
          'Аренда 40‑футовых контейнеров в Иркутске: просторные решения для хранения и крупногабаритных грузов. Доставка и установка.',
      }
    case 'rent/residential':
      return {
        ...base,
        title: 'Аренда бытовых модулей для проживания в Иркутске | BST HAB',
        description:
          'Аренда жилых модулей и бытовок для размещения персонала в Иркутске и Иркутской области. Доставка, монтаж и обслуживание на весь срок аренды.',
      }
    case 'rent/security':
      return {
        ...base,
        title: 'Аренда постов охраны и КПП в Иркутске | BST HAB',
        description:
          'Аренда постов охраны и КПП в Иркутске: модули для безопасности объектов. Доставка, монтаж и обслуживание. Выгодные условия.',
      }
    case 'delivery':
      return {
        ...base,
        title: 'Доставка модульных зданий и бытовок в Иркутске | BST HAB',
        description:
          'Доставка модульных конструкций и бытовок по Иркутску и Иркутской области. Подбор транспорта, погрузка, разгрузка, монтаж. Рассчитаем стоимость доставки.',
      }
    case 'sale':
      return {
        ...base,
        title: 'Продажа модульных зданий и бытовок в Иркутске | BST HAB',
        description:
          'Продажа модульных конструкций в Иркутске: бытовки, гаражи из сэндвич‑панелей, посты охраны, офисные модули и модульные здания. Собственное производство, доставка и монтаж.',
      }
    case 'sale/standard-modules':
      return { ...base, title: 'Стандартные модули (бытовки) в Иркутске | BST HAB' }
    case 'sale/garages':
      return { ...base, title: 'Гаражи из сэндвич‑панелей в Иркутске | BST HAB' }
    case 'sale/posts':
      return { ...base, title: 'Посты охраны и КПП в Иркутске | BST HAB' }
    case 'sale/large-buildings':
      return { ...base, title: 'Модульные здания под ключ в Иркутске | BST HAB' }
    case 'sale/country-houses':
      return { ...base, title: 'Дачные домики и бани из модулей в Иркутске | BST HAB' }
    case 'sale/business':
      return { ...base, title: 'Модульные офисы и помещения для бизнеса в Иркутске | BST HAB' }
    case 'privacy':
      return { ...base, title: 'Политика конфиденциальности | BST HAB' }
    case 'privacy-policy':
      return { ...base, title: 'Политика использования cookie | BST HAB' }
    default:
      return base
  }
}

export default async function IrkutskCatchAllPage({ params }: Props) {
  const { path: parts } = await params
  const p = parts.join('/')

  if (p === 'about') return <AboutPage city='irkutsk' />
  if (p === 'delivery') return <DeliveryPage city='irkutsk' />
  if (p === 'rent') return <RentPage city='irkutsk' />
  if (p === 'sale') return <SalePage city='irkutsk' />
  if (p === 'privacy') return <PrivacyPage />
  if (p === 'privacy-policy') return <PrivacyPolicyPage />

  // Детальные страницы аренды
  if (parts[0] === 'rent' && parts.length === 2) {
    const moduleId = parts[1]
    if (['container-20ft', 'container-40ft', 'residential', 'security'].includes(moduleId)) {
      return <RentDetailPage moduleId={moduleId} />
    }
  }

  // Детальные страницы продажи
  if (parts[0] === 'sale' && parts.length === 2) {
    const type = parts[1]
    if (type === 'standard-modules') return <SaleStandardModulesPage />
    if (type === 'garages') return <SaleGaragesPage />
    if (type === 'posts') return <SalePostsPage />
    if (type === 'large-buildings') return <SaleLargeBuildingsPage />
    if (type === 'country-houses') return <SaleCountryHousesPage />
    if (type === 'business') return <SaleBusinessPage />
  }

  notFound()
}


