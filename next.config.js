/** @type {import('next').NextConfig} */
const nextConfig = {
  // SSR включён (убрали output: 'export' для работы middleware и динамического контента)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bst-hab.ru',
      },
      {
        protocol: 'https',
        hostname: 'irkutsk.bst-hab.ru',
      },
    ],
    formats: ['image/webp'],
  },
  
  // Оптимизация для продакшена
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  // Настройка webpack для оптимизации
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.minimize = true
    }
    return config
  },
}

module.exports = nextConfig
