import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/";
import Home from "./routes/Home/Home.tsx";
import Favoritos from "./routes/Favoritos/favoritos.tsx";
import Estantes from "./routes/Estantes/estantes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<p>categorias</p>} />
        <Route path="/estantes" element={<Estantes />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
