import dotenv, asyncio, os, random
from pathlib import Path

from aiogram import Bot, Dispatcher, types
from aiogram.filters.command import Command
from aiogram.enums import ParseMode

project_path = Path.cwd().parent
data_path = project_path / "data"
data_path.mkdir(exist_ok=True)

dotenv.load_dotenv()
TOKEN = os.getenv("TOKEN")
bot = Bot(token=TOKEN)
dp = Dispatcher()

with open(data_path / "phrases.txt", "r", encoding="utf-8") as file:
    phrases = file.readlines()


@dp.message(Command("start"))
async def start_message(message: types.Message):
    await message.answer(
        text="<b>Привет!</b> 👋\nОтправь голосовое сообщение или файл формата .mp3 для распознавания дефектов речи!\nНапиши /profile чтобы узнать время и результат последней проверки!\nНапиши /task чтобы я дал тебе скороговорку",
        parse_mode=ParseMode.HTML
    )


@dp.message(Command("profile"))
async def profile_message(message: types.Message):
    user_id = str(message.from_user.id)

    ...


@dp.message(Command("task"))
async def task_message(message: types.Message):
    await message.answer(
        text=f"<b>Произнеси эту фразу:</b> {random.choice(phrases)}",
        parse_mode=ParseMode.HTML
    )


async def main():
    await dp.start_polling(bot, skip_updates=True)


if __name__ == '__main__':
    asyncio.run(main())