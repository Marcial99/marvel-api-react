import React from "react";
import Resultado from "./Resultado";
const Resultados = ({ resultados, setResultados }) => {
  console.log(resultados);
  return (
    <div className="overflow-y-scroll h-3/4 scroll-m-0">
      {resultados.results.map((resultado) => (
        <Resultado key={resultado.id} resultado={resultado}></Resultado>
      ))}
    </div>
  );
};

export default Resultados;
