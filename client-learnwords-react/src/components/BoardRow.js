import "./BoardRow.css";

export function BoardRow(props) {
  return (
    <>
      <div className="guess">
        <div className="guess-letter"></div>
        <div className="guess-letter"></div>
        <div className="guess-letter"></div>
        <div className="guess-letter"></div>
        <div className="guess-letter"></div>
      </div>
    </>
  );
}
