import React from "react"
import { ReactComponent as Icon } from "../images/icon.svg"
import { ProgressBar } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


const ProfilePage = () => {
    const [userData, setUserData] = useState(null)
    const [level, setUserLevel] = useState(1)
    const [now, setUserNow] = useState(0)

    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp) {
            const tg = window.Telegram.WebApp
            tg.expand()
            
            const data = {
                "name": tg.initDataUnsafe.user?.first_name,
                "username": tg.initDataUnsafe.user?.username,
                "id": tg.initDataUnsafe.user?.id
            }

            setUserData(data)
        }
    }, [])


    return (
        <div>
            <div className="info">
                <Icon />
                <div className="names">
                    <h1>{userData?.name || "User"}</h1>
                    <p>@{userData?.username || "username"}</p>
                </div>
            </div>
            <div className="level">
                <h2>Уровень {level}</h2>
                <ProgressBar
                    now={now}
                    style={{
                        marginLeft: '30px',
                        marginRight: '30px'
                    }}
                />
            </div>
            <div className="links">
                <Link to="/payme">
                    Поддержать нас
                </Link>
            </div>
        </div>
    );
}

export default ProfilePage;