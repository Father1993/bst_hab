import { MetadataRoute } from 'next'

// Настройка для статического экспорта
export const dynamic = 'force-static'

// Базовый URL сайта
const BASE_URL = 'https://bst-hab.ru'

export default function sitemap(): MetadataRoute.Sitemap {
  // Текущая дата для lastModified
  const currentDate = new Date().toISOString()

  // Массив для хранения всех URL сайта
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Добавляем главную страницу
  sitemapEntries.push({
    url: BASE_URL,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 1.0,
  })

  // Добавляем страницу каталога
  // sitemapEntries.push({
  //   url: `${BASE_URL}/catalog`,
  //   lastModified: currentDate,
  //   changeFrequency: 'weekly',
  //   priority: 0.9,
  // })

  // Добавляем страницы каждого продукта в каталоге
  // for (const category of catalogData.categories) {
  //   for (const item of category.items) {
  //     // Добавляем только те товары, которые доступны для продажи
  //     if (item.availability?.forSale !== false) {
  //       sitemapEntries.push({
  //         url: `${BASE_URL}/catalog/${item.slug}`,
  //         lastModified: currentDate,
  //         changeFrequency: 'monthly',
  //         priority: 0.8,
  //         // Добавляем изображения как строки URL
  //         images: [
  //           `${BASE_URL}${item.images.main}`,
  //           // Добавляем галерею изображений
  //           ...item.images.gallery.map(img => `${BASE_URL}${img}`),
  //         ],
  //       })
  //     }
  //   }
  // }

  // Добавляем страницу аренды
  sitemapEntries.push({
    url: `${BASE_URL}/rent`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  })

  // Добавляем другие статические страницы сайта
  const staticPages = [
    { path: '/about', priority: 0.7 },
    { path: '/contacts', priority: 0.7 },
    { path: '/delivery', priority: 0.6 },
    { path: '/privacy', priority: 0.5 },
  ]

  for (const page of staticPages) {
    sitemapEntries.push({
      url: `${BASE_URL}${page.path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: page.priority,
    })
  }

  return sitemapEntries
}
