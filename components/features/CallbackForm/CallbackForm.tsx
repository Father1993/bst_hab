'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { submitForm, validateForm } from '../../../services/formService'
import toast from 'react-hot-toast'

// Тип для данных формы
interface CallbackFormData {
  name: string
  phone: string
  time: string
  privacyConsent: boolean
}

// Тип для ошибок валидации
interface FormErrors {
  name?: string
  phone?: string
  time?: string
  privacyConsent?: string
}

// Типы для пропсов компонента
interface CallbackFormProps {
  isOpen: boolean
  onClose: () => void
}

const CallbackForm = ({ isOpen, onClose }: CallbackFormProps) => {
  // Состояние для данных формы
  const [formData, setFormData] = useState<CallbackFormData>({
    name: '',
    phone: '',
    time: '',
    privacyConsent: false,
  })

  // Обработка ошибок
  const [errors, setErrors] = useState<FormErrors>({})

  // Состояния процесса отправки
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Закрываем модальное окно при нажатии ESC
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEscKey)
      // Блокируем скролл
      document.body.style.overflow = 'hidden'
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey)
      // Разблокируем скролл
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose])

  // Варианты удобного времени для звонка
  const timeOptions = [
    { value: '9-12', label: 'С 9:00 до 12:00' },
    { value: '12-15', label: 'С 12:00 до 15:00' },
    { value: '15-18', label: 'С 15:00 до 18:00' },
    { value: 'asap', label: 'Как можно скорее' },
  ]

  // Обработчик изменения полей формы
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value

    setFormData(prev => ({ ...prev, [name]: val }))

    // Очищаем ошибку при вводе
    if (errors[name as keyof CallbackFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  // Валидация формы
  const validateFormData = () => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Введите ваше имя'
    if (!formData.phone) newErrors.phone = 'Введите номер телефона'
    else if (!/^\+?[0-9]{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Введите корректный номер телефона'
    }
    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'Необходимо дать согласие на обработку персональных данных'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Отправка формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateFormData()) return

    setIsSubmitting(true)

    try {
      // Подготовка данных для отправки через сервис
      const result = await submitForm({
        name: formData.name,
        phone: formData.phone,
        time: formData.time,
        privacyConsent: formData.privacyConsent,
        formType: 'callback', // Указываем тип формы для выбора правильного шаблона
      })

      if (result.success) {
        setIsSuccess(true)
        toast.success('Заявка успешно отправлена!')

        // Сбрасываем форму и закрываем через 2 секунды
        setTimeout(() => {
          setFormData({ name: '', phone: '', time: '', privacyConsent: false })
          setIsSuccess(false)
          onClose()
        }, 2000)
      } else {
        toast.error(result.message || 'Произошла ошибка при отправке')
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error)
      toast.error('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Останавливаем всплытие клика по модальному окну
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25 }}
          className='w-full max-w-md'
          onClick={handleModalClick}
        >
          {/* Карточка формы */}
          <div className='bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden'>
            {/* Заголовок с кнопкой закрытия */}
            <div className='relative p-6 bg-gradient-to-r from-[#FFD700]/10 to-[#FFD700]/5'>
              <button
                onClick={onClose}
                className='absolute top-4 right-4 text-white/70 hover:text-white transition-colors'
                aria-label='Закрыть'
              >
                <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>

              <div className='flex items-center mb-4'>
                <div className='w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mr-4'>
                  <svg
                    className='w-6 h-6 text-black'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-white'>Заказать звонок</h3>
                  <p className='text-zinc-400'>Мы перезвоним в течение 30 минут</p>
                </div>
              </div>

              {/* Преимущества */}
              <div className='grid grid-cols-2 gap-3 mt-6'>
                {[
                  { icon: '⚡', text: 'Быстрый ответ' },
                  { icon: '🔒', text: 'Конфиденциально' },
                  { icon: '👨‍💼', text: 'Личный менеджер' },
                  { icon: '💯', text: 'Точный расчет' },
                ].map((item, index) => (
                  <div key={index} className='flex items-center'>
                    <span className='text-xl mr-2'>{item.icon}</span>
                    <span className='text-sm text-zinc-300'>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Форма */}
            <form onSubmit={handleSubmit} className='p-6 space-y-4'>
              {isSuccess ? (
                <div className='text-center py-6'>
                  <div className='w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-green-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>
                  <h4 className='text-xl font-bold text-white mb-2'>Спасибо за заявку!</h4>
                  <p className='text-zinc-400'>Наш менеджер свяжется с вами в ближайшее время</p>
                </div>
              ) : (
                <>
                  {/* Имя */}
                  <div>
                    <label htmlFor='name' className='block text-sm font-medium text-zinc-400 mb-1'>
                      Ваше имя
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-zinc-800/50 border ${
                        errors.name ? 'border-red-500' : 'border-zinc-700'
                      } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 transition-colors`}
                      placeholder='Иван Иванов'
                    />
                    {errors.name && <p className='mt-1 text-sm text-red-500'>{errors.name}</p>}
                  </div>

                  {/* Телефон */}
                  <div>
                    <label htmlFor='phone' className='block text-sm font-medium text-zinc-400 mb-1'>
                      Номер телефона
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-zinc-800/50 border ${
                        errors.phone ? 'border-red-500' : 'border-zinc-700'
                      } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 transition-colors`}
                      placeholder='+7 (999) 999-99-99'
                    />
                    {errors.phone && <p className='mt-1 text-sm text-red-500'>{errors.phone}</p>}
                  </div>

                  {/* Удобное время */}
                  <div>
                    <label htmlFor='time' className='block text-sm font-medium text-zinc-400 mb-1'>
                      Удобное время для звонка
                    </label>
                    <select
                      id='time'
                      name='time'
                      value={formData.time}
                      onChange={handleChange}
                      className='w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 transition-colors'
                    >
                      <option value=''>Выберите время</option>
                      {timeOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Согласие на обработку персональных данных */}
                  <div className='mt-3'>
                    <div className='flex items-start'>
                      <input
                        type='checkbox'
                        id='privacy-consent-callback'
                        name='privacyConsent'
                        checked={formData.privacyConsent}
                        onChange={handleChange}
                        className='mt-1 h-4 w-4 rounded border-zinc-700 text-[#FFD700] focus:ring-[#FFD700]'
                      />
                      <label
                        htmlFor='privacy-consent-callback'
                        className='ml-2 block text-sm text-zinc-400'
                      >
                        Я даю согласие на обработку моих персональных данных в соответствии с{' '}
                        <Link
                          href='/privacy'
                          className='text-[#FFD700]/80 hover:text-[#FFD700] underline'
                        >
                          политикой конфиденциальности
                        </Link>
                      </label>
                    </div>
                    {errors.privacyConsent && (
                      <p className='mt-1 text-sm text-red-500'>{errors.privacyConsent}</p>
                    )}
                  </div>

                  {/* Кнопка отправки */}
                  <div className='pt-2'>
                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black py-3 px-4 rounded-lg font-semibold hover:from-[#FFD700] hover:to-[#FFD700] transition-all shadow-lg shadow-[#FFD700]/10 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center'
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className='animate-spin -ml-1 mr-2 h-5 w-5 text-black'
                            fill='none'
                            viewBox='0 0 24 24'
                          >
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
                          Отправка...
                        </>
                      ) : (
                        <>Заказать звонок</>
                      )}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CallbackForm
