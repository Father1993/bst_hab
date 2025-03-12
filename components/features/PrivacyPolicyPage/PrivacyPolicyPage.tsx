'use client'

import Link from 'next/link'

const PrivacyPolicyPage = () => {
  const lastUpdated = '01.10.2023'

  return (
    <section className='bg-black text-gray-300 py-16'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-3xl md:text-4xl font-bold text-white mb-8 border-b border-zinc-800 pb-4'>
            Политика использования файлов cookie
          </h1>

          <div className='space-y-6'>
            <p className='text-sm text-gray-500'>Последнее обновление: {lastUpdated}</p>

            <h2 className='text-2xl font-semibold text-[#FFD700] mt-8'>Что такое файлы cookie?</h2>
            <p>
              Файлы cookie — это небольшие текстовые файлы, размещаемые на вашем устройстве
              (компьютере, планшете или мобильном телефоне) при посещении нашего веб-сайта. Они
              позволяют нашему сайту запоминать ваши действия и предпочтения в течение определенного
              времени, чтобы вам не нужно было повторно вводить информацию при переходе на другие
              страницы или при повторном посещении сайта.
            </p>

            <h2 className='text-2xl font-semibold text-[#FFD700] mt-8'>
              Какие типы файлов cookie мы используем?
            </h2>
            <p>На нашем сайте используются следующие типы файлов cookie:</p>
            <ul className='list-disc pl-6 space-y-2 mt-4'>
              <li>
                <strong className='text-[#FFD700]'>Обязательные файлы cookie</strong> — необходимы
                для функционирования сайта. Они позволяют использовать основные функции, такие как
                безопасный вход и сохранение корзины покупок.
              </li>
              <li>
                <strong className='text-[#FFD700]'>Функциональные файлы cookie</strong> — улучшают
                работу сайта, запоминая ваши предпочтения и настройки (например, язык или регион).
              </li>
              <li>
                <strong className='text-[#FFD700]'>Аналитические файлы cookie</strong> — помогают
                нам понять, как посетители взаимодействуют с нашим сайтом, что позволяет улучшать
                его работу.
              </li>
              <li>
                <strong className='text-[#FFD700]'>Маркетинговые файлы cookie</strong> —
                используются для отслеживания посетителей на веб-сайтах с целью отображения
                релевантной рекламы.
              </li>
            </ul>

            <h2 className='text-2xl font-semibold text-[#FFD700] mt-8'>
              Файлы cookie третьих сторон
            </h2>
            <p>
              Помимо собственных файлов cookie, мы также используем файлы cookie третьих сторон,
              таких как Google Analytics, Яндекс.Метрика и других сервисов, которые помогают нам
              анализировать использование нашего сайта и улучшать пользовательский опыт.
            </p>
            <p className='mt-4'>
              Обратите внимание, что данные, собранные с помощью файлов cookie, могут передаваться
              третьим сторонам для аналитических и маркетинговых целей. Мы рекомендуем ознакомиться
              с политиками конфиденциальности этих сторон:
            </p>
            <ul className='list-disc pl-6 space-y-2 mt-4'>
              <li>
                <a
                  href='https://policies.google.com/privacy'
                  className='text-[#FFD700] hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Политика конфиденциальности Google
                </a>
              </li>
              <li>
                <a
                  href='https://yandex.ru/legal/confidential/'
                  className='text-[#FFD700] hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Политика конфиденциальности Яндекса
                </a>
              </li>
            </ul>

            <h2 className='text-2xl font-semibold text-[#FFD700] mt-8'>
              Срок хранения файлов cookie
            </h2>
            <p>
              В зависимости от функции и назначения, файлы cookie могут храниться на вашем
              устройстве различное время:
            </p>
            <ul className='list-disc pl-6 space-y-2 mt-4'>
              <li>
                <strong className='text-[#FFD700]'>Сессионные файлы cookie</strong> — временные
                файлы, которые удаляются после закрытия браузера.
              </li>
              <li>
                <strong className='text-[#FFD700]'>Постоянные файлы cookie</strong> — остаются на
                устройстве в течение определенного периода (обычно от нескольких дней до нескольких
                лет), если не будут удалены вами вручную.
              </li>
            </ul>
            <p className='mt-4'>
              Большинство аналитических и маркетинговых файлов cookie имеют срок действия от 30 дней
              до 2 лет, в зависимости от их назначения.
            </p>

            <h2 className='text-2xl font-semibold text-[#FFD700] mt-8'>
              Как используются файлы cookie на нашем сайте?
            </h2>
            <ul className='list-disc pl-6 space-y-2 mt-4'>
              <li>Для обеспечения правильной работы сайта</li>
              <li>Для сохранения ваших предпочтений</li>
              <li>Для улучшения скорости и безопасности сайта</li>
              <li>Для анализа того, как используется наш сайт</li>
              <li>Для персонализации контента и рекламы</li>
            </ul>

            <h2 className='text-2xl font-semibold text-[#FFD700] mt-8'>
              Управление файлами cookie
            </h2>
            <p>
              Вы можете контролировать и/или удалять файлы cookie по своему усмотрению. Большинство
              браузеров позволяют просматривать, удалять и блокировать файлы cookie с веб-сайтов.
              Обратите внимание, что если вы удалите все файлы cookie, то потеряете все ваши
              предпочтения, включая предпочтение отказа от файлов cookie, поскольку и это требует
              установки соответствующего файла cookie-отказа.
            </p>
            <p className='mt-4'>Инструкции по управлению файлами cookie в различных браузерах:</p>
            <ul className='list-disc pl-6 space-y-2 mt-4'>
              <li>
                <a
                  href='https://support.google.com/chrome/answer/95647'
                  className='text-[#FFD700] hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href='https://support.mozilla.org/ru/kb/kuki-informaciya-kotoruyu-veb-sajty-hranyat-na-vas'
                  className='text-[#FFD700] hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href='https://support.microsoft.com/ru-ru/microsoft-edge/удаление-файлов-cookie-в-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09'
                  className='text-[#FFD700] hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Microsoft Edge
                </a>
              </li>
              <li>
                <a
                  href='https://support.apple.com/ru-ru/guide/safari/sfri11471/mac'
                  className='text-[#FFD700] hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Safari
                </a>
              </li>
            </ul>

            <h2 className='text-2xl font-semibold text-[#FFD700] mt-8'>
              Изменения в политике использования файлов cookie
            </h2>
            <p>
              Мы оставляем за собой право вносить изменения в данную политику использования файлов
              cookie в любое время и по любой причине. Любые изменения в политике использования
              файлов cookie будут опубликованы на этой странице.
            </p>

            <div className='bg-zinc-900/50 p-4 rounded-lg border border-zinc-800 mt-8'>
              <h2 className='text-2xl font-semibold text-[#FFD700] mb-4'>
                Оператор персональных данных
              </h2>
              <p className='mb-4'>
                Владельцем сайта и оператором, осуществляющим обработку персональных данных,
                является Общество с ограниченной ответственностью "БСТ ХАБ" (ООО "БСТ ХАБ").
              </p>
              <p>
                <strong className='text-[#FFD700]'>Полное название:</strong> ОБЩЕСТВО С ОГРАНИЧЕННОЙ
                ОТВЕТСТВЕННОСТЬЮ "БСТ ХАБ"
                <br />
                <strong className='text-[#FFD700]'>Английское название:</strong> OOO "BST KHAB"
                <br />
                <strong className='text-[#FFD700]'>Юридический адрес:</strong> 680018, Хабаровский
                кр., г. Хабаровск, ул. Белинского, д. 9Б
                <br />
                <strong className='text-[#FFD700]'>ИНН:</strong> 2722125309
                <br />
                <strong className='text-[#FFD700]'>КПП:</strong> 272201001
                <br />
                <strong className='text-[#FFD700]'>ОГРН:</strong> 1192724003713
                <br />
                <strong className='text-[#FFD700]'>Руководитель:</strong> Дементьев Владимир
                Александрович, директор
                <br />
                <strong className='text-[#FFD700]'>E-mail:</strong> 252188dv@mail.ru
                <br />
                <strong className='text-[#FFD700]'>Телефон:</strong> +7 (914) 203-91-97
              </p>
            </div>

            <h2 className='text-2xl font-semibold text-[#FFD700] mt-8'>Контактная информация</h2>
            <p>
              Если у вас возникли вопросы относительно использования файлов cookie на нашем сайте,
              пожалуйста, свяжитесь с нами:
            </p>
            <ul className='list-disc pl-6 space-y-2 mt-4'>
              <li>Email: 252188dv@mail.ru</li>
              <li>Телефон: +7 (914) 203-91-97</li>
              <li>Почтовый адрес: 680018, Хабаровский кр., г. Хабаровск, ул. Белинского, д. 9Б</li>
            </ul>
          </div>

          <div className='flex justify-center mt-12'>
            <Link
              href='/'
              className='group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-black 
              bg-[#FFD700] hover:bg-[#FFD700]/90 rounded-lg transition-all duration-200 
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
  )
}

export default PrivacyPolicyPage
