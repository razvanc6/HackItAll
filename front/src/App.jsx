import { useState } from "react";
import reactLogo from "./assets/harta.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <a target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <div>salut</div>
      </a>
    </>
  );
}

export default App;
