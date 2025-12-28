import emailjs from '@emailjs/browser'
import { reachMetrikaGoal } from '@/components/shared/metrika'

// Типы данных для форм
export interface BaseFormData {
  name: string
  phone: string
  email?: string
  message?: string
  formType: string // тип формы: 'callback', 'contact', 'delivery', etc.
  time?: string // для формы обратного звонка
  privacyConsent?: boolean
  projectType?: string // для формы контакта
  city?: string // город (Хабаровск, Иркутск) для различия заявок
}

// Конфигурация для формы
export interface FormConfig {
  subject: string
  recipients: string[]
  template: string
  templateId: string // ID шаблона в EmailJS
  replyTo?: string
}

// Конфигурация EmailJS
const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'default_service',
  userId: process.env.NEXT_PUBLIC_EMAILJS_USER_ID || 'default_user',
}

const detectCityName = (raw?: string): 'Хабаровск' | 'Иркутск' => {
  const v = (raw || '').toLowerCase()
  if (v.includes('иркут') || v === 'irkutsk') return 'Иркутск'
  if (v.includes('хабар') || v === 'khabarovsk') return 'Хабаровск'

  if (typeof window !== 'undefined') {
    const host = window.location.hostname.replace(/^www\./, '').toLowerCase()
    if (host.startsWith('irkutsk.')) return 'Иркутск'
  }

  return 'Хабаровск'
}

// Функция для получения конфигурации с учетом города
const getFormConfig = (formType: string, city?: string): FormConfig => {
  const cityPrefix = city === 'Иркутск' ? '[Иркутск] ' : ''
  
  const configs: Record<string, FormConfig> = {
    callback: {
      subject: `${cityPrefix}Заявка на обратный звонок с сайта BST HAB`,
      recipients: ['252188dv@mail.ru'],
      template: 'callback',
      templateId: process.env.NEXT_PUBLIC_EMAILJS_CALLBACK_TEMPLATE_ID || 'template_callback',
    },
    contact: {
      subject: `${cityPrefix}Новая заявка с сайта BST HAB`,
      recipients: ['252188dv@mail.ru'],
      template: 'contact',
      templateId: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || 'template_contact',
    },
    delivery: {
      subject: `${cityPrefix}Запрос на доставку BST HAB`,
      recipients: ['252188dv@mail.ru'],
      template: 'delivery',
      templateId: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || 'template_contact',
    },
  }
  
  return configs[formType]
}

/**
 * Инициализация EmailJS
 * Вызывается один раз при загрузке приложения
 */
export function initEmailJS(): void {
  if (typeof window !== 'undefined') {
    emailjs.init(EMAILJS_CONFIG.userId)
  }
}

/**
 * Отправка данных формы через EmailJS
 * Единая точка входа для всех форм
 */
export async function submitForm(
  data: BaseFormData
): Promise<{ success: boolean; message: string }> {
  try {
    // Получаем конфигурацию для данного типа формы с учетом города
    const cityName = detectCityName(data.city)
    const config = getFormConfig(data.formType, cityName)
    
    if (!config) {
      throw new Error(`Неизвестный тип формы: ${data.formType}`)
    }

    const userMessage = (data.message || '').trim()
    const messageWithCity = `Город: ${cityName}${userMessage ? `\n\n${userMessage}` : ''}`

    const pageUrl = typeof window !== 'undefined' ? window.location.href : ''
    const pagePath = typeof window !== 'undefined' ? window.location.pathname : ''
    const host = typeof window !== 'undefined' ? window.location.hostname : ''

    // Подготовка данных для отправки
    const templateParams = {
      to_email: config.recipients.join(', '),
      from_name: data.name,
      reply_to: data.email || '',
      email: data.email || '',
      subject: config.subject,
      message: messageWithCity,
      phone_number: data.phone,
      preferred_time: data.time || 'Не указано',
      project_type: data.projectType || 'Не указано',
      form_type: data.formType,
      city: cityName, // Город для различия заявок (Хабаровск или Иркутск)
      page_url: pageUrl,
      page_path: pagePath,
      host,
    }

    // Отправка через EmailJS
    const response = await emailjs.send(EMAILJS_CONFIG.serviceId, config.templateId, templateParams)

    console.log('EmailJS успешно отправил форму:', response)

    // Цели Метрики (минимально, но чтобы отличать формы)
    // Можно создать цели вида: form_submit_contact_khabarovsk, form_submit_callback_irkutsk и т.д.
    const cityKey = cityName === 'Иркутск' ? 'irkutsk' : 'khabarovsk'
    reachMetrikaGoal(`form_submit_${data.formType}_${cityKey}`)

    return {
      success: true,
      message: 'Ваша заявка успешно отправлена!',
    }
  } catch (error) {
    console.error('Ошибка отправки формы:', error)
    return {
      success: false,
      message: 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже.',
    }
  }
}

/**
 * Валидация данных формы
 */
export function validateForm(data: BaseFormData): {
  valid: boolean
  errors: Record<string, string>
} {
  const errors: Record<string, string> = {}

  // Базовая валидация для всех форм
  if (!data.name || data.name.trim() === '') {
    errors.name = 'Введите ваше имя'
  }

  if (!data.phone) {
    errors.phone = 'Введите номер телефона'
  } else if (!/^\+?[0-9]{10,}$/.test(data.phone.replace(/\D/g, ''))) {
    errors.phone = 'Введите корректный номер телефона'
  }

  // Валидация email, если он есть
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Введите корректный email'
  }

  // Валидация согласия на обработку персональных данных
  if (data.privacyConsent === false) {
    errors.privacyConsent = 'Необходимо дать согласие на обработку персональных данных'
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}

export default {
  submitForm,
  validateForm,
  initEmailJS,
}
