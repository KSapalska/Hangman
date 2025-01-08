import React from "react";
import Header from "./components/Header";
import Status from "./components/Status";
import { languages } from "./languages";
import clsx from 'clsx';


function App() {
  const [currentWord, setCurrentWord] = React.useState("kapibara");
  const letterElements = currentWord.split("")
;
  const [guessedLetters, setGuessedLetters] = React.useState([]);
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

    const word = letterElements.map((letter, index) => (
    <span key={index} className="letter">{guessedLetters.includes(letter) ?
      letter.toUpperCase(): "" }
    </span>
  ));
  const keybordElements = alphabet.split("").map((letter) => {
    const isGuessed =guessedLetters.includes(letter)
    const isCorrect= isGuessed && currentWord.includes(letter)
    const isWrong = isGuessed && !currentWord.includes(letter)


    const className= clsx({
correct: isCorrect,
wrong: isWrong
    })
    
     
    return (
      <button
      className={className}
      key={letter}
      onClick={() => handleClick(letter)}
    >
      {letter.toUpperCase()}
    </button>
  )
  }
  );

  

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
