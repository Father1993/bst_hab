import emailjs from '@emailjs/browser'

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

// Мапинг типов форм к конфигурациям
const formConfigs: Record<string, FormConfig> = {
  callback: {
    subject: 'Заявка на обратный звонок с сайта BST HAB',
    recipients: ['252188dv@mail.ru'],
    template: 'callback',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_CALLBACK_TEMPLATE_ID || 'template_callback',
  },
  contact: {
    subject: 'Новая заявка с сайта BST HAB',
    recipients: ['252188dv@mail.ru'],
    template: 'contact',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || 'template_contact',
  },
  delivery: {
    subject: 'Запрос на доставку BST HAB',
    recipients: ['252188dv@mail.ru'],
    template: 'delivery',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || 'template_contact', // Используем тот же шаблон, что и для контактной формы
  },
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
    // Получаем конфигурацию для данного типа формы
    const config = formConfigs[data.formType]
    if (!config) {
      throw new Error(`Неизвестный тип формы: ${data.formType}`)
    }

    // Подготовка данных для отправки
    const templateParams = {
      to_email: config.recipients.join(', '),
      from_name: data.name,
      reply_to: data.email || '',
      email: data.email || '',
      subject: config.subject,
      message: data.message || '',
      phone_number: data.phone,
      preferred_time: data.time || 'Не указано',
      project_type: data.projectType || 'Не указано',
      form_type: data.formType,
    }

    // Отправка через EmailJS
    const response = await emailjs.send(EMAILJS_CONFIG.serviceId, config.templateId, templateParams)

    console.log('EmailJS успешно отправил форму:', response)

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
