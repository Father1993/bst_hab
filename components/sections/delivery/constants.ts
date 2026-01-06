import { DeliveryType, DeliveryOption, DeliveryAdvantage, PaymentOption } from './types'

export const DELIVERY_TYPES: DeliveryType[] = [
  {
    icon: 'truck',
    title: 'Автомобиль с краном',
    description: 'Для доставки по городу (от 6 000 ₽)',
  },
  {
    icon: 'truck-loading',
    title: 'Полуприцеп',
    description: 'Для перевозки 2-х модулей на дальние расстояния',
  },
  {
    icon: 'train',
    title: 'Железнодорожный транспорт',
    description: 'Для доставки в отдаленные районы',
  },
  {
    icon: 'ship',
    title: 'Речной транспорт',
    description: 'Для доставки в труднодоступные районы в период навигации',
  },
]

export const DELIVERY_OPTIONS: DeliveryOption[] = [
  {
    title: 'Доставка по городу',
    description: 'Автомобилем с краном-манипулятором (воровайка)',
    distance: 'от 6 000 до 8 000 ₽',
    icon: 'city',
  },
  {
    title: 'Доставка по краю',
    description: 'Полуприцепами для перевозки 2-х модулей',
    distance: 'индивидуальный расчет',
    icon: 'map',
  },
]

export const DELIVERY_ADVANTAGES: DeliveryAdvantage[] = [
  {
    icon: 'shield-check',
    title: 'Безопасная погрузка',
    description:
      'Используем специализированную технику и опытных специалистов для безопасной погрузки и разгрузки',
  },
  {
    icon: 'clock',
    title: 'Точно в срок',
    description:
      'Осуществляем доставку точно в оговоренный срок и без задержек, что важно для строительных графиков',
  },
  {
    icon: 'route',
    title: 'Любая точка ДВ',
    description:
      'Доставляем модули в любую точку региона и по России (условия уточняйте у менеджера)',
  },
]

export const PAYMENT_OPTIONS: PaymentOption[] = [
  {
    icon: 'cash',
    title: 'Наличный расчет',
    description: 'Оплата наличными или банковской картой при заключении договора',
  },
  {
    icon: 'bank',
    title: 'Безналичный расчет',
    description:
      'Оплата по счету для юридических лиц с предоставлением всех необходимых документов',
  },
]
