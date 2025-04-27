import React from "react"
import { ReactComponent as Icon } from "../images/icon.svg"
import { ProgressBar } from "react-bootstrap"
import { Link } from 'react-router-dom'

class ProfilePage extends React.Component {

    updateLevel() {

        const level = 7

        return <h2>Уровень {level}</h2>
    }

    updateName() {

        const name = "Имя"

        return <h1>{name}</h1>
    }

    updateUsername() {

        const username = "@username"

        return <p>{username}</p>
    }

    updateProgressBar() {

        const now = 77

        return <ProgressBar now={now}
            style={{
                marginLeft: '30px',
                marginRight: '30px'
            }}
        />
    }

    render() {
        return (
            <div>
                <div className="info">
                    <Icon />
                    <div className="names">
                        { this.updateName() }
                        { this.updateUsername() }
                    </div>
                </div>
                <div className="level">
                    { this.updateLevel() }
                    { this.updateProgressBar() }
                </div>
                <div className="links">
                    <Link 
                        to="/payme"
                    >
                        Поддержать нас
                    </Link>
                    <Link 
                        to="/contacts"
                    >
                        О нас
                    </Link>
                </div>
            </div>
        )
    }
}

export default ProfilePage