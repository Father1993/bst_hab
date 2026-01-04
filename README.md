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

**Если на сервере есть только `docker-compose` (через дефис) или видишь `Docker Compose requires buildx plugin`:**

```bash
sudo apt update
sudo apt install -y docker-compose-plugin docker-buildx-plugin
docker compose version
```

**1) Первый запуск на сервере (один раз):**

```bash
cd /opt/bst_hab   # или куда вы положили проект
cp env.production.example .env.production
nano .env.production

# email для Let's Encrypt (необязательно)
# echo "CADDY_EMAIL=you@example.com" > .env

docker compose up -d --build
```

**2) Обновление (после `git pull` или автодеплоя):**

```bash
docker compose up -d --build --remove-orphans
```

### Автодеплой (GitHub Actions → SSH → docker compose)
В репозитории есть workflow: `.github/workflows/deploy.yml`.
Он запускается **при push в `main`** и на сервере делает:
`git pull` → `docker compose build --no-cache` → `docker compose down` → `docker compose up -d`.

#### 1) Подготовка сервера (Ubuntu)
Установи зависимости (если ещё не стоят):

```bash
sudo apt update
sudo apt install -y git docker.io docker-compose-plugin docker-buildx-plugin
sudo systemctl enable --now docker
```

Создай пользователя для деплоя и доступ к Docker:

```bash
sudo adduser --disabled-password --gecos "" deploy
sudo usermod -aG docker deploy
sudo mkdir -p /opt/bst_hab
sudo chown -R deploy:deploy /opt/bst_hab
```

Склонируй проект (под пользователем `deploy`):

```bash
sudo -u deploy -H bash -lc 'cd /opt/bst_hab && git clone <SSH_ИЛИ_HTTPS_URL_РЕПО> .'
```

Создай переменные окружения **в папке проекта** (важно: `.env.production` используется и при сборке, и при запуске):

```bash
sudo -u deploy -H bash -lc 'cd /opt/bst_hab && cp env.production.example .env.production'
sudo -u deploy -H nano /opt/bst_hab/.env.production

# (опционально) email для Let's Encrypt (подстановка в docker-compose.yml)
sudo -u deploy -H bash -lc 'cd /opt/bst_hab && printf "CADDY_EMAIL=you@example.com\n" > .env'
```

Первый запуск:

```bash
sudo -u deploy -H bash -lc 'cd /opt/bst_hab && docker compose up -d --build'
```

#### 2) SSH-ключ для GitHub Actions (на сервере)
Сгенерируй ключ (без пароля) и разреши вход этим ключом:

```bash
sudo -u deploy -H bash -lc 'mkdir -p ~/.ssh && chmod 700 ~/.ssh'
sudo -u deploy -H ssh-keygen -t ed25519 -C "github-actions@bst-hab" -f /home/deploy/.ssh/github_actions -N ""
sudo -u deploy -H bash -lc 'cat ~/.ssh/github_actions.pub >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys'
```

Теперь:
- **приватный ключ** возьми командой:

```bash
sudo cat /home/deploy/.ssh/github_actions
```

- **хост сервера** — это ваш домен или IP (например `bst-hab.ru` или `1.2.3.4`)

#### 3) GitHub Secrets (Settings → Secrets and variables → Actions)
Добавь секреты:
- `SSH_HOST` — IP/домен сервера
- `SSH_USER` — `deploy`
- `SSH_KEY` — приватный ключ из `/home/deploy/.ssh/github_actions`
- `SSH_PATH` — `/opt/bst_hab`
- `SSH_PORT` — `22` (если нестандартный порт)

После мержа/пуша в `main` GitHub Actions сам выполнит деплой.

### Nginx (если используешь)
Главное: **пробросить Host**. Пример конфига смотри в `nginx.conf`.
