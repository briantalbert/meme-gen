import React from "react"

export default function Meme() {

    function getMeme() {
        console.log('clicked');
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
                    onClick={getMeme}
                    >
                    Get a New Meme Image 🖼
                </button>
            
        </div>
    )
}