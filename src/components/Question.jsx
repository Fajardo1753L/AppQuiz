export function Question({ preguntaActual, numPre, setNumPre }) {
  return (
    <div>
      <div>
        <h2>{preguntaActual.pregunta}</h2>
        <ul>
          <li>
            <input type="radio" id="a" className="circulo"></input>
            <label>{preguntaActual.a}</label>
          </li>
          <li>
            <input type="radio" id="b" className="circulo"></input>
            <label>{preguntaActual.b}</label>
          </li>
          <li>
            <input type="radio" id="c" className="circulo"></input>
            <label>{preguntaActual.c}</label>
          </li>
          <li>
            <input type="radio" id="d" className="circulo"></input>
            <label>{preguntaActual.d}</label>
          </li>
        </ul>
        <button
          onClick={() => {
            if (numPre <= 2) {
              setNumPre(numPre + 1);
            } else {
            }
          }}
        >
          send
        </button>
      </div>
    </div>
  );
}
