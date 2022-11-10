import { useState } from "react";

import {
  randomWord,
  randomWordIntoArray,
  createEmptyBoard,
} from "../gameModel";

export function Header() {
  const getWord = randomWord();

  const [word, setWord] = useState(getWord);
  const randomWordAsArray = randomWordIntoArray(word);

  const wordsBoard = createEmptyBoard(randomWordAsArray);
  console.log("wordsBoard: ", wordsBoard);

  const rowCounterMax = Object.keys(wordsBoard).length;
  let rowCounter = 1; //Max 6 - object length
  let characterCounter = 0; //Max 4 (5 - 1)
  console.log("Row Counter: ", rowCounter);
  console.log("Access wordsBoard: ", wordsBoard[`row${rowCounter}`]);

  return <h1>{word}</h1>;
}
