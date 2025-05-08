import * as fs from "fs";
import * as path from "path";
const filePath = path.resolve(__dirname, "../movies.json");
import { v4 as uuidv4 } from "uuid";

interface movieI {
  id: string;
  nome: string;
  src: string;
}

export const getCatalogo = () => JSON.parse(fs.readFileSync(filePath, "utf-8"));

export const getMoviebyId = (id: string): movieI | undefined => {
  const movies = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return movies.find((movie: movieI) => movie.id === id);
};

export const addMovie = (movieDto: movieI) => {
  const catalogo = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const updatedCatalogo = JSON.stringify([...catalogo, movieDto]);
  return fs.writeFileSync(filePath, updatedCatalogo);
};

export const patchMovie = (id: string, movieDto: movieI) => {
  let movies = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const selectedIndex = movies.findIndex((movies: movieI) => movies.id == id);
  movies[selectedIndex] = { ...movies[selectedIndex], ...movieDto };
  return fs.writeFileSync(filePath, JSON.stringify(movies));
};

export const deleteMovie = (id: string) => {
  let movies = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const selectedIndex = movies.findIndex((movies: movieI) => movies.id == id);
  movies.splice(selectedIndex, 1);
  return fs.writeFileSync(filePath, JSON.stringify(movies));
};
