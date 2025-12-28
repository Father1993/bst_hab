/** @type {import('next').NextConfig} */
const nextConfig = {
  // SSR режим для одного приложения с поддоменами (в Docker/Node)
  // Для Docker удобно: можно включить standalone и собирать один артефакт.
  output: 'standalone',

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
