#!/bin/bash

# Билд Docker изображения
docker-compose build

# Запуск Docker контейнера в детач моде
docker-compose up -d

echo "Docker контейнер запущен, для доступа к приложению перейдите по http://localhost:3030"
echo "Для остановки приложения используйте stop.sh, либо остановите выполнение через Docker Desktop"