import { useEffect, useState } from "react";
import { getMovies } from "../../services/moviesService";
import { moviesType } from "../../types/moviesType";
import MovieBox from "../../components/MovieBox";
import style from "./estantes.module.css";

const Estantes = () => {
  const [moviesEstante, setMoviesEstante] = useState<moviesType[]>([]);

  useEffect(() => {
    const getAllMovies = async () => {
      const allMovies = await getMovies();
      setMoviesEstante(allMovies);
    };
    getAllMovies();
  }, []);

  return (
    <section className={style.estantes}>
      {moviesEstante.map((movie: moviesType) => (
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
