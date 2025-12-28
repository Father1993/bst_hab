#!/bin/bash

# Скрипт автоматического деплоя на Ubuntu VPS
# Использование: ./deploy.sh

set -e

echo "🚀 Начало деплоя BST HAB..."

# Проверка наличия Docker
if ! command -v docker &> /dev/null; then
    echo "❌ Docker не установлен. Устанавливаю..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    rm get-docker.sh
    sudo usermod -aG docker $USER
    echo "✅ Docker установлен. Перезайдите в систему для применения изменений."
    exit 1
fi

# Проверка наличия Docker Compose
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose не установлен. Устанавливаю..."
    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    echo "✅ Docker Compose установлен"
fi

# Проверка наличия .env.production
if [ ! -f .env.production ]; then
    echo "⚠️  Файл .env.production не найден. Создаю из примера..."
    if [ -f env.production.example ]; then
        cp env.production.example .env.production
        echo "✅ Создан .env.production. Заполните его перед деплоем!"
        exit 1
    else
        echo "❌ Файл env.production.example не найден. Создайте .env.production вручную."
        exit 1
    fi
fi

# Остановка старых контейнеров
echo "🛑 Останавливаю старые контейнеры..."
docker-compose down || true

# Очистка старых образов (опционально, для экономии места)
echo "🧹 Очистка старых образов..."
docker system prune -f

# Сборка нового образа
echo "🔨 Сборка Docker образа..."
docker-compose build --no-cache

# Запуск контейнера
echo "▶️  Запуск контейнера..."
docker-compose up -d

# Ожидание запуска
echo "⏳ Ожидание запуска приложения..."
sleep 10

# Проверка здоровья
echo "🏥 Проверка здоровья приложения..."
for i in {1..30}; do
    if curl -f http://localhost:3000 > /dev/null 2>&1; then
        echo "✅ Приложение запущено и отвечает!"
        break
    fi
    if [ $i -eq 30 ]; then
        echo "❌ Приложение не отвечает. Проверьте логи: docker-compose logs"
        exit 1
    fi
    sleep 2
done

# Показ логов
echo "📋 Последние логи:"
docker-compose logs --tail=50

echo ""
echo "✅ Деплой завершён успешно!"
echo "🌐 Приложение доступно на http://localhost:3000"
echo "📊 Статус: docker-compose ps"
echo "📝 Логи: docker-compose logs -f"

