import "./App.css";
import { wordList, headerRandomCharacters } from "./words.js";
import { useEffect, useState } from "react";

import { Welcome } from "./Header";
import { Footer } from "./Footer";

function App() {
  const randomWord = () => {
    const getRandomNumber = Math.floor(Math.random() * wordList.length) + 1;
    const getRandomWord = wordList[getRandomNumber];
    console.log(`Word #${getRandomNumber}: ${getRandomWord}`);

    return getRandomWord.toUpperCase();
  };

  //Random Word into ARRAY
  // function randomWordIntoArray(word) {
  //   const splitWord = word.split("");
  //   console.log(splitWord);
  //   return splitWord;
  // }

  // const [word, setWord] = useState(getRandomWord);

  // CREATES EMPTY WORD BOARD
  // const createEmptyBoard = () => {
  //   const guessWordObject = {};
  //   for (let i = 1; i <= 6; i++) {
  //     guessWordObject[`row${i}`] = [];
  //     const underscore = "_";
  //     for (let j = 0; j < randomWordAsArray.length; j++) {
  //       // console.log(`row${i}`);
  //       guessWordObject[`row${i}`].push(underscore);
  //     }
  //   }
  //   return guessWordObject;
  // };

  // const randomWordAsArray = randomWordIntoArray(word);
  // const wordsBoard = createEmptyBoard();
  // console.log("wordsBoard: ", wordsBoard);

  // const rowCounterMax = Object.keys(wordsBoard).length;
  // let rowCounter = 1; //Max 6 - object length
  // let characterCounter = 0; //Max 4 (5 - 1)
  // console.log("Row Counter: ", rowCounter);
  // console.log("Access wordsBoard: ", wordsBoard[`row${rowCounter}`]);

  // MIRRORS WORD BOARD ON THE HTML PAGE
  // function mirrorWordBoard(board) {
  //   for (let i = 1; i <= rowCounterMax; i++) {
  //     for (let j = 0; j < board[`row${i}`].length; j++) {
  //       let gridOnPage = document
  //         .querySelectorAll(`.guess`)
  //         [i - 1].querySelector(`.guess :nth-child(${[j + 1]})`);
  //       gridOnPage.textContent = board[`row${i}`][j];
  //     }
  //   }
  // }
  // mirrorWordBoard(wordsBoard);

  function Header(props) {
    //GET RANDOM WORD FROM WORD.JS
    return <h1>{props.word}</h1>;
  }

  return (
    <div className="App">
      <Header word={randomWord()} />
      <Welcome greet={"SARA"} />

      <div className="guess">
        <div className="guess-letter"></div>
        <div className="guess-letter"></div>
        <div className="guess-letter"></div>
        <div className="guess-letter"></div>
        <div className="guess-letter"></div>
      </div>

      <button>A</button>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
