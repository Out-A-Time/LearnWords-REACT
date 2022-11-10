import { useRef } from "react";

import { BoardRow } from "./BoardRow";

import { createEmptyBoard } from "../gameModel";

export function Board(props) {
  //   const wordsBoard = createEmptyBoard(randomWordAsArray);
  //   console.log("wordsBoard: ", wordsBoard);

  //   const rowCounterMax = Object.keys(wordsBoard).length;
  //   let rowCounter = 1; //Max 6 - object length
  //   let characterCounter = 0; //Max 4 (5 - 1)
  //   console.log("Row Counter: ", rowCounter);
  //   console.log("Access wordsBoard: ", wordsBoard[`row${rowCounter}`]);

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
    <>
      <BoardRow />
      <BoardRow />
      <BoardRow />
      <BoardRow />
      <BoardRow />
      <BoardRow />
    </>
  );
}
