import React from "react";
import Header from "./components/Header";
import Status from "./components/Status";
import { languages } from "./languages";



function App() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const languageElements = languages.map((language) => {
    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color,
    };
    return (
      <span className="chip" key={language.name} style={styles}>
        {language.name}
      </span>
    );
  });

  const [currentWord, setCurrentWord] = React.useState("kapibara");
  const letterElements = currentWord.split("");

  const word = letterElements.map((letter, index) => (
    <span key={index} className="letter">
      {letter.toUpperCase()}
    </span>
  ));
  const keybordElements = alphabet.split("").map((letter) => (
    <button
      className="letterK"
      key={letter}
      onClick={() => handleClick(letter.toUpperCase())}
    >
      {letter.toUpperCase()}
    </button>
  ));

  const [guessedLetters, setGuessedLetters] = React.useState([]);
  console.log(guessedLetters);

  function handleClick(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  return (
    <>
      <main>
        <Header />
        <Status />
        <section className="language-chips">{languageElements}</section>
        <section className="word">{word}</section>
        <section className="keyboard">{keybordElements}</section>
        <button className="new-game">New Game</button>
      </main>
    </>
  );
}

export default App;
