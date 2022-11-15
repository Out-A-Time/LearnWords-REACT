export const Keyboard = (props) => {
  const alphabetRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const alphabetRow2 = ["A", "S", "D", "E", "F", "G", "H", "J", "K", "L"];
  const alphabetRow3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const alphabetRow4 = ["Enter", "<"];

  return (
    <>
      <div className="keyboard-row">
        {alphabetRow1.map((letter) => {
          return (
            <button
              className="keyboard-letter"
              onClick={() => props.onLetterPress(letter)}
            >
              {letter}
            </button>
          );
        })}
      </div>

      <div className="keyboard-row">
        {alphabetRow2.map((letter) => {
          return (
            <button
              className="keyboard-letter"
              onClick={() => props.onLetterPress(letter)}
            >
              {letter}
            </button>
          );
        })}
      </div>

      <div className="keyboard-row">
        {alphabetRow3.map((letter) => {
          return (
            <button
              className="keyboard-letter"
              onClick={() => props.onLetterPress(letter)}
            >
              {letter}
            </button>
          );
        })}
      </div>
      <div className="keyboard-row">
        {alphabetRow4.map((letter) => {
          return (
            <button
              className="keyboard-letter"
              onClick={() => props.onLetterPress(letter)}
            >
              {letter}
            </button>
          );
        })}
      </div>
    </>
  );
};
