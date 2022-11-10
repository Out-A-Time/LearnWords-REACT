import { wordList, headerRandomCharacters } from "./words.js";

//GET RANDOM WORD FROM WORD.JS
export const randomWord = () => {
  const getRandomNumber = Math.floor(Math.random() * wordList.length) + 1;
  const getRandomWord = wordList[getRandomNumber];
  console.log(`Word #${getRandomNumber}: ${getRandomWord}`);

  return getRandomWord.toUpperCase();
};

//Random Word into ARRAY
export const randomWordIntoArray = (word) => {
  const splitWord = word.split("");
  console.log(splitWord);
  return splitWord;
};

// CREATES EMPTY WORD BOARD
export const createEmptyBoard = (array) => {
  const guessWordObject = {};
  for (let i = 1; i <= 6; i++) {
    guessWordObject[`row${i}`] = [];
    const underscore = "_";
    for (let j = 0; j < array.length; j++) {
      // console.log(`row${i}`);
      guessWordObject[`row${i}`].push(underscore);
    }
  }
  return guessWordObject;
};
