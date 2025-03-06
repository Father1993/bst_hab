'use client'

import { useState } from 'react'

interface VideoPlayerProps {
  videoUrl: string
  thumbnailUrl: string
  onPlayStateChange?: (isPlaying: boolean) => void
}

const VideoPlayer = ({ videoUrl, thumbnailUrl, onPlayStateChange }: VideoPlayerProps) => {
  const [showControls, setShowControls] = useState(false)

  // Простой обработчик для отображения стандартных элементов управления
  const handlePlay = () => {
    setShowControls(true)
    onPlayStateChange?.(true)
  }

  return (
    <div className='max-w-[400px] mx-auto'>
      <div className='aspect-[9/16] relative bg-zinc-800 rounded-xl overflow-hidden'>
        <video
          src={videoUrl}
          poster={thumbnailUrl}
          className='w-full h-full object-cover'
          controls={showControls}
          preload='metadata'
          playsInline
          onPlay={handlePlay}
          onPause={() => onPlayStateChange?.(false)}
          onEnded={() => onPlayStateChange?.(false)}
        />

        {!showControls && (
          <div
            className='absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-all duration-300 cursor-pointer'
            onClick={() => {
              setShowControls(true)
              const videoElement = document.querySelector('video') as HTMLVideoElement
              if (videoElement) {
                videoElement.controls = true
                videoElement.play()
              }
            }}
          >
            <div className='w-16 h-16 md:w-20 md:h-20 bg-[#FFD700]/90 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110'>
              <svg
                className='w-6 h-6 md:w-8 md:h-8 text-black'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M8 5v14l11-7z' />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoPlayer
