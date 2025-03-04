'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { COMPANY_INFO, PRODUCT_TYPES } from '../shared/constants'
import { ICONS } from '../shared/icon'
import Link from 'next/link'

type FormData = {
  name: string
  phone: string
  email: string
  projectType: string
  message: string
  privacyConsent: boolean
}

// Тип для ошибок валидации
interface FormErrors {
  name?: string
  phone?: string
  email?: string
  projectType?: string
  message?: string
  privacyConsent?: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
    privacyConsent: false,
  })
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitClicked, setSubmitClicked] = useState(false)

  // Валидация полей
  const validateStep = (currentStep: number) => {
    const newErrors: FormErrors = {}

    if (currentStep === 1) {
      if (!formData.name) newErrors.name = 'Введите ваше имя'
      if (!formData.phone) newErrors.phone = 'Введите номер телефона'
      else if (!/^\+?[0-9]{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
        newErrors.phone = 'Введите корректный номер телефона'
      }
    }

    if (currentStep === 2) {
      if (!formData.projectType) newErrors.projectType = 'Выберите тип проекта'
      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Введите корректный email'
      }
    }

    // Для 3 шага проверяем согласие на обработку персональных данных
    if (currentStep === 3) {
      if (!formData.privacyConsent) {
        newErrors.privacyConsent = 'Необходимо дать согласие на обработку персональных данных'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value

    setFormData(prev => ({ ...prev, [name]: val }))
    // Очищаем ошибку при вводе
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const nextStep = () => {
    if (validateStep(step) && step < 3) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Выходим, если кнопка отправки не была нажата
    if (!submitClicked) return

    // Сбрасываем флаг нажатия кнопки
    setSubmitClicked(false)

    // Проверяем валидацию только текущего шага
    if (!validateStep(step)) return

    // Если мы не на последнем шаге, не отправляем форму
    if (step !== 3) return

    setIsSubmitting(true)
    // Здесь будет логика отправки формы
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: '',
      message: '',
      privacyConsent: false,
    })
    setStep(1)
    setTimeout(() => setIsSuccess(false), 3000)
  }

  return (
    <div className='relative max-w-4xl mx-auto'>
      {/* Карточка формы */}
      <div className='bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-zinc-700/30 shadow-xl'>
        {/* Прогресс бар */}
        <div className='relative h-2 mb-8 bg-zinc-700 rounded-full overflow-hidden'>
          <motion.div
            className='absolute top-0 left-0 h-full bg-gradient-to-r from-[#FFD700] to-[#FFA500]'
            initial={{ width: '33.33%' }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Шаги */}
        <div className='flex justify-between mb-8 relative'>
          {[1, 2, 3].map(num => (
            <div key={num} className={`flex items-center ${num < 3 ? 'flex-1' : ''}`}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                  step >= num ? 'border-[#FFD700] text-[#FFD700]' : 'border-zinc-600 text-zinc-600'
                }`}
              >
                {step > num ? ICONS.check : num}
              </div>
              {num < 3 && (
                <div
                  className={`flex-1 h-px mx-4 transition-colors ${
                    step > num ? 'bg-[#FFD700]' : 'bg-zinc-600'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className='relative'>
          <AnimatePresence mode='wait'>
            {/* Шаг 1: Основная информация */}
            {step === 1 && (
              <motion.div
                key='step1'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className='space-y-6'
              >
                <div className='text-center mb-8'>
                  <h3 className='text-2xl md:text-3xl font-bold text-white mb-2'>
                    Заполните основную информацию
                  </h3>
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-gray-400 mb-2'>Ваше имя</label>
                    <div className='relative'>
                      <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-zinc-900/50 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500' : 'border-zinc-700 focus:border-[#FFD700]'
                        }`}
                        placeholder='Иван Иванов'
                      />
                      {errors.name && (
                        <span className='absolute -bottom-5 left-0 text-red-500 text-sm'>
                          {errors.name}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className='block text-gray-400 mb-2'>Телефон</label>
                    <div className='relative'>
                      <input
                        type='tel'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full bg-zinc-900/50 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-zinc-700 focus:border-[#FFD700]'
                        }`}
                        placeholder='+7 (999) 999-99-99'
                      />
                      {errors.phone && (
                        <span className='absolute -bottom-5 left-0 text-red-500 text-sm'>
                          {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Шаг 2: Тип проекта */}
            {step === 2 && (
              <motion.div
                key='step2'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className='space-y-6'
              >
                <div className='text-center mb-8'>
                  <h3 className='text-2xl md:text-3xl font-bold text-white mb-2'>
                    Выберите тип проекта
                  </h3>
                  <p className='text-gray-400'>Укажите, какой тип конструкции вас интересует</p>
                </div>

                <div className='grid gap-6'>
                  <div className='grid md:grid-cols-2 gap-4'>
                    {PRODUCT_TYPES.map((type, _) => (
                      <div
                        key={type.id}
                        className={`relative rounded-lg border cursor-pointer transition-all ${
                          formData.projectType === type.id
                            ? 'border-[#FFD700] bg-[#FFD700]/10'
                            : 'border-zinc-700 hover:border-[#FFD700]/50'
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, projectType: type.id }))}
                      >
                        <div className='p-4'>
                          <h4 className='text-white font-medium mb-1'>{type.name}</h4>
                          <p className='text-sm text-gray-400'>{type.description}</p>
                        </div>
                        {formData.projectType === type.id && (
                          <div className='absolute top-3 right-3 text-[#FFD700]'>
                            {ICONS['check-circle']}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className='block text-gray-400 mb-2'>
                      Email <span className='text-gray-500'>(необязательно)</span>
                    </label>
                    <div className='relative'>
                      <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-zinc-900/50 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500' : 'border-zinc-700 focus:border-[#FFD700]'
                        }`}
                        placeholder='example@mail.com'
                      />
                      {errors.email && (
                        <span className='absolute -bottom-5 left-0 text-red-500 text-sm'>
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Шаг 3: Дополнительная информация */}
            {step === 3 && (
              <motion.div
                key='step3'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className='space-y-6'
              >
                <div className='text-center mb-8'>
                  <h3 className='text-2xl md:text-3xl font-bold text-white mb-2'>
                    Дополнительная информация
                  </h3>
                  <p className='text-gray-400'>Расскажите подробнее о вашем проекте</p>
                </div>

                <div>
                  <label className='block text-gray-400 mb-2'>
                    Сообщение <span className='text-gray-500'>(необязательно)</span>
                  </label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className='w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFD700] transition-colors'
                    placeholder='Опишите ваш проект, укажите размеры, особые требования или задайте вопрос...'
                  />
                </div>

                {/* Согласие на обработку персональных данных */}
                <div className='relative'>
                  <div className='flex items-start'>
                    <input
                      type='checkbox'
                      id='privacy-consent'
                      name='privacyConsent'
                      checked={formData.privacyConsent}
                      onChange={handleChange}
                      className='mt-1 h-4 w-4 rounded border-zinc-700 text-[#FFD700] focus:ring-[#FFD700]'
                    />
                    <label htmlFor='privacy-consent' className='ml-2 block text-sm text-gray-400'>
                      Я даю согласие на обработку моих персональных данных в соответствии с{' '}
                      <Link
                        href='/privacy'
                        className='text-[#FFD700]/80 hover:text-[#FFD700] underline'
                      >
                        политикой конфиденциальности
                      </Link>
                      . Вы можете отозвать своё согласие, направив запрос на email:{' '}
                      {COMPANY_INFO.email}
                    </label>
                  </div>
                  {errors.privacyConsent && (
                    <span className='block text-red-500 text-sm mt-1'>{errors.privacyConsent}</span>
                  )}
                </div>

                <div className='bg-zinc-900/30 rounded-lg p-4 text-sm text-gray-400'>
                  <p className='flex items-center'>
                    {ICONS.shield}
                    <span className='ml-2'>
                      Мы гарантируем конфиденциальность ваших данных и не передаем их третьим лицам
                    </span>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Кнопки навигации */}
          <div className='flex justify-between mt-8 pt-6 border-t border-zinc-700/30'>
            {step > 1 && (
              <button
                type='button'
                onClick={prevStep}
                className='flex items-center px-6 py-3 text-gray-400 hover:text-white transition-colors'
              >
                <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 19l-7-7 7-7'
                  />
                </svg>
                Назад
              </button>
            )}
            {step < 3 ? (
              <button
                type='button'
                onClick={nextStep}
                className='ml-auto flex items-center px-8 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black rounded-lg font-semibold hover:opacity-90 transition-opacity'
              >
                Далее
                <svg className='w-5 h-5 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </button>
            ) : (
              <button
                type='submit'
                disabled={isSubmitting}
                onClick={() => setSubmitClicked(true)}
                className='ml-auto flex items-center px-8 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className='animate-spin -ml-1 mr-3 h-5 w-5 text-black'
                      xmlns='http://www.w3.org/2000/svg'
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
                  <>
                    Отправить заявку
                    {ICONS.send}
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Уведомление об успешной отправке */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center'
          >
            {ICONS.success}
            <span className='ml-2'>Заявка успешно отправлена!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Контакты */}
      <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-4'>
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className='flex items-center justify-center p-4 bg-zinc-800/30 backdrop-blur-sm rounded-lg hover:bg-zinc-800/50 transition-colors group'
        >
          <div className='text-[#FFD700] group-hover:scale-110 transition-transform'>
            {ICONS.phone}
          </div>
          <span className='ml-3 text-white'>{COMPANY_INFO.phone}</span>
        </a>
        <a
          href={`mailto:${COMPANY_INFO.email}`}
          className='flex items-center justify-center p-4 bg-zinc-800/30 backdrop-blur-sm rounded-lg hover:bg-zinc-800/50 transition-colors group'
        >
          <div className='text-[#FFD700] group-hover:scale-110 transition-transform'>
            {ICONS.email}
          </div>
          <span className='ml-3 text-white'>{COMPANY_INFO.email}</span>
        </a>
        <div className='flex items-center justify-center p-4 bg-zinc-800/30 backdrop-blur-sm rounded-lg'>
          <div className='text-[#FFD700]'>{ICONS.location}</div>
          <span className='ml-3 text-white'>{COMPANY_INFO.address}</span>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
