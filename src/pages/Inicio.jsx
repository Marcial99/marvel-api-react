import React, { useState } from "react";
import Formulario from "../components/Formulario";
import Resultados from "../components/Resultados";
import ResultadoDetalle from "../components/ResultadoDetalle";
const Inicio = () => {
  const [resultados, setResultados] = useState([]);
  const [verResultado, setVerResultado] = useState(true);
  const [resultadoDetalle, setResultadoDetalle] = useState({});
  const [animarDetalle, setAnimarDetalle] = useState(false);
  return (
    <div className="flex flex-col h-screen font-roboto w-full">
      <h1 className="text-center font-bold text-6xl uppercase mt-5">
        Marvel API
      </h1>
      <Formulario
        resultados={resultados}
        setResultados={setResultados}
      ></Formulario>
      {resultados.total ? (
        resultados.total > 0 ? (
          <Resultados
            resultados={resultados}
            setResultados={setResultados}
            resultadoDetalle={resultadoDetalle}
            setResultadoDetalle={setResultadoDetalle}
            setVerResultado={setVerResultado}
            setAnimarDetalle={setAnimarDetalle}
          ></Resultados>
        ) : (
          "Sin resultados"
        )
      ) : (
        ""
      )}
      {verResultado && resultadoDetalle.id ? (
        <ResultadoDetalle
          verResultado={verResultado}
          setVerResultado={setVerResultado}
          resultadoDetalle={resultadoDetalle}
          setAnimarDetalle={setAnimarDetalle}
          animarDetalle={animarDetalle}
        ></ResultadoDetalle>
      ) : (
        ""
      )}
    </div>
  );
};

export default Inicio;
