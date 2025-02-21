/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Включаем статическую генерацию
  images: {
    unoptimized: true, // Для статической генерации изображений
    domains: ['father1993-bst-hab-11c4.twc1.net'], // Временный домен
  },
  trailingSlash: true, // Добавляем слеш в конце URL для лучшей совместимости
  // Отключаем использование папки .next в продакшене
  distDir: 'out',
  basePath: '', // Базовый путь для всех страниц и ресурсов
  assetPrefix: '', // Префикс для статических ресурсов
  // Добавляем конфигурацию для статических маршрутов
  generateStaticParams: async () => {
    return {
      '/manifest.webmanifest': {
        dynamic: 'force-static',
      },
    }
  },
}

module.exports = nextConfig
