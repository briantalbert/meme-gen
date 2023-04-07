import React from "react"
import Caption from "./Caption"

export default function MemeImage(props) {
    return (
        <div className="meme-image">
            <img
                src={props.image}
                alt=""
            />
            {props.topText && <Caption text={props.topText} pos="top" />}
            {props.bottomText && <Caption text={props.bottomText} pos="bottom"/>}
        </div>
    )
}