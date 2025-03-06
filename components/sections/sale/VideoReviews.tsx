'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

// Компонент видеоплеера, загружаемый только на клиенте
const VideoPlayer = dynamic(() => import('../../ui/VideoPlayer'), {
  ssr: false,
  loading: () => (
    <div className='aspect-[9/16] bg-zinc-800 rounded-xl overflow-hidden flex items-center justify-center'>
      <div className='animate-pulse'>
        <svg className='w-12 h-12 text-zinc-600' fill='none' viewBox='0 0 24 24'>
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          ></circle>
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          ></path>
        </svg>
      </div>
    </div>
  ),
})

// Массив с видеообзорами
const videoReviews = [
  {
    id: 1,
    title: 'Обзор модульного офиса',
    description: 'Просторный офисный модуль с современной отделкой и всеми коммуникациями',
    thumbnail: '/videos/1.webp',
    videoUrl: '/videos/obzor-bst-hab.mp4',
  },
  {
    id: 2,
    title: 'Модуль жилой с санузлом',
    description: 'Комфортное жилье для людей с санузлом',
    thumbnail: '/videos/2.webp',
    videoUrl: '/videos/obzor-bst-hab-2.mp4',
  },
  {
    id: 3,
    title: 'Стандартный модуль с тамбуром',
    description: 'Оснащен кондиционером',
    thumbnail: '/videos/3.webp',
    videoUrl: '/videos/obzor-bst-hab-3.mp4',
  },
]

const VideoReviews = () => {
  const [activeVideo, setActiveVideo] = useState(videoReviews[0])
  const [isMounted, setIsMounted] = useState(false)
  const [_, setActiveVideoIndex] = useState(0)

  // Устанавливаем флаг монтирования компонента только на клиенте
  useEffect(() => {
    setIsMounted(true)
    // Очистка при размонтировании
    return () => {
      setIsMounted(false)
    }
  }, [])

  // Обработчик выбора видео
  const handleSelectVideo = (video: (typeof videoReviews)[0]) => {
    if (video.id !== activeVideo.id) {
      setActiveVideo(video)
      setActiveVideoIndex(videoReviews.findIndex(v => v.id === video.id))
    }
  }

  return (
    <section className='py-20 bg-black relative overflow-hidden'>
      {/* Фоновые элементы */}
      <div className='absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-20' />
      <div className='absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black' />

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Видеообзоры <span className='text-[#FFD700]'>наших модулей</span>
          </h2>
          <p className='text-zinc-400 max-w-2xl mx-auto'>
            Посмотрите, как выглядят наши модульные здания изнутри. Качественная отделка,
            продуманная планировка и комфортные условия для работы и отдыха.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          {/* Основное видео */}
          <div className='lg:col-span-5 lg:col-start-4'>
            {isMounted ? (
              <VideoPlayer videoUrl={activeVideo.videoUrl} thumbnailUrl={activeVideo.thumbnail} />
            ) : (
              <div className='max-w-[400px] mx-auto'>
                <div className='aspect-[9/16] bg-zinc-800 rounded-xl overflow-hidden flex items-center justify-center'>
                  <img
                    src={activeVideo.thumbnail}
                    alt={activeVideo.title}
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            )}
            <div className='mt-4 max-w-[400px] mx-auto text-center'>
              <h3 className='text-xl font-semibold text-white'>{activeVideo.title}</h3>
              <p className='text-zinc-400 mt-2'>{activeVideo.description}</p>
            </div>
          </div>

          {/* Список видео */}
          <div className='lg:col-span-3 lg:col-start-9'>
            <h3 className='text-lg font-medium text-white mb-4'>Другие видеообзоры</h3>
            <div className='space-y-4'>
              {videoReviews.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => handleSelectVideo(video)}
                  className={`flex gap-4 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeVideo.id === video.id
                      ? 'bg-zinc-800 border-l-4 border-[#FFD700]'
                      : 'hover:bg-zinc-900'
                  }`}
                >
                  <div className='w-16 h-28 flex-shrink-0 rounded-md overflow-hidden relative'>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className='w-full h-full object-cover'
                    />
                    {activeVideo.id !== video.id && (
                      <div className='absolute inset-0 flex items-center justify-center bg-black/30'>
                        <div className='w-8 h-8 bg-[#FFD700]/80 rounded-full flex items-center justify-center'>
                          <svg
                            className='w-4 h-4 text-black'
                            fill='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path d='M8 5v14l11-7z' />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className='text-white font-medium'>{video.title}</h4>
                    <p className='text-zinc-500 text-sm line-clamp-2'>{video.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoReviews
