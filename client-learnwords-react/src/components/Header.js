import { useState } from "react";

import { randomWord, randomWordIntoArray } from "../gameModel";

export function Header() {
  const getWord = randomWord();

  const [word, setWord] = useState(getWord);
  const randomWordAsArray = randomWordIntoArray(word);

  return <h1>{word}</h1>;
}
