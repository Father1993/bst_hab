export const COMPANY_INFO = {
  name: 'BST HAB',
  foundedYear: 2013,
  phone: '+7 (4212) 25-21-88',
  whatsapp: '79145422188',
  email: '252188dv@mail.ru',
  address: 'ул.Связная, 1Б, Хабаровск',
}

export const COMPANY_STATS = {
  experience: '10+',
  projectsCount: '1000+',
  constructionTypes: '1 день',
  support: '24/7',
  satisfiedClients: '98%',
}

export const COMPANY_FEATURES = [
  {
    icon: 'clock',
    title: '10+ лет опыта',
    description: 'Более 1000 успешно реализованных проектов в Хабаровске и ДВ регионе',
  },
  {
    icon: 'building',
    title: 'Собственное производство',
    description: 'Полный цикл производства, контроль качества на каждом этапе',
  },
  {
    icon: 'lightning',
    title: 'Быстрая доставка',
    description: 'Доставка по Хабаровску и ДВ региону в кратчайшие сроки',
  },
  {
    icon: 'shield-check',
    title: 'Гарантия качества',
    description: 'Используем только сертифицированные материалы и современные технологии',
  },
]

export const PRODUCTION_BENEFITS = [
  {
    icon: 'clock',
    title: 'Быстрое изготовление',
    description: '5-7 дней в зависимости от сложности проекта',
    stat: '7 дней',
  },
  {
    icon: 'currency',
    title: 'Низкая себестоимость',
    description: 'Экономия до 40% по сравнению с капитальным строительством',
    stat: '-40%',
  },
  {
    icon: 'lightning',
    title: 'Минимальные сроки',
    description: 'Быстрый монтаж и ввод в эксплуатацию',
    stat: '1 день',
  },
  {
    icon: 'building',
    title: 'Мобильность',
    description: 'Возможность релокации объекта при необходимости',
    stat: '100%',
  },
]

export const PRODUCT_TYPES = [
  {
    id: 'standard-modules',
    name: 'Стандартные модули',
    description: 'Бытовки, ИТР с душем и туалетом, блок-модули с тамбуром, столовые, бани, сушилки',
    image: '/img/modules/standart.webp',
    images: [
      '/img/modules/standart.webp',
      '/img/modules/standart-2.webp',
      '/img/modules/standart-4.webp',
      '/img/modules/standart-5.webp',
      '/img/modules/standart-6.webp',
    ],
    link: '/sale/standard-modules',
    featured: true,
  },
  {
    id: 'garages',
    name: 'Гаражи из сэндвич панелей',
    description:
      'Надежные и практичные конструкции любых размеров для хранения техники по индивидуальным проектам',
    image: '/img/garaz.webp',
    images: [
      '/img/modules/garage-1.webp',
      '/img/modules/garage/garage-blue-0.webp',
      '/img/modules/garage/garage-blue-1.webp',
      '/img/modules/garage-2.webp',
      '/img/modules/garage-3.webp',
    ],
    link: '/sale/garages',
  },
  {
    id: 'posts',
    name: 'Посты охраны и КПП',
    description:
      'Комфортные и функциональные решения для обеспечения безопасности объектов с панорамным остеклением',
    image: '/img/security.webp',
    images: [
      '/img/modules/sec/sec-1.webp',
      '/img/modules/sec/sec-3.webp',
      '/img/modules/sec-2.webp',
      '/img/modules/sec-1.webp',
      '/img/modules/sec-3.webp',
      '/img/modules/sec-4.webp',
    ],
    link: '/sale/posts',
  },
  {
    id: 'large-buildings',
    name: 'Модульные здания',
    description:
      'Общежития, столовые и другие крупные объекты из модульных конструкций, включая двухэтажные здания',
    image: '/img/spec-const.webp',
    images: [
      '/img/modules/module-3.webp',
      '/img/modules/module-2.webp',
      '/img/modules/module-1.webp',
    ],
    link: '/sale/large-buildings',
  },
  {
    id: 'country-houses',
    name: 'Дачные домики',
    description:
      'Современные и комфортные решения для загородного отдыха и проживания с качественной теплоизоляцией',
    image: '/img/country-house.webp',
    images: ['/img/modules/dacha.webp', '/img/modules/dacha-2.webp'],
    link: '/sale/country-houses',
  },
  {
    id: 'business',
    name: 'Помещения для бизнеса',
    description:
      'Модульные офисы и коммерческие пространства для вашего бизнеса с современным дизайном и отделкой',
    image: '/img/business.webp',
    images: ['/img/modules/offiece-module-1.webp', '/img/modules/office-module-2.webp'],
    link: '/sale/business',
  },
]

export const WORK_PROCESS = [
  {
    icon: 'chat',
    title: 'Консультация',
    description:
      'Обсуждаем ваши потребности, бюджет и сроки. Предлагаем оптимальные решения и варианты комплектации.',
  },
  {
    icon: 'check-circle',
    title: 'Проектирование',
    description: 'Разрабатываем техническую документацию, согласовываем планировку и комплектацию.',
  },
  {
    icon: 'cube',
    title: 'Производство',
    description:
      'Изготавливаем модули на собственном производстве с контролем качества на каждом этапе.',
  },
  {
    icon: 'check',
    title: 'Монтаж',
    description: 'Доставляем и устанавливаем модули на объекте. Проводим пусконаладочные работы.',
  },
]

