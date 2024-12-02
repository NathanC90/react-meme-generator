import React from "react";
import logo from '../images/meme-logo.png'

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="troll face as website logo" />
      <h1 className="title">Meme Generator</h1>
    </header>
  );
}
