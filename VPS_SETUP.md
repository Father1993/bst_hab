# 🖥️ Настройка VPS для Next.js приложения

## 📊 Рекомендации по конфигурации VPS

### Минимальная конфигурация (для старта)
- **CPU**: 1 ядро
- **RAM**: 2 GB
- **Диск**: 30 GB NVMe
- **Стоимость**: ~790 ₽/мес

⚠️ **Внимание**: С 2 GB RAM возможны проблемы при пиках трафика. Рекомендуется мониторинг.

### Рекомендуемая конфигурация (для стабильной работы)
- **CPU**: 2 ядра
- **RAM**: 4 GB
- **Диск**: 40 GB NVMe
- **Стоимость**: ~1,420 ₽/мес

✅ **Преимущества**: Стабильная работа, запас для роста трафика, комфортная работа с логами.

---

## 🐳 Деплой через Docker

### 1. Подготовка на VPS

```bash
# Установка Docker (если не установлен)
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Установка Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### 2. Клонирование проекта

```bash
cd /opt
git clone <ваш-репозиторий> bst-hab
cd bst-hab
```

### 3. Создание `.env.production`

```bash
cp .env.example .env.production
nano .env.production
```

Заполните все переменные (см. `.env.example` или документацию).

### 4. Сборка и запуск

```bash
# Сборка образа
docker-compose build

# Запуск в фоне
docker-compose up -d

# Просмотр логов
docker-compose logs -f
```

---

## 🔧 Настройка Nginx (реверс-прокси)

### Установка Nginx

```bash
sudo apt update
sudo apt install nginx -y
```

### Конфигурация для двух доменов

Создайте файл `/etc/nginx/sites-available/bst-hab`:

```nginx
# Главный домен (Хабаровск)
server {
    listen 80;
    server_name bst-hab.ru www.bst-hab.ru;
    
    # Редирект на HTTPS (после настройки SSL)
    # return 301 https://$server_name$request_uri;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Таймауты для SSR
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
}

# Поддомен (Иркутск)
server {
    listen 80;
    server_name irkutsk.bst-hab.ru;
    
    # Редирект на HTTPS (после настройки SSL)
    # return 301 https://$server_name$request_uri;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;  # ⚠️ ВАЖНО: передаём Host для middleware
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Таймауты для SSR
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
}
```

### Активация конфигурации

```bash
sudo ln -s /etc/nginx/sites-available/bst-hab /etc/nginx/sites-enabled/
sudo nginx -t  # Проверка конфигурации
sudo systemctl restart nginx
```

---

## 🔒 Настройка SSL (Let's Encrypt)

```bash
# Установка Certbot
sudo apt install certbot python3-certbot-nginx -y

# Получение сертификатов для обоих доменов
sudo certbot --nginx -d bst-hab.ru -d www.bst-hab.ru -d irkutsk.bst-hab.ru

# Автоматическое обновление (уже настроено в cron)
sudo certbot renew --dry-run
```

---

## 📊 Мониторинг ресурсов

### Установка htop для мониторинга

```bash
sudo apt install htop -y
htop
```

### Мониторинг Docker контейнера

```bash
# Использование ресурсов
docker stats

# Логи приложения
docker-compose logs -f --tail=100
```

### Настройка автозапуска при перезагрузке

```bash
# Docker Compose уже настроен на автозапуск через restart: unless-stopped
# Проверка статуса
docker-compose ps
```

---

## 🚀 Оптимизация для минимального VPS

### 1. Ограничение памяти Node.js

В `package.json` добавьте скрипт:

```json
{
  "scripts": {
    "start": "NODE_OPTIONS='--max-old-space-size=1024' next start"
  }
}
```

Это ограничит использование памяти до 1 GB (оставит запас для системы).

### 2. Ротация логов

Создайте `/etc/logrotate.d/docker-containers`:

```
/var/lib/docker/containers/*/*.log {
    rotate 7
    daily
    compress
    size=10M
    missingok
    delaycompress
    copytruncate
}
```

### 3. Очистка неиспользуемых Docker ресурсов

```bash
# Автоматическая очистка (раз в неделю через cron)
docker system prune -af --volumes
```

Добавьте в crontab:

```bash
crontab -e
# Добавьте строку:
0 3 * * 0 docker system prune -af --volumes
```

---

## 🔍 Проверка работы

### Проверка основного домена

```bash
curl -H "Host: bst-hab.ru" http://localhost:3000
```

### Проверка поддомена

```bash
curl -H "Host: irkutsk.bst-hab.ru" http://localhost:3000
```

### Проверка редиректов

```bash
# Должен редиректить на поддомен
curl -I http://bst-hab.ru/irkutsk

# Должен редиректить на чистый URL
curl -I http://irkutsk.bst-hab.ru/irkutsk
```

---

## 📝 Чеклист перед запуском

- [ ] Установлен Docker и Docker Compose
- [ ] Создан `.env.production` с правильными переменными
- [ ] Настроен Nginx с передачей заголовка `Host`
- [ ] Настроены DNS записи для обоих доменов
- [ ] Установлен SSL сертификат (Let's Encrypt)
- [ ] Проверена работа обоих доменов
- [ ] Настроен мониторинг ресурсов
- [ ] Настроена ротация логов

---

## 🆘 Решение проблем

### Приложение не запускается

```bash
# Проверка логов
docker-compose logs

# Пересборка образа
docker-compose build --no-cache
docker-compose up -d
```

### Нехватка памяти

```bash
# Проверка использования
free -h
docker stats

# Если памяти не хватает - увеличьте RAM или ограничьте Node.js (см. выше)
```

### Поддомен не работает

```bash
# Проверьте передачу Host в Nginx
curl -H "Host: irkutsk.bst-hab.ru" http://localhost:3000

# Проверьте DNS
dig irkutsk.bst-hab.ru
```

---

## 💡 Рекомендации

1. **Начните с минимальной конфигурации** (1 CPU, 2 GB RAM, 30 GB) для тестирования
2. **Мониторьте ресурсы** первые 2-3 недели
3. **При росте трафика** переходите на рекомендуемую конфигурацию (2 CPU, 4 GB RAM)
4. **Настройте бэкапы** базы данных (если будет) и конфигураций
5. **Используйте CDN** для статики (Cloudflare бесплатный план) - снизит нагрузку на VPS

---

**Готово!** Ваше приложение готово к работе на минимальном VPS с максимальной оптимизацией! 🚀

