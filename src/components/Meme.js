import { useState } from "react";
import memesData from "../data/memesData"

export default function Meme() {

    const memes = memesData.data.memes;

    // default meme state
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    // all memes in a state
    const [allMemeImages, setAllMemeImages] = useState(memesData.data.memes)
    const [memeImage, setMemeImage] = useState("");

    function getMemeImage() {
        const randomNum = Math.floor(Math.random() * memes.length);
        const randomMeme = allMemeImages[randomNum];
        console.log(randomMeme);
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: randomMeme.url
        }));
    }

    // form
    function handleOnChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }




    return (
        <main className="main">
            <div className="form">
                <div className="inputs-container">
                    <input
                        type="text"
                        placeholder="Shut up"
                        name='topText'
                        value={meme.topText}
                        className="form-input"
                        onChange={handleOnChange}
                    />
                    <input
                        type="text"
                        placeholder="Shut up"
                        name='bottomText'
                        value={meme.bottomText}
                        className="form-input"
                        onChange={handleOnChange}
                    />
                </div>
                <button className="btn" onClick={getMemeImage} >Get a new meme image 🖼 </button>
            </div>
            <div className="meme-container">
                <img src={meme.randomImage} alt="meme" className="meme-img" />
                <h1 className="meme-text top">{meme.topText}</h1>
                <h1 className="meme-text bottom">{meme.bottomText}</h1>
            </div>
        </main>

    )
}