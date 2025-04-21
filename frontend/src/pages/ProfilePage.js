import React from "react";
import { ReactComponent as Icon } from "../images/icon.svg";

class ProfilePage extends React.Component {

    render() {
        return (
            <div>
                <div className="info">
                <Icon />
                <div className="names">
                    <h1>Имя</h1>
                    <b3>@username</b3>
                </div>
            </div>
            <div className="level">
                
            </div>
            </div>
        )
    }
}

export default ProfilePage