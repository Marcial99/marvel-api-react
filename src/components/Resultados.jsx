import React from "react";
import Resultado from "./Resultado";
const Resultados = ({
  resultados,
  setResultados,
  resultadoDetalle,
  setResultadoDetalle,
  setVerResultado,
  setAnimarDetalle,
}) => {
  console.log(resultados);
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2  overflow-y-auto h-3/4 scroll-m-0">
      {resultados.results.map((resultado) => (
        <Resultado
          key={resultado.id}
          resultado={resultado}
          resultadoDetalle={resultadoDetalle}
          setResultadoDetalle={setResultadoDetalle}
          setVerResultado={setVerResultado}
          setAnimarDetalle={setAnimarDetalle}
        ></Resultado>
      ))}
    </div>
  );
};

export default Resultados;
