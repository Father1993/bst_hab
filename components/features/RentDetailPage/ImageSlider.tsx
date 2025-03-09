'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageSliderProps {
  images: string[]
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const minSwipeDistance = 50

  // Обработчики для свайпа на мобильных устройствах
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Свайп влево
        handleNext()
      } else {
        // Свайп вправо
        handlePrev()
      }
    }
  }

  // Переход к предыдущему изображению
  const handlePrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }, [images.length])

  // Переход к следующему изображению
  const handleNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }, [images.length])

  // Автоматическая прокрутка слайдера
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [handleNext])

  // Варианты анимации для слайдера
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  }

  return (
    <div className='relative w-full'>
      {/* Основной слайдер */}
      <div
        className='relative aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden'
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className='absolute inset-0'
          >
            <Image
              src={images[currentIndex]}
              alt={`Модульная конструкция ${currentIndex + 1}`}
              fill
              className='object-cover'
              priority={currentIndex === 0}
              quality={90}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </motion.div>
        </AnimatePresence>

        {/* Кнопки управления */}
        <button
          onClick={handlePrev}
          className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10 transition-all duration-300'
          aria-label='Предыдущее изображение'
        >
          <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10 transition-all duration-300'
          aria-label='Следующее изображение'
        >
          <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </button>

        {/* Индикаторы */}
        <div className='absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#FFD700] w-4' : 'bg-white/50'
              }`}
              aria-label={`Перейти к изображению ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Миниатюры */}
      <div className='grid grid-cols-5 gap-2 mt-4 hidden md:grid'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative aspect-[4/3] rounded-md overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
              currentIndex === index
                ? 'border-[#FFD700]'
                : 'border-transparent hover:border-[#FFD700]/50'
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
          >
            <Image
              src={image}
              alt={`Миниатюра ${index + 1}`}
              fill
              className='object-cover'
              sizes='(max-width: 768px) 20vw, 10vw'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
