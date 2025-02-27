// Типы данных для форм
export interface BaseFormData {
  name: string
  phone: string
  email?: string
  message?: string
  formType: string // тип формы: 'callback', 'contact', 'delivery', etc.
}

// Конфигурация для формы
export interface FormConfig {
  subject: string
  recipients: string[]
  template: string
  replyTo?: string
}

// Мапинг типов форм к конфигурациям
const formConfigs: Record<string, FormConfig> = {
  callback: {
    subject: 'Заявка на обратный звонок с сайта BST HAB',
    recipients: ['252188@mail.ru'],
    template: 'callback',
  },
  contact: {
    subject: 'Новая заявка с сайта BST HAB',
    recipients: ['252188@mail.ru'],
    template: 'contact',
  },
  delivery: {
    subject: 'Запрос на доставку BST HAB',
    recipients: ['252188@mail.ru'],
    template: 'delivery',
  },
}

/**
 * Отправка данных формы
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

    // На этом этапе будет использоваться ваш выбранный способ отправки:
    // - Nodemailer для Node.js API
    // - EmailJS для клиентской отправки
    // - SendGrid или другие API

    // Пример заглушки для демонстрации
    console.log('Отправка формы:', { data, config })

    // Имитация задержки сети
    await new Promise(resolve => setTimeout(resolve, 1000))

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

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}

export default {
  submitForm,
  validateForm,
}
