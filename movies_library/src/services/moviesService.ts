import axios from "axios";
import { moviesType } from "../types/moviesType";

const moviesLibraryAPI = axios.create({
  baseURL: "https://movieslibraryserver.onrender.com/movies",
});

const getMovies = async () => {
  try {
    const response = await moviesLibraryAPI.get("");
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

const deleteMovie = async (id: string) => {
  try {
    await moviesLibraryAPI.delete(`/${id}`);
  } catch (error) {
    console.error("Erro ao deletar filme:", error);
  }
};

const patchMovie = async (id: string, selectedMovie: moviesType) => {
  try {
    const response = await moviesLibraryAPI.patch("", {
      nome: selectedMovie.nome,
      src: selectedMovie.src,
      id: id,
    });

    return response;
  } catch (error) {
    console.error("Erro ao editar filme:", error);
    throw error;
  }
};

export { getMovies, addMovies, getbyID, deleteMovie, patchMovie };
