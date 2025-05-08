import axios from "axios";
import { moviesType } from "../types/moviesType";

const moviesLibraryAPI = axios.create({
  baseURL: "http://localhost:8000/movies/",
});

const getMovies = async () => {
  try {
    const response = await moviesLibraryAPI.get("/");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const addMovies = async (newMovie: moviesType) => {
  try {
    await moviesLibraryAPI.post("", {
      nome: newMovie.nome,
      src: newMovie.src,
      id: newMovie.id,
    });
  } catch (error) {
    console.log(error);
  }
};

const getbyID = async (id: string) => {
  try {
    const response = await moviesLibraryAPI.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar filme por ID:", error);
  }
};

export { getMovies, addMovies, getbyID };
