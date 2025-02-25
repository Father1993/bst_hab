'use client'

import Link from 'next/link'

const PrivacyPage = () => (
  <section className='container mx-auto'>
    <div className='max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-10'>
      <div className='px-8 py-10'>
        <h1 className='text-3xl font-bold text-gray-900 mb-8'>Политика конфиденциальности</h1>

        <div className='prose prose-lg max-w-none text-gray-700'>
          <div className='space-y-6'>
            <h2 className='text-2xl font-semibold text-gray-800'>
              Что такое политика конфиденциальности?
            </h2>
            <p>
              Политика конфиденциальности — это заявление, в котором раскрываются способы сбора,
              использования и защиты персональных данных посетителей сайта ООО "БСТ ХАБ". Данная
              политика соответствует требованиям законодательства РФ по защите конфиденциальности
              наших клиентов.
            </p>

            <h2 className='text-2xl font-semibold text-gray-800 mt-8'>
              Какую информацию мы собираем?
            </h2>
            <p>Мы получаем, собираем и храним следующую информацию:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>Личные данные (имя, email, телефон)</li>
              <li>Платежные данные</li>
              <li>IP-адрес и информация о браузере</li>
              <li>История посещений и покупок</li>
              <li>Информация о взаимодействии с сайтом</li>
            </ul>

            <h2 className='text-2xl font-semibold text-gray-800 mt-8'>
              Как мы используем вашу информацию?
            </h2>
            <p>Мы используем собранные данные для следующих целей:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>Предоставление услуг и обработка заказов</li>
              <li>Техническая поддержка клиентов</li>
              <li>Отправка важных уведомлений и обновлений</li>
              <li>Улучшение качества обслуживания</li>
              <li>Соблюдение законодательных требований</li>
            </ul>

            <h2 className='text-2xl font-semibold text-gray-800 mt-8'>Защита данных</h2>
            <p>Мы принимаем все необходимые меры для защиты ваших персональных данных:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>Использование защищенных серверов</li>
              <li>Шифрование данных при передаче</li>
              <li>Регулярное обновление систем безопасности</li>
              <li>Строгий контроль доступа к данным</li>
            </ul>

            <h2 className='text-2xl font-semibold text-gray-800 mt-8'>Ваши права</h2>
            <p>Вы имеете право:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>Получить доступ к своим персональным данным</li>
              <li>Требовать исправления неточных данных</li>
              <li>Отозвать согласие на обработку данных</li>
              <li>Требовать удаления своих данных</li>
            </ul>

            <h2 className='text-2xl font-semibold text-gray-800 mt-8'>Обновления политики</h2>
            <p>
              Мы оставляем за собой право обновлять данную политику конфиденциальности. Все
              изменения будут опубликованы на этой странице с указанием даты последнего обновления.
            </p>

            <h2 className='text-2xl font-semibold text-gray-800 mt-8'>Контактная информация</h2>
            <p>
              Если у вас возникли вопросы относительно нашей политики конфиденциальности,
              пожалуйста, свяжитесь с нами:
            </p>
            <ul className='list-disc pl-6 space-y-2'>
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
    </div>
  </section>
)

export default PrivacyPage
