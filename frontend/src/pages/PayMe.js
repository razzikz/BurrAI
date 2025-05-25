import React from "react"
import imgQr from "../images/qr.png"

class PayMe extends React.Component {

    render() {
        return (
            <div className="content-pay">
                <b className="payme">Поддержите нас!</b>
                <img src={imgQr} alt="qr code" className="qr-image" />
                <b className="wallet">UQBJ-ltzl924EMzVnTfbQv9
                    _DN37l-yfMPAXs3KHtRIVCfbd</b>
            </div>
        )
    }
}

export default PayMe