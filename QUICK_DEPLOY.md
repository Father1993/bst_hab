# ⚡ Быстрый деплой на Ubuntu VPS (85.209.9.193)

## 🎯 Что уже готово

✅ **Next.js SSR** настроен для одного контейнера с двумя доменами  
✅ **Middleware** для правильной маршрутизации поддоменов  
✅ **Разные счётчики Метрики** для Хабаровска и Иркутска  
✅ **Docker** конфигурация с оптимизацией ресурсов  
✅ **Nginx** конфигурация с передачей Host заголовка  
✅ **Автоматический деплой** скрипт  

---

## 📝 Шаги деплоя (5 минут)

### 1. Подключитесь к серверу

```bash
ssh root@85.209.9.193
```

### 2. Установите Docker (если не установлен)

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
sudo usermod -aG docker $USER
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

**Важно**: После установки Docker перезайдите (`exit` и снова `ssh`).

### 3. Загрузите проект на сервер

**Вариант А: Через Git**
```bash
cd /opt
git clone <ваш-репозиторий> bst-hab
cd bst-hab
```

**Вариант Б: Через SFTP/SCP**
```bash
# С вашего компьютера
scp -r . root@85.209.9.193:/opt/bst-hab
```

### 4. Настройте переменные окружения

```bash
cd /opt/bst-hab
cp env.production.example .env.production
nano .env.production
```

**Обязательно укажите**:
- `NEXT_PUBLIC_YANDEX_METRIKA_ID_KHABAROVSK` - ваш ID счётчика для Хабаровска
- `NEXT_PUBLIC_YANDEX_METRIKA_ID_IRKUTSK` - ваш ID счётчика для Иркутска

### 5. Запустите деплой

```bash
chmod +x deploy.sh
./deploy.sh
```

Или вручную:
```bash
docker-compose build
docker-compose up -d
docker-compose logs -f
```

### 6. Настройте Nginx

```bash
sudo cp nginx.conf /etc/nginx/sites-available/bst-hab
sudo ln -s /etc/nginx/sites-available/bst-hab /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default  # опционально
sudo nginx -t
sudo systemctl restart nginx
```

### 7. Настройте DNS

В панели управления доменами:

**bst-hab.ru:**
- `A @ -> 85.209.9.193`
- `A www -> 85.209.9.193`

**irkutsk.bst-hab.ru:**
- `A irkutsk -> 85.209.9.193`

### 8. Установите SSL (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d bst-hab.ru -d www.bst-hab.ru -d irkutsk.bst-hab.ru
```

После этого в `nginx.conf` раскомментируйте редирект на HTTPS.

---

## ✅ Проверка работы

```bash
# Основной домен
curl -H "Host: bst-hab.ru" http://localhost:3000

# Поддомен
curl -H "Host: irkutsk.bst-hab.ru" http://localhost:3000

# Статус контейнеров
docker-compose ps

# Логи
docker-compose logs -f
```

---

## 🔄 Обновление

```bash
cd /opt/bst-hab
git pull  # или загрузите новые файлы
./deploy.sh
```

---

## 🆘 Проблемы?

**Приложение не запускается:**
```bash
docker-compose logs
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

**Поддомен не работает:**
```bash
# Проверьте передачу Host в Nginx
curl -H "Host: irkutsk.bst-hab.ru" http://localhost:3000

# Проверьте DNS
dig irkutsk.bst-hab.ru
```

**Нехватка памяти:**
```bash
docker stats
free -h
docker system prune -f
```

---

## 📊 Что работает после деплоя

✅ **bst-hab.ru** → основной сайт (Хабаровск)  
✅ **irkutsk.bst-hab.ru** → поддомен (Иркутск)  
✅ **Разные счётчики Метрики** для каждого домена  
✅ **Разные формы** с пометкой города в письмах  
✅ **SEO оптимизация** для обоих доменов  
✅ **Автоматические редиректы** (без дублей)  

**Готово!** 🚀

