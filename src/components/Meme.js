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

        console.log(meme)
    }



    return (
        <main className="main">
            <div className="form">
                <div className="inputs-container">
                    <input type="text" placeholder="Shut up" className="form-input" />
                    <input type="text" placeholder="Shut up" className="form-input" />
                </div>
                <button className="btn" onClick={getMemeImage} >Get a new meme image 🖼 </button>
            </div>
            <img src={meme.randomImage} alt="meme" className="meme-img" />
        </main>

    )
}