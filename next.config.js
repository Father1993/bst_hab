/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Статическая генерация
  images: {
    unoptimized: true, // Для статической генерации
    domains: ['bst-hab.ru', 'localhost'], // Разрешенные домены
    formats: ['image/webp'], // Поддерживаемые форматы
  },
  trailingSlash: true, // Слеш в конце URL
  distDir: 'out',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',

  // Оптимизация для продакшена
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  // Настройка webpack для оптимизации
  webpack: (config, { dev, isServer }) => {
    // Оптимизация только для продакшена
    if (!dev && !isServer) {
      config.optimization.minimize = true
    }
    return config
  },
}

module.exports = nextConfig
