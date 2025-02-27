'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/catalog'
import catalogData from '@/data/catalog.json'

interface ProductCardProps {
  product: Product
  viewType?: 'catalog' | 'rent'
  onCallbackRequest?: () => void
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  viewType = 'catalog',
  onCallbackRequest,
}) => {
  // Определяем URL в зависимости от типа страницы
  const productUrl = viewType === 'rent' ? `/rent/${product.slug}` : `/catalog/${product.slug}`

  // Обработчик кнопки покупки/аренды
  const handleAction = () => {
    if (onCallbackRequest) {
      // Если передан обработчик, вызываем форму
      onCallbackRequest()
    } else {
      // По умолчанию открываем WhatsApp
      window.location.href = `https://wa.me/${catalogData.metadata.contacts.whatsapp}?text=Здравствуйте! Интересует ${product.name}`
    }
  }

  return (
    <div className='h-full flex flex-col backdrop-blur-sm bg-gray-900/80 border border-gray-800/5 rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] transition-all duration-300 border border-gray-800/50'>
      {/* Изображение с меткой популярности */}
      <div className='relative aspect-video group'>
        <Image
          src={product.images.main}
          alt={product.name}
          fill
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          loading='lazy'
          className='object-cover transition-transform duration-500 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
        {product.isPopular && (
          <div className='absolute top-3 right-3 bg-[#FFD700] text-black px-3 py-1 rounded-full text-xs font-medium shadow-lg'>
            Популярный
          </div>
        )}
      </div>

      {/* Основная информация */}
      <div className='flex flex-col flex-grow p-4 md:p-5'>
        <h3 className='text-lg md:text-xl font-bold text-white mb-2 line-clamp-2'>
          {product.name}
        </h3>
        <p className='text-gray-400 text-xs md:text-sm line-clamp-2 mb-3'>{product.description}</p>

        {/* Характеристики */}
        <div className='grid grid-cols-2 gap-3 mb-3'>
          <div className='flex items-center gap-2'>
            <svg
              className='w-4 h-4 text-[#FFD700] shrink-0'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
              />
            </svg>
            <span className='text-xs md:text-sm text-gray-300'>
              {product.specifications.area.value} {product.specifications.area.units}
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <svg
              className='w-4 h-4 text-[#FFD700] shrink-0'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
            <span className='text-xs md:text-sm text-gray-300'>
              {product.specifications.capacity}
            </span>
          </div>
        </div>

        {/* Ключевые особенности */}
        <div className='mb-3 flex-grow min-h-[30px]'>
          <div className='flex flex-wrap gap-1.5'>
            {product.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className='bg-[#FFD700]/10 text-[#FFD700] px-2 py-0.5 rounded-full text-xs font-medium truncate max-w-full'
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Цена и кнопки */}
        <div className='mt-auto space-y-3'>
          <div className='flex justify-between items-end'>
            <div>
              <p className='text-xs text-gray-400'>
                {viewType === 'rent' ? 'Аренда от' : 'Стоимость'}
              </p>
              <p className='text-xl font-bold text-[#FFD700]'>
                {viewType === 'rent'
                  ? `${product.pricing.rent.monthly.toLocaleString()} ₽`
                  : `${product.pricing.sale.price.toLocaleString()} ₽`}
                {viewType === 'rent' && (
                  <span className='text-xs font-normal text-gray-400'>/мес</span>
                )}
              </p>
            </div>
            {product.availability?.inStock ? (
              <span className='text-green-400 text-xs'>В наличии</span>
            ) : (
              <span className='text-red-400 text-xs'>Под заказ</span>
            )}
          </div>

          <div className='grid grid-cols-2 gap-2'>
            <Link
              href={productUrl}
              className='bg-transparent border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-colors duration-300 text-center py-2 rounded-lg text-xs font-medium'
            >
              Подробнее
            </Link>
            <button
              onClick={handleAction}
              className='bg-[#FFD700] text-black hover:bg-[#FFD700]/90 transition-colors duration-300 py-2 rounded-lg text-xs font-medium'
            >
              {viewType === 'rent' ? 'Арендовать' : 'Купить'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
