import dotenv
import asyncio
import os
import aiosqlite

from aiogram import Bot, Dispatcher, types
from aiogram.filters.command import Command
from aiogram.enums import ParseMode

dotenv.load_dotenv()
TOKEN = os.getenv("TOKEN")
bot = Bot(token=TOKEN)
dp = Dispatcher()


@dp.message(Command("start"))
async def start_message(message: types.Message):

    user_id = int(message.from_user.id)
    username = message.from_user.username
    name = message.from_user.full_name

    keyboard = types.InlineKeyboardMarkup(
        inline_keyboard=[
            [
                types.InlineKeyboardButton(
                    text="Открыть приложение📱",
                    web_app=types.WebAppInfo(url="https://eaa4-185-39-207-37.ngrok-free.app")
                )
            ]
        ]
    )

    await message.answer(
        text="<b>Привет!</b> 👋\n"
             "Отправь голосовое сообщение или файл формата."
             "mp3 для распознавания дефектов речи!\n"
             "Напиши /profile чтобы узнать время и результат последней проверки!\n",
        parse_mode=ParseMode.HTML,
        reply_markup=keyboard
    )

    async with aiosqlite.connect("../backend/database.db") as db:
        await db.execute(
            """
            INSERT OR IGNORE INTO users 
            (user_id, username, name, level, xp)
            VALUES (?, ?, ?, ?, ?)
            """, (user_id, username, name, 1, 0)
        )
        await db.commit()


async def main():
    await dp.start_polling(bot, skip_updates=True)


if __name__ == '__main__':
    asyncio.run(main())
