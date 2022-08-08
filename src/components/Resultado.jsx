import React from "react";

const Resultado = ({
  resultado,
  resultadoDetalle,
  setResultadoDetalle,
  setVerResultado,
  setAnimarDetalle,
}) => {
  const { id, stories, series, comics, description, name, thumbnail } =
    resultado;
  const image = thumbnail.path + "." + thumbnail.extension;
  const handleSeeDetail = () => {
    setResultadoDetalle(resultado);
    setVerResultado(true);
    setAnimarDetalle(true);
  };
  return (
    <div
      className="flex bg-green-50 border-b  hover:bg-green-100 rounded-xl m-7 shadow-md shadow-green-300 hover:shadow-xl hover:shadow-green-400 hover:-translate-y-2 transition-all"
      onClick={handleSeeDetail}
    >
      <div className="w-1/3">
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full rounded-tl-lg rounded-bl-lg"
        />
      </div>
      <div className="w-2/3 flex flex-col p-4">
        <p className="font-bold text-2xl">{name}</p>
        <p>{description}</p>
        <p>
          <span>#Comics:</span>
          {comics.available}
        </p>
        <p>
          <span>#Series:</span>
          {series.available}
        </p>
        <p>
          <span>#Stories:</span>
          {stories.available}
        </p>
      </div>
    </div>
  );
};

export default Resultado;
