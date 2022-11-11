import "./App.css";

import { Header } from "./components/Header";
import { Board } from "./components/Board";
import { Keyboard } from "./components/Keyboard";
import { Dictionary } from "./components/Dictionary";
import { Footer } from "./components/Footer";

import { randomWord, randomWordIntoArray, createEmptyBoard } from "./gameModel";

function App() {
  const getWord = randomWord();
  const randomWordAsArray = randomWordIntoArray(getWord);

  const wordsBoard = createEmptyBoard();
  console.log("wordsBoard: ", wordsBoard);
  const rowCounterMax = Object.keys(wordsBoard).length;
  let rowCounter = 0; //Max 6 - object length
  let characterCounter = 0; //Max 4 (5 - 1)
  console.log(
    `Access wordsBoard at row${rowCounter} `,
    wordsBoard[`row${rowCounter}`]
  );

  // // MIRRORS WORD BOARD ON THE HTML PAGE
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

  return (
    <div className="App">
      <Header word={getWord} />
      <Board wordAsArray={randomWordAsArray} />
      <Keyboard />
      <Dictionary />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
