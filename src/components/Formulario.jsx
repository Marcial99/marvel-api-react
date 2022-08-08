import React from "react";
import { Formik, Form, Field } from "formik";
import Error from "./Error";
import * as Yup from "yup";
const Formulario = ({ resultados, setResultados }) => {
  const busquedaSchema = Yup.object().shape({
    busqueda: Yup.string().required("El término de busqueda es obligatorio"),
  });
  const handleSubmit = (values) => {
    const busquedaApi = async () => {
      const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${values.busqueda}&apikey=9eb42fd256cbe082f8fe66a6283e5958`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      console.log(resultado.data);
      setResultados(resultado.data);
    };
    busquedaApi();
  };
  return (
    <div>
      <Formik
        initialValues={{
          busqueda: "",
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={busquedaSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="busqueda" className="block mt-5 font-bold">
                Ingresa un termino para tu búsqueda, por ejemplo, Hulk
              </label>
              <Field
                id="busqueda"
                name="busqueda"
                type="text"
                placeholder="Ingresa tu búsqueda"
                className="mt-2 w-full p-3 border rounded-lg focus:border-indigo-600 focus:ring-indigo-600 focus:outline-indigo-600"
              />
              {errors.busqueda && touched.busqueda ? (
                <Error>{errors.busqueda}</Error>
              ) : (
                ""
              )}
            </div>
            <input
              type="submit"
              value="Buscar"
              className="mt-5 w-full p-3 rounded-lg bg-indigo-600
              hover:bg-indigo-700 hover:cursor-pointer text-white font-bold"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formulario;
