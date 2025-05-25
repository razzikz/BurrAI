# BurrAI - Система для определения речевых дефектов

### Инструкция по установке проекта:
### 1. Загрузите нужные библиотеки:
```bash
pip install -r requirements.txt
```
### 2. Создайте файл `.env`
### 3. Вставьте свой Telegram API токен в `.env`
```bash
TOKEN="YOUR_TOKEN"
```
### 4. Запустите телеграм бота:
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
### 5. Запустите FastAPI:
#### Зайдите в папку backend:
```bash
cd ../backend
```
#### Запустите FastAPI:
```bash
uvicorn main:app
```
