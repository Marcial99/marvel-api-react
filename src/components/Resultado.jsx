import React from "react";

const Resultado = ({ resultado }) => {
  const { id, comics, description, name, thumbnail } = resultado;
  const image = thumbnail.path + "." + thumbnail.extension;
  return (
    <div className="flex bg-blue-700 border-b border-b-blue-900 hover:bg-blue-800 rounded-lg m-2">
      <div className="w-1/3">
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full rounded-tl-lg rounded-bl-lg"
        />
      </div>
      <div className="w-2/3 flex flex-col p-4">
        <p className="font-bold text-2xl">{name}</p>
        <p>
          <span>Descripción</span>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Resultado;
