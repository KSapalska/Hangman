import React from "react";
import Header from "./components/Header";
import Status from "./components/Status";
import { languages } from "./languages";
import clsx from 'clsx';
import {getFarewellText} from "./utils";


function App() {
  const [currentWord, setCurrentWord] = React.useState("kapibara")
  const [guessedLetters, setGuessedLetters] = React.useState([]);
  const [farewellText, setFarewellText] = React.useState("");

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const wrongGuessArray= guessedLetters.filter(letter=> !currentWord.includes(letter))
  const wrongGuessCount= wrongGuessArray.length
  const isGameWon = currentWord.split("").every(letter=>guessedLetters.includes(letter))
  


  const isGameLost = wrongGuessCount >= languages.length - 1
  const isGameOver = isGameWon || isGameLost
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

  const letterElements = currentWord.split("")
  
  const languageElements = languages.map((language,index) => {
    
    const isLanguageLost= index<wrongGuessCount
     
    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color,
    };
    return (
      <span className={`chip ${isLanguageLost ? "lost" : ""}`}
      key={language.name} 
      style={styles}>
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
      disabled={isGameOver}
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
    
    if (!currentWord.includes(letter)) {
      const lostLanguage = languages[wrongGuessCount];
      setFarewellText(getFarewellText(lostLanguage.name));
  }}

  return (
    <>
      <main>
        <Header />
         <Status isGameOver={isGameOver} isGameWon={isGameWon} farewellText={farewellText} />
        <section className="language-chips">{languageElements}</section>
        <section className="word">{word}</section>
        <section className="keyboard">{keybordElements}</section>
        { isGameOver && <button className="new-game">New Game</button>}
      </main>
    </>
  );
  }

export default App;
