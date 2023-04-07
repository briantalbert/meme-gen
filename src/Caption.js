import React from "react"
import Draggable from "react-draggable"

export default function Caption(props) {
    return (
        <Draggable>      
            <h1
                className={`caption ${props.pos}-caption`}
            >{props.text}</h1>
        </Draggable>
    )
}