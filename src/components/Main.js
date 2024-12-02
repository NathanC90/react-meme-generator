import React, { useState, useEffect } from "react";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const newMemeUrl = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      imageUrl: newMemeUrl,
    }));
  }

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <main className="main-content">
      <div className="form">
        <div className="top-text-container">
          <label>Top text</label>
          <input
            className="top-text-input"
            type="text"
            placeholder="Top text"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
        </div>
        <div className="bottom-text-container">
          <label>Bottom text</label>
          <input
            className="bottom-text-input"
            type="text"
            placeholder="Bottom text"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </div>
        <button onClick={getImage} className="get-image-button">
          Get a new image 🖼️
        </button>
      </div>
      <div className="meme">
        <img className="meme-image" src={meme.imageUrl} alt="meme" />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
