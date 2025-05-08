// App.tsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { moviesType } from "../types/moviesType";
import { Header } from "../components/Header/Header";
import Estantes from "../routes/Estantes/estantes";
import Favoritos from "../routes/Favoritos/favoritos";
import { Home } from "../routes/Home/Home";
import "./index.css";

// eslint-disable-next-line react-refresh/only-export-components
export const moviesListContext = React.createContext<{
  moviesList: moviesType[];
  setMoviesList: React.Dispatch<React.SetStateAction<moviesType[]>>;
}>({
  moviesList: [],
  setMoviesList: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const searchedMoviesListContext = React.createContext<{
  searchedMoviesList: moviesType[];
  setsearchedMovies: React.Dispatch<React.SetStateAction<moviesType[]>>;
}>({
  searchedMoviesList: [],
  setsearchedMovies: () => {},
});

export const App = () => {
  const [moviesList, setMoviesList] = useState<moviesType[]>([]);
  const [searchedMoviesList, setsearchedMovies] = useState<moviesType[]>([]);

  return (
    <moviesListContext.Provider value={{ moviesList, setMoviesList }}>
      <searchedMoviesListContext.Provider
        value={{ searchedMoviesList, setsearchedMovies }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/estantes" element={<Estantes />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </searchedMoviesListContext.Provider>
    </moviesListContext.Provider>
  );
};
