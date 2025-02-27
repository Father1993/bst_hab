import type { MetadataRoute } from 'next'

// Настройка для статического экспорта
export const dynamic = 'force-static'

// Базовый URL сайта (должен совпадать с URL в sitemap.ts)
const BASE_URL = 'https://bst-hab.ru'

export default function robots(): MetadataRoute.Robots {
  return {
    // Основные правила для всех поисковых роботов
    rules: {
      userAgent: '*',
      allow: '/',
      // Закрываем от индексации административные и тестовые разделы,
      // если они существуют или планируются в будущем
      disallow: ['/admin/', '/api/', '/test/', '/dev/'],
    },
    // Ссылка на карту сайта
    sitemap: `${BASE_URL}/sitemap.xml`,
    // Указываем основной хост (каноническое имя домена)
    host: BASE_URL,
  }
}
