import sqlite3
import aiosqlite


def create_database():

    conn = sqlite3.connect("database.db")
    cur = conn.cursor()

    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS users (
            user_id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            username TEXT NOT NULL
        )
        """
    )

    conn.commit()
    cur.close()
    conn.close()


async def get_user_data(user_id: int) -> list:

    async with aiosqlite.connect("database.db") as db:
        async with db.execute(
                """
                SELECT name, username FROM users
                WHERE id = ?
                """,
                (user_id, )
        ) as cursor:
            result = await cursor.fetchall()

            return result
