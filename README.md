# BST HAB — Next.js 15 (SSR) + 2 домена (поддомены)

### Как это работает (коротко)
- **Один SSR-проект** обслуживает два домена:
  - **Хабаровск**: `bst-hab.ru`
  - **Иркутск**: `irkutsk.bst-hab.ru`
- Иркутск **живёт на поддомене**, а путь `bst-hab.ru/irkutsk` используется только как **301 редирект** (без дублей для SEO) — это делает `middleware.ts`.
- `robots.txt` и `sitemap.xml` **зависят от `Host`** → в Nginx обязательно `proxy_set_header Host $host;`.

### Нужные файлы в репозитории
- **`Dockerfile`** — сборка Next.js в режиме `output: 'standalone'`
- **`docker-compose.yml`** — запуск SSR в контейнере
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

### Деплой на Ubuntu VPS (GitHub Actions → SSH → docker compose)
**Предусловия на сервере:**
- установлен Docker + Docker Compose plugin (`docker compose`)
- репозиторий уже лежит в `/opt/bst`
- один раз создан `/opt/bst/.env.production`

**1) Первый запуск на сервере (один раз):**

```bash
cd /opt/bst
cp env.production.example .env.production
nano .env.production
docker compose up -d --build
```

**2) GitHub Actions**
В репозитории уже есть workflow: `.github/workflows/deploy.yml`.

Добавь GitHub Secrets:
- **`SSH_HOST`**: IP сервера
- **`SSH_USER`**: `dev`
- **`SSH_KEY`**: приватный ключ (которым заходишь по SSH)
- **`SSH_PORT`**: `22`
- **`DEPLOY_PATH`**: `/opt/bst`

После пуша в `main` GitHub сам выполнит на сервере:
- `git reset --hard origin/main`
- `docker compose up -d --build --remove-orphans`

### Nginx (если используешь)
Главное: **пробросить Host**. Пример конфига смотри в `nginx.conf`.
