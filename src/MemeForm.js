import React from "react"
import MemeImage from "./MemeImage"

export default function MemeForm(props) {
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

    function handleChange(e) {
        const {name, value} = e.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    function getMemeImage(e=null) {
        if(e){e.preventDefault();};
        let randNum = Math.floor(Math.random() * 100)
        setMeme({
            topText: '',
            bottomText: '',
            randomImage: allMemeImages[randNum].url
        });
    };

    return (
        <div className="meme-form">
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
            
            <MemeImage topText={meme.topText} bottomText={meme.bottomText} image={meme.randomImage}/>
        </div>
    )
}