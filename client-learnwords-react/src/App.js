import "./App.css";

import { Header } from "./components/Header";
import { Board } from "./components/Board";
import { Keyboard } from "./components/Keyboard";
import { Dictionary } from "./components/Dictionary";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
      <Keyboard />
      <Dictionary />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
