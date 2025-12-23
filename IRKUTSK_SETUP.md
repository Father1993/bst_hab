# Настройка поддомена Иркутск

## Что сделано

### ✅ 1. Структура сайта
- **Главная страница Иркутска**: `/irkutsk` (доступна на основном домене)
- **Контакты Иркутска**: `/irkutsk/contacts`
- **Переключатель города** в Header (верхняя панель)
- **Все компоненты** скопированы из основного сайта

### ✅ 2. SEO-оптимизация
- Уникальные `title`, `description`, `keywords` для каждой страницы
- Микроразметка Schema.org (LocalBusiness, ContactPage)
- Canonical URL на поддомен `https://irkutsk.bst-hab.ru`
- Обновлён `sitemap.xml` с приоритетом 0.9 для Иркутска
- Правильная структура URL для поисковых систем

### ✅ 3. Формы и заявки
- ContactForm с параметром `city` для различения заявок
- Визуальная метка "Заявка из Иркутск" в форме
- Город передаётся в EmailJS для идентификации источника

### ✅ 4. Контакты Иркутска
Все контакты хранятся в `components/shared/constants.ts`:

```typescript
export const IRKUTSK_OFFICE = {
  name: 'BST HAB Иркутск',
  phone: '+7 (3952) 98-27-27',
  phoneShort: '98-27-27',
  phoneRaw: '+73952982727',
  email: '252188dv@mail.ru',
  address: 'Промышленная улица, 3Б, рп. Маркова',
  addressFull: 'Промышленная улица, 3Б, рп. Маркова, Иркутский район, Иркутская область',
  city: 'Иркутск',
  region: 'Иркутская область',
  settlement: 'рп. Маркова',
  workHours: 'Пн-Сб: 9:00 - 19:00',
}
```

## Настройка Docker для поддомена

### Вариант 1: Один Docker-контейнер (рекомендуется)
Используйте один контейнер для обоих доменов. Nginx перенаправляет:
- `bst-hab.ru` → `/` (главная)
- `irkutsk.bst-hab.ru` → `/irkutsk` (через rewrite)

**nginx.conf:**
```nginx
server {
    listen 80;
    server_name bst-hab.ru www.bst-hab.ru;
    root /usr/share/nginx/html;
    
    location / {
        try_files $uri $uri.html $uri/ =404;
    }
}

server {
    listen 80;
    server_name irkutsk.bst-hab.ru;
    root /usr/share/nginx/html;
    
    # Перенаправляем корень на /irkutsk
    location = / {
        rewrite ^ /irkutsk/ permanent;
    }
    
    location / {
        try_files $uri $uri.html $uri/ =404;
    }
}
```

### Вариант 2: Два отдельных контейнера
Если нужны отдельные контейнеры:
1. Основной: `bst-hab.ru` → весь сайт
2. Иркутск: `irkutsk.bst-hab.ru` → только `/irkutsk` и `/irkutsk/contacts`

## Локальная разработка

```bash
# Запуск dev-сервера
npm run dev

# Доступ к страницам:
# Хабаровск: http://localhost:3000
# Иркутск: http://localhost:3000/irkutsk
# Контакты Иркутск: http://localhost:3000/irkutsk/contacts
```

## Сборка для продакшена

```bash
# Статическая сборка (output: 'export')
npm run build

# Результат в папке /out
# Структура:
# /out/index.html - главная (Хабаровск)
# /out/irkutsk/index.html - главная Иркутск
# /out/irkutsk/contacts/index.html - контакты Иркутск
```

## Проверка SEO

### Robots.txt
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Host: bst-hab.ru
Sitemap: https://bst-hab.ru/sitemap.xml
```

### Sitemap.xml
Включает:
- `/` (priority: 1.0)
- `/irkutsk` (priority: 0.9)
- `/irkutsk/contacts` (priority: 0.7)
- Все остальные страницы

## Тестирование

1. **Переключатель города**: Кликните на город в Header → должно открыться меню
2. **Форма**: Отправьте заявку из Иркутска → в EmailJS должно прийти с меткой "Иркутск"
3. **SEO**: Проверьте `<title>`, `<meta description>`, canonical в исходном коде
4. **Schema.org**: Проверьте микроразметку через [Google Rich Results Test](https://search.google.com/test/rich-results)

## Важные файлы

- `components/shared/constants.ts` - все контакты и конфигурация городов
- `components/layout/Header.tsx` - переключатель города
- `components/features/ContactForm.tsx` - форма с поддержкой города
- `app/irkutsk/page.tsx` - главная Иркутска
- `app/irkutsk/contacts/page.tsx` - контакты Иркутска
- `app/sitemap.ts` - карта сайта
- `app/robots.ts` - robots.txt

## Функционал не нарушен ✅

- Все существующие страницы работают как раньше
- Хабаровск остаётся по умолчанию
- Добавлен только новый раздел `/irkutsk`
- Формы работают для обоих городов
- SEO оптимизация не влияет на производительность

