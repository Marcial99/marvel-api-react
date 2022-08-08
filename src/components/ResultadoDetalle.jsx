import React from "react";

const ResultadoDetalle = ({
  verResultado,
  setVerResultado,
  resultadoDetalle,
  setAnimarDetalle,
  animarDetalle,
}) => {
  const {
    comics,
    description,
    events,
    id,
    modified,
    name,
    series,
    stories,
    thumbnail,
    urls,
  } = resultadoDetalle;
  const image = thumbnail.path + "." + thumbnail.extension;
  const handleCerrar = () => {
    setAnimarDetalle(false);
    setTimeout(() => {
      setVerResultado(false);
    }, 650);
  };
  return (
    <div
      className={`w-full h-full bg-black/50 fixed overflow-auto md:overflow-hidden p-5 m-0 ${
        animarDetalle ? "swing-in-top-fwd" : "roll-out-blurred-left"
      }`}
    >
      <div
        className="right-0 top-0 absolute bg-white p-3"
        onClick={handleCerrar}
      >
        Cerrar
      </div>
      <div className="flex flex-col md:flex-row p-5">
        <div className="w-full md:w-2/5 md:h-screen p-5">
          <img
            src={image}
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="w-full md:w-3/5 text-white text-2xl p-5 md:overflow-y-auto md:h-screen">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>Id:{id}</div>
            <div>Last modified: {modified}</div>
          </div>

          <p className="text-6xl mt-8">
            <span className="font-bold">Name:</span>
            {name}
          </p>
          <p className="text-justify mt-8">
            <span className="font-bold">Description:</span>
            <br />
            {description}
          </p>
          <p className=" mt-8">
            <span className="font-bold">#Series: </span>
            {series.available}
          </p>
          <p className=" mt-8">
            <span className="font-bold">#Events: </span>
            {events.available}
          </p>
          <p className=" mt-8">
            <span className="font-bold">#Stories: </span>
            {stories.available}
          </p>
          <p className=" mt-8">
            <span className="font-bold">#Comics: </span>
            {comics.available}
          </p>
          {urls.map((url) => (
            <a
              key={url.type}
              className="block bg-indigo-600 p-3 text-center my-5 uppercase font-bold transition-all hover:shadow-lg hover:shadow-white/40 rounded-lg"
              href={url.url}
              target="_blank"
            >
              {url.type}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultadoDetalle;
