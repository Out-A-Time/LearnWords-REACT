import "./App.css";

import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { Board } from "./components/Board";
import { Keyboard } from "./components/Keyboard";
import { Footer } from "./components/Footer";

function App() {
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

  return (
    <div className="App">
      <Header />
      <Board />
      <Keyboard />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
