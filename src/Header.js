import React from "react"
import trollface from './images/trollface.png'

export default function Header() {
    return (
        <div className="header">
            <img 
                className="trollface"
                src={trollface}
                alt="troll face"
                width="31px"
                height="26px"
            />
            <span className="title">
                MemeGenerator
            </span>
        </div>
    )
}

