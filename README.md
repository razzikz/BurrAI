# BurrAI - Система для определения речевых дефектов

### Инструкция по установке проекта:
### 1. Загрузите нужные библиотеки:
```bash
pip install -r requirements.txt
```
---
### 2. Вставьте свой Telegram API токен:
#### 1. Сделайте файл .env в корне проекта
#### 2. Вставьте в файл .env свой Telegram API токен:
```bash
TOKEN="YOUR_TOKEN"
```
---
### 3. Запустите телеграм бота:
#### Зайдите в папку telegram_bot:
```bash
cd telegram_bot
```

#### Для Windows
```bash
python bot.py
```
#### Для Linux & MacOS
```bash
python3 bot.py
```
---
### 4. Запустите FastAPI:
#### Зайдите в папку backend:
```bash
cd ../backend
```
#### Запустите FastAPI:
```bash
uvicorn main:app
```
