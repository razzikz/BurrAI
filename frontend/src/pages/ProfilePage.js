import React from "react"
import { ReactComponent as Icon } from "../images/icon.svg"
import { ProgressBar } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [level] = useState(1);
    const [now] = useState(0);
    
    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp) {
            const tg = window.Telegram.WebApp;
            tg.expand();
            setUserData(tg.initDataUnsafe.user?.username || '');
        }
    }, []);

    return (
        <div>
            <div className="info">
                <Icon />
                <div className="names">
                    <h1>{userData || 'User'}</h1>
                    <p>@{userData || 'username'}</p>
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
                <Link to="/contacts">
                    О нас
                </Link>
            </div>
        </div>
    );
}

export default ProfilePage;