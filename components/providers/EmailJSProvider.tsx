'use client'

import { useEffect } from 'react'
import { initEmailJS } from '@/services/formService'
import { Toaster } from 'react-hot-toast'

interface EmailJSProviderProps {
  children: React.ReactNode
}

/**
 * Провайдер для инициализации EmailJS и добавления Toaster для уведомлений
 */
const EmailJSProvider = ({ children }: EmailJSProviderProps) => {
  useEffect(() => {
    // Инициализируем EmailJS при монтировании компонента
    initEmailJS()
  }, [])

  return (
    <>
      {children}
      <Toaster
        position='top-right'
        toastOptions={{
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
            borderRadius: '8px',
          },
          success: {
            iconTheme: {
              primary: '#FFD700',
              secondary: '#000',
            },
          },
          error: {
            iconTheme: {
              primary: '#ff4b4b',
              secondary: '#fff',
            },
          },
        }}
      />
    </>
  )
}

export default EmailJSProvider
