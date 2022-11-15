// import { useRef } from "react";

import { BoardRow } from "./BoardRow";

export function Board(props) {
  console.log("here", props.word);
  console.log("row counter max", props.rowCounterMax);

  return (
    <>
      <BoardRow mark={props.letterOnBoard} />
      <BoardRow />
      <BoardRow />
      <BoardRow />
      <BoardRow />
      <BoardRow />
    </>
  );
}
