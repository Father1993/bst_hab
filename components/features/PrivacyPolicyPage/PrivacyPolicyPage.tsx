'use client'

import Link from 'next/link'

const PrivacyPolicyPage = () => (
  <main>
    <section className='container mx-auto'>
      <div className='max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 mb-10'>
        <div className='px-6 py-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-6'>
            Политика использования файлов cookie
          </h1>

          <div className='text-gray-700'>
            <p>
              Сайт BST HAB использует файлы cookie для улучшения вашего опыта использования.
              Продолжая пользоваться сайтом, вы соглашаетесь с использованием нами файлов cookie.
            </p>

            <h2 className='text-2xl font-semibold text-gray-800 mt-8 mb-4'>
              Что такое файлы cookie?
            </h2>
            <p>
              Файлы cookie - это небольшие текстовые файлы, которые сохраняются на вашем устройстве
              (компьютере, смартфоне или планшете) при посещении веб-сайтов. Они широко используются
              для обеспечения работы веб-сайтов или повышения эффективности их работы, а также для
              предоставления информации владельцам веб-сайта.
            </p>

            <h2 className='text-2xl font-semibold text-gray-800 mt-8 mb-4'>
              Как мы используем файлы cookie?
            </h2>
            <ul className='list-disc pl-6 space-y-2'>
              <li>Для обеспечения правильной работы сайта</li>
              <li>Для сохранения ваших предпочтений</li>
              <li>Для анализа использования сайта и улучшения пользовательского опыта</li>
              <li>Для персонализации контента и рекламы</li>
            </ul>

            <h2 className='text-2xl font-semibold text-gray-800 mt-8 mb-4'>
              Управление файлами cookie
            </h2>
            <p>
              Вы можете контролировать и/или удалять файлы cookie по своему усмотрению. Подробнее об
              этом вы можете узнать на сайте{' '}
              <a href='https://aboutcookies.org' className='text-blue-600 hover:underline'>
                aboutcookies.org
              </a>
              . Вы можете удалить все файлы cookie, которые уже находятся на вашем устройстве, а
              также настроить большинство браузеров таким образом, чтобы они не размещали файлы
              cookie. Однако в этом случае вам, возможно, придется вручную настраивать некоторые
              параметры при каждом посещении сайта, а некоторые службы и функции могут не работать.
            </p>

            <h2 className='text-2xl font-semibold text-gray-800 mt-8 mb-4'>
              Контактная информация
            </h2>
            <p>
              Если у вас есть вопросы об использовании файлов cookie на нашем сайте, пожалуйста,
              свяжитесь с нами:
            </p>
            <ul className='list-disc pl-6 space-y-2 mt-4'>
              <li>Email: 252188@mail.ru</li>
              <li>Телефон: +7 (914) 203-91-97</li>
            </ul>
          </div>
          <div className='flex justify-center mt-8'>
            <Link
              href='/'
              className='group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white 
              bg-black hover:bg-gray-900 rounded transition-all duration-200 
              transform hover:-translate-y-0.5 hover:shadow-lg'
            >
              <svg
                className='w-5 h-5 transition-transform group-hover:-translate-x-1'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M10 19l-7-7m0 0l7-7m-7 7h18'
                />
              </svg>
              На главную
            </Link>
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default PrivacyPolicyPage
