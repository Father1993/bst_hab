import { DeliveryType, DeliveryOption, DeliveryAdvantage, PaymentOption } from './types'

export const DELIVERY_TYPES: DeliveryType[] = [
  {
    icon: 'train',
    title: 'Железнодорожный транспорт',
    description: 'Оптимально для дальних расстояний',
  },
  {
    icon: 'truck',
    title: 'Автотранспорт',
    description: 'Для доставки в любую точку',
  },
  {
    icon: 'ship',
    title: 'Речной транспорт',
    description: 'Доставка в труднодоступные районы',
  },
  {
    icon: 'plane',
    title: 'Авиатранспорт',
    description: 'Для срочных перевозок',
  },
]

export const DELIVERY_OPTIONS: DeliveryOption[] = [
  {
    title: 'В собранном виде',
    description: 'На открытой платформе',
    distance: 'удаление до 500 км',
    icon: 'cube',
  },
  {
    title: 'В разобранном виде',
    description: 'В защищенных транспаках',
    distance: 'удаление более 500 км',
    icon: 'box',
  },
]

export const DELIVERY_ADVANTAGES: DeliveryAdvantage[] = [
  {
    icon: 'route',
    title: 'Удобная логистика',
    description: 'Вы можете выбрать подходящий для вас вариант доставки',
  },
  {
    icon: 'clock',
    title: 'Доставим в срок',
    description: 'Осуществим доставку точно в оговоренный срок и без задержек',
  },
  {
    icon: 'globe',
    title: 'Доставим в любую точку',
    description: 'Мы осуществляем доставку по всей территории России и стран СНГ',
  },
]

export const PAYMENT_OPTIONS: PaymentOption[] = [
  {
    icon: 'cash',
    title: 'Наличными',
    description: 'Или банковской картой',
  },
  {
    icon: 'bank',
    title: 'Банковский перевод',
    description: 'По реквизитам организации (для юридических лиц)',
  },
]
