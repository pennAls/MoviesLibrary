import { useContext, useEffect } from "react";
import { getMovies } from "../../services/moviesService";
import { moviesType } from "../../types/moviesType";
import MovieBox from "../../components/MovieBox";
import style from "./estantes.module.css";
import { moviesListContext } from "../../App/App";

const Estantes = () => {
  const { moviesList, setMoviesList } = useContext(moviesListContext);

  useEffect(() => {
    const getAllMovies = async () => {
      const allMovies = await getMovies();
      setMoviesList(allMovies);
    };
    getAllMovies();
  }, [setMoviesList]);

  return (
    <section className={style.estantes}>
      {moviesList.map((movie: moviesType) => (
        <MovieBox
          key={movie.id}
          title={movie.nome}
          src={movie.src}
          id={movie.id}
        ></MovieBox>
      ))}
    </section>
  );
};

export default Estantes;
