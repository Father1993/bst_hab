'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Product } from '@/types/catalog'

interface ProductCardProps {
  product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className='bg-black/90 rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] transition-all duration-300'
    >
      {/* Изображение с меткой популярности */}
      <div className='relative aspect-[4/3] group'>
        <Image
          src={product.images.main}
          alt={product.name}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
        {product.isPopular && (
          <div className='absolute top-4 right-4 bg-[#FFD700] text-black px-4 py-1 rounded-full text-sm font-medium shadow-lg'>
            Популярный
          </div>
        )}
      </div>

      {/* Основная информация */}
      <div className='p-6 border-t border-[#FFD700]/10'>
        <h3 className='text-xl font-bold text-white mb-2'>{product.name}</h3>
        <p className='text-gray-400 text-sm line-clamp-2 mb-4'>{product.description}</p>

        {/* Характеристики */}
        <div className='grid grid-cols-2 gap-4 mb-6'>
          <div className='flex items-center gap-2'>
            <svg
              className='w-5 h-5 text-[#FFD700]'
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
            <span className='text-sm text-gray-300'>
              {product.specifications.area.value} {product.specifications.area.units}
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <svg
              className='w-5 h-5 text-[#FFD700]'
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
            <span className='text-sm text-gray-300'>{product.specifications.capacity}</span>
          </div>
        </div>

        {/* Ключевые особенности */}
        <div className='mb-6'>
          <div className='flex flex-wrap gap-2'>
            {product.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className='bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-xs font-medium'
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Цена и кнопки */}
        <div className='space-y-4'>
          <div className='flex justify-between items-end'>
            <div>
              <p className='text-sm text-gray-400'>Аренда от</p>
              <p className='text-2xl font-bold text-[#FFD700]'>
                {product.pricing.rent.monthly.toLocaleString()} ₽
                <span className='text-sm font-normal text-gray-400'>/мес</span>
              </p>
            </div>
            {product.inStock ? (
              <span className='text-green-400 text-sm'>В наличии</span>
            ) : (
              <span className='text-red-400 text-sm'>Под заказ</span>
            )}
          </div>

          <div className='grid grid-cols-2 gap-3'>
            <Link
              href={`/catalog/${product.slug}`}
              className='bg-transparent border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-colors duration-300 text-center py-2 rounded-lg text-sm font-medium'
            >
              Подробнее
            </Link>
            <button
              onClick={() =>
                (window.location.href = `https://wa.me/+79141234567?text=Здравствуйте! Интересует ${product.name}`)
              }
              className='bg-[#FFD700] text-black hover:bg-[#FFD700]/90 transition-colors duration-300 py-2 rounded-lg text-sm font-medium'
            >
              Арендовать
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
