import React from "react"
//import memeData from "./memeData.js"

export default function Meme() {
    //let initialMeme = memeData.data.memes[Math.floor(Math.random() * 100)].url

    let [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: "https://i.imgflip.com/1bij.jpg"
    })

    let [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    
    
    function getMemeImage(e=null) {
        if(e){e.preventDefault();};
        let randNum = Math.floor(Math.random() * 100)
        setMeme((prevMeme) => {
            return ({
                ...prevMeme,
                randomImage: allMemeImages[randNum].url
            })
        });
    };

    function handleChange(e) {
        const {name, value} = e.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <div class="meme-form">
            <div className="inputs">
                <input
                    type="text"
                    className="top-text meme-text"
                    placeholder="Top Text"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input
                    type="text"
                    className="bottom-text meme-text"
                    placeholder="Bottom Text"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
            </div>
                <button
                    className="meme-gen-button"
                    onClick={getMemeImage}
                    >
                    Get a New Meme Image 🖼
                </button>
                <div class="meme">
                    <img
                        src={meme.randomImage}
                        className="meme-image"
                        alt=""
                    />
                    <h1
                        className="caption top-caption"
                    >{meme.topText}</h1>
                    <h1
                        className="caption bottom-caption"
                    >{meme.bottomText}</h1>
                </div>
            
        </div>
    )
}