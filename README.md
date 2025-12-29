# BST HAB — Next.js 15 (SSR) + 2 домена (поддомены)

### Как это работает (коротко)
- **Один SSR-проект** обслуживает два домена:
  - **Хабаровск**: `bst-hab.ru`
  - **Иркутск**: `irkutsk.bst-hab.ru`
- Иркутск **живёт на поддомене**, а путь `bst-hab.ru/irkutsk` используется только как **301 редирект** (без дублей для SEO) — это делает `middleware.ts`.
- `robots.txt` и `sitemap.xml` **зависят от `Host`** → в Nginx обязательно `proxy_set_header Host $host;`.

### Нужные файлы в репозитории
- **`Dockerfile`** — сборка Next.js в режиме `output: 'standalone'`
- **`docker-compose.yml`** — запуск SSR в контейнере + HTTPS (Caddy → Let's Encrypt)
- **`Caddyfile`** — обратный прокси + автоматические сертификаты
- **`nginx.conf`** — пример прокси-конфига (если Nginx на хосте)
- **`middleware.ts`** — логика поддомена Иркутска + 301 редиректы
- **`env.production.example`** — шаблон переменных окружения

### `.env.production` (что добавить/заполнить)
На сервере (в папке проекта) создай `.env.production` из `env.production.example` и заполни минимум:

- **домены** (canonical/SEO/переключатель города):
  - `NEXT_PUBLIC_SITE_URL=https://bst-hab.ru`
  - `NEXT_PUBLIC_MAIN_DOMAIN=https://bst-hab.ru`
  - `NEXT_PUBLIC_IRKUTSK_DOMAIN=https://irkutsk.bst-hab.ru`
- **Яндекс.Метрика** (2 счётчика или один — но переменные должны быть):
  - `NEXT_PUBLIC_YANDEX_METRIKA_ID_KHABAROVSK=...`
  - `NEXT_PUBLIC_YANDEX_METRIKA_ID_IRKUTSK=...`
  - (fallback) `NEXT_PUBLIC_YANDEX_METRIKA_ID=...`
- **EmailJS**:
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID=...`
  - `NEXT_PUBLIC_EMAILJS_USER_ID=...`
  - `NEXT_PUBLIC_EMAILJS_CALLBACK_TEMPLATE_ID=...`
  - `NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=...`
- **контакты** (если отличаются — укажи, иначе будут дефолты из кода):
  - `NEXT_PUBLIC_CONTACT_*`
  - `NEXT_PUBLIC_IRKUTSK_*`

### Яндекс.Метрика: цели по формам (чтобы отличать заявки)
После отправки формы дополнительно отправляется цель вида:
- `form_submit_contact_khabarovsk`
- `form_submit_callback_khabarovsk`
- `form_submit_contact_irkutsk`
- `form_submit_callback_irkutsk`

Также в EmailJS уходят поля `city`, `form_type`, `page_url`, `page_path`, `host` — удобно фильтровать заявки.

### Деплой на Ubuntu VPS (Docker Compose + HTTPS)
**Предусловия (обязательно):**
- **A-записи DNS** указывают на IP сервера:
  - `bst-hab.ru`
  - `www.bst-hab.ru`
  - `irkutsk.bst-hab.ru`
- **Порты 80/443** доступны снаружи (firewall/security group).
- Установлен Docker + Docker Compose plugin (`docker compose`).

**1) Первый запуск на сервере (один раз):**

```bash
cd /opt/bst_hab   # или куда вы положили проект
cp env.production.example .env.production
nano .env.production

# email для Let's Encrypt (можно без него, но лучше указать)
echo "CADDY_EMAIL=you@example.com" > .env

docker compose up -d --build
```

**2) Обновление (после `git pull` или автодеплоя):**

```bash
docker compose up -d --build --remove-orphans
```

### Nginx (если используешь)
Главное: **пробросить Host**. Пример конфига смотри в `nginx.conf`.
