import { preguntas } from "./data/info.js";
import { useState, useEffect } from "react";
import { Question } from "./components/Question";
import "./App.css";

function App() {
  const [numPre, setNumPre] = useState(0);

  let score = 0;
  const preguntaActual = preguntas[numPre];

  return (
    <>
      <Question
        preguntaActual={preguntaActual}
        numPre={numPre}
        setNumPre={setNumPre}
      />
    </>
  );
}

export default App;
