/** @type {import('next').NextConfig} */
const nextConfig = {
  // Статический экспорт для хостинга
  output: 'export',
  distDir: 'out',
  
  images: {
    unoptimized: true, // Требуется для static export
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
