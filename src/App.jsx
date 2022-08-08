import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Layout from "./layout/layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio></Inicio>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
