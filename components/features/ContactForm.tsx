'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PRODUCT_TYPES, COMPANY_INFO } from '../shared/constants'
import { ICONS } from '../shared/icon'
import Link from 'next/link'
import { submitForm } from '@/services/formService'
import toast from 'react-hot-toast'

type FormData = {
  name: string
  phone: string
  email: string
  projectType: string
  message: string
  privacyConsent: boolean
}

type FormErrors = Partial<Record<keyof FormData, string>>

interface ContactFormProps {
  city?: 'khabarovsk' | 'irkutsk'
  metrikaGoalId?: string // ID цели в Яндекс.Метрике
}

const ContactForm = ({ city = 'khabarovsk', metrikaGoalId }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
    privacyConsent: false,
  })

  // Определяем город для заголовка формы
  const cityLabel = city === 'irkutsk' ? 'Иркутск' : 'Хабаровск'
  const formId = city === 'irkutsk' ? 'contact-form-irkutsk' : 'contact-form-khabarovsk'

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    setFormData(prev => ({ ...prev, [name]: val }))
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Введите ваше имя'
    if (!formData.phone.trim()) newErrors.phone = 'Введите номер телефона'
    else if (!/^\+?[0-9]{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Введите корректный номер телефона'
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введите корректный email'
    }
    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'Необходимо дать согласие'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    try {
      const selectedProject = PRODUCT_TYPES.find(type => type.id === formData.projectType)
      const projectTypeName = selectedProject ? selectedProject.name : formData.projectType

      const result = await submitForm({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        formType: 'contact',
        privacyConsent: formData.privacyConsent,
        projectType: projectTypeName,
        city: cityLabel, // Добавляем город в заявку
      })

      if (result.success) {
        toast.success('Заявка успешно отправлена!')
        setFormData({
          name: '',
          phone: '',
          email: '',
          projectType: '',
          message: '',
          privacyConsent: false,
        })
      } else {
        toast.error(result.message || 'Произошла ошибка при отправке')
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error)
      toast.error('Произошла ошибка. Пожалуйста, попробуйте позже.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className='relative max-w-4xl mx-auto' aria-labelledby='contact-form-title'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='bg-zinc-900/60 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-zinc-800/50 shadow-2xl'
      >
        {city === 'irkutsk' && (
          <div className='mb-6 text-center'>
            <span className='inline-block bg-[#FFD700]/10 text-[#FFD700] px-4 py-2 rounded-full text-sm font-medium'>
              Заявка из {cityLabel}
            </span>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className='space-y-6' noValidate>
          <div className='grid md:grid-cols-2 gap-6'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-zinc-300 mb-2'>
                Ваше имя <span className='text-[#FFD700]'>*</span>
              </label>
              <input
                id='name'
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                aria-required='true'
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`w-full bg-zinc-800/50 border rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none transition-all ${
                  errors.name
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-zinc-700 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20'
                }`}
                placeholder='Иван Иванов'
              />
              {errors.name && (
                <p id='name-error' className='mt-1 text-sm text-red-400' role='alert'>
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor='phone' className='block text-sm font-medium text-zinc-300 mb-2'>
                Телефон <span className='text-[#FFD700]'>*</span>
              </label>
              <input
                id='phone'
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                required
                aria-required='true'
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                className={`w-full bg-zinc-800/50 border rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none transition-all ${
                  errors.phone
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-zinc-700 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20'
                }`}
                placeholder='+7 (999) 999-99-99'
              />
              {errors.phone && (
                <p id='phone-error' className='mt-1 text-sm text-red-400' role='alert'>
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor='email' className='block text-sm font-medium text-zinc-300 mb-2'>
              Email <span className='text-zinc-500 text-xs'>(необязательно)</span>
            </label>
            <input
              id='email'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`w-full bg-zinc-800/50 border rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none transition-all ${
                errors.email
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-zinc-700 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20'
              }`}
              placeholder='example@mail.com'
            />
            {errors.email && (
              <p id='email-error' className='mt-1 text-sm text-red-400' role='alert'>
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor='projectType' className='block text-sm font-medium text-zinc-300 mb-2'>
              Тип проекта
            </label>
            <select
              id='projectType'
              name='projectType'
              value={formData.projectType}
              onChange={handleChange}
              className='w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 transition-all'
            >
              <option value=''>Выберите тип проекта</option>
              {PRODUCT_TYPES.map(type => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor='message' className='block text-sm font-medium text-zinc-300 mb-2'>
              Сообщение <span className='text-zinc-500 text-xs'>(необязательно)</span>
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className='w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 transition-all resize-none'
              placeholder='Опишите ваш проект, укажите размеры или задайте вопрос...'
            />
          </div>

          <div>
            <div className='flex items-start'>
              <input
                id='privacy-consent'
                type='checkbox'
                name='privacyConsent'
                checked={formData.privacyConsent}
                onChange={handleChange}
                required
                aria-required='true'
                aria-invalid={!!errors.privacyConsent}
                className='mt-1 h-5 w-5 rounded border-zinc-700 bg-zinc-800 text-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 cursor-pointer'
              />
              <label
                htmlFor='privacy-consent'
                className='ml-3 text-sm text-zinc-400 leading-relaxed'
              >
                Я даю согласие на обработку персональных данных в соответствии с{' '}
                <Link
                  href='/privacy'
                  className='text-[#FFD700] hover:text-[#FFD700]/80 underline transition-colors'
                >
                  политикой конфиденциальности
                </Link>
                <span className='text-[#FFD700]'> *</span>
              </label>
            </div>
            {errors.privacyConsent && (
              <p className='mt-2 text-sm text-red-400' role='alert'>
                {errors.privacyConsent}
              </p>
            )}
          </div>

          <motion.button
            type='submit'
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className='w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-[#FFD700]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
          >
            {isSubmitting ? (
              <>
                <svg
                  className='animate-spin h-5 w-5'
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
                  />
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  />
                </svg>
                <span>Отправка...</span>
              </>
            ) : (
              <>
                <span>Отправить заявку</span>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                  />
                </svg>
              </>
            )}
          </motion.button>
        </form>

        <div className='mt-8 pt-8 border-t border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-4'>
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className='flex items-center justify-center p-4 bg-zinc-800/30 rounded-xl hover:bg-zinc-800/50 transition-colors group'
            aria-label={`Позвонить по телефону ${COMPANY_INFO.phone}`}
          >
            <div className='text-[#FFD700] group-hover:scale-110 transition-transform'>
              {ICONS.phone}
            </div>
            <span className='ml-3 text-white'>{COMPANY_INFO.phone}</span>
          </a>
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className='flex items-center justify-center p-4 bg-zinc-800/30 rounded-xl hover:bg-zinc-800/50 transition-colors group'
            aria-label={`Написать на email ${COMPANY_INFO.email}`}
          >
            <div className='text-[#FFD700] group-hover:scale-110 transition-transform'>
              {ICONS.email}
            </div>
            <span className='ml-3 text-white'>{COMPANY_INFO.email}</span>
          </a>
          <div className='flex items-center justify-center p-4 bg-zinc-800/30 rounded-xl'>
            <div className='text-[#FFD700]'>{ICONS.location}</div>
            <span className='ml-3 text-white'>{COMPANY_INFO.address}</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactForm
