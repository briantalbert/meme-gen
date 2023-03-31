import React from "react"
import memeData from "./memeData.js"

export default function Meme() {

    let [memeImage, setMemeImage] = React.useState('');

    function getMemeImage(e=null) {
        if(e){e.preventDefault();};
        let randNum = Math.floor(Math.random() * 100)
        setMemeImage(memeData.data.memes[randNum].url);
    };

    return (
        <div class="meme-form">
            <div className="inputs">
                <input
                    type="text"
                    className="top-text meme-text"
                    placeholder="Top Text"
                />
                <input
                    type="text"
                    className="bottom-text meme-text"
                    placeholder="Bottom Text"
                />
            </div>
                <button
                    className="meme-gen-button"
                    onClick={getMemeImage}
                    >
                    Get a New Meme Image 🖼
                </button>
                <img 
                    src={memeImage}
                    className="meme-image"
                    alt="your meme"
                />
            
        </div>
    )
}