import React, { useState } from "react";
import Formulario from "../components/Formulario";
import Resultados from "../components/Resultados";
const Inicio = () => {
  const [resultados, setResultados] = useState([]);
  return (
    <div className="flex flex-col h-full ">
      <h1>Introduce un térmio para tu búsqueda</h1>
      <Formulario
        resultados={resultados}
        setResultados={setResultados}
      ></Formulario>
      {resultados.total ? (
        resultados.total > 0 ? (
          <Resultados resultados={resultados}></Resultados>
        ) : (
          "Sin resultados"
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default Inicio;