export const COMPANY_HISTORY = [
  {
    year: '2013',
    title: 'Начало пути',
    description:
      'Открытие производства каркасных бытовок в Хабаровске. Первые заказы и формирование команды профессионалов.',
  },
  {
    year: '2015',
    title: 'Расширение ассортимента',
    description:
      'Запуск производства модулей из сэндвич-панелей. Начало работы с морскими контейнерами и их переоборудованием.',
  },
  {
    year: '2018',
    title: 'Развитие технологий',
    description:
      'Внедрение новых технологий производства. Разработка линейки дачных домиков и модульных конструкций по индивидуальным заказам.',
  },
  {
    year: '2020',
    title: 'Оптимизация процессов',
    description:
      'Улучшение технологии производства. Сокращение сроков изготовления без потери качества. Расширение географии поставок.',
  },
  {
    year: '2023',
    title: 'Уверенный рост',
    description:
      'Более 1000 реализованных проектов. Производство бытовок и модульных конструкций любой сложности для частных и корпоративных клиентов.',
  },
]

export const PRODUCTION_CAPABILITIES = [
  'Каркасные бытовки',
  'Дачные домики',
  'Модули из сэндвич-панелей',
  'Переоборудование контейнеров',
  'Строительные бытовки',
  'Модульные конструкции',
]

export const TRUST_INDICATORS = [
  { image: '/img/gaz.png', alt: 'Партнер 1' },
  { image: '/img/nnk.jpg', alt: 'Партнер 2' },
  { image: '/img/garant.png', alt: 'Партнер 3' },
]

export const FAQ_ITEMS = [
  {
    question: 'Все модули только 6-метровые? 8-метровые есть?',
    answer:
      'Для арендного направления используются стандартные стационарные модули (на раме) с размерами 6,25*2,4 м, которые можно стыковать между собой, формируя здания различной планировки. Для приобретения Вы можете выбрать размерную сетку: длина от 2,5 до 9 метров, ширина от 2,44 до 3,0 метров.',
  },
  {
    question: 'В чем отличие нашей продукции?',
    answer:
      'На рынке существуют модули различного исполнения, наиболее экономичные из которых — цельно-сварные модули (ЦСМ). Наша компания более 10 лет назад начинала именно с изготовления ЦСМ, но, в процессе развития рынка, мы отказались от этого решения из-за большого количества ограничений: невозможность релокации, высокие затраты на логистику, отсутствие узлового ремонта, невозможность соединение модулей в общее пространство и т.д. При производстве сборно-разборных модулей используются другие узлы и элементы, которые позволяют уйти от ограничений ЦСМ. Колоссальным преимуществом наших сборно-разборных модулей является их значительно меньший вес по сравнению с ЦСМ, что обеспечивает удобную и экономичную транспортировку, возможность доставки в труднодоступные места и существенное снижение затрат на логистику.',
  },
  {
    question: 'Можно ли установить дополнительные окна, розетки?',
    answer:
      'Да, в некоторых случаях данное решение можно предоставить без увеличения цены. За подробной информацией обратитесь к менеджеру.',
  },
  {
    question: 'Есть ли лизинг, рассрочка?',
    answer:
      'Есть возможность аренды с последующим выкупом. В случае приобретения модулей – рассрочка оплаты обсуждается индивидуально. Так-же возможна продажа в лизинг!',
  },
  {
    question: 'Какая толщина и вид утеплителя используется?',
    answer:
      'Толщина пола и потолка — от 100 мм до 200 мм (выдерживают температуру до -30 и до -55°C соответственно). Толщина стены 100 до 200 мм. Утеплитель - пенополистирол (ПСБ) или базальтовая вата.',
  },
]

export const COMPLETED_PROJECTS = [
  {
    id: 1,
    category: 'bytovki',
    title: 'Комплекс для строителей',
    description: 'Модульный городок на 30 человек',
    location: 'Хабаровский край',
    stats: { area: '250 м²', time: '30 дней', modules: '20' },
    image: '/img/projects/stroy.webp',
  },
  {
    id: 2,
    category: 'garages',
    title: 'Автосервис-гараж из из сэндвич панелей',
    description: 'Быстровозводимый гараж на 2 авто',
    location: 'Хабаровск',
    stats: { area: '60 м²', time: '10 дней', modules: '4' },
    image: '/img/projects/garage.webp',
  },
  {
    id: 3,
    category: 'posts',
    title: 'Баня',
    description: 'Полноценная баня с доставкой',
    location: 'Хабаровск',
    stats: { area: '14.6 м²', time: '3 дня', modules: '6' },
    image: '/img/projects/bana.webp',
  },
  {
    id: 4,
    category: 'modules',
    title: 'Фельдшерско-акушерский пункт',
    description: 'Современный ФАП',
    location: 'Хабаровский край',
    stats: { area: '14.6 м²', time: '5 дней', modules: '1' },
    image: '/img/projects/modules-bst-hab-2.webp',
  },
]

export const PROJECT_CATEGORIES = [
  { id: 'all', name: 'Все проекты' },
  { id: 'modules', name: 'Модульные здания' },
  { id: 'garages', name: 'Гаражи' },
  { id: 'posts', name: 'Посты охраны' },
]
