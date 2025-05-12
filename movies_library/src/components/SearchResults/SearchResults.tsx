import { useContext } from "react";
import MovieBox from "../MovieBox";
import style from "./searchresults.module.css";
import { searchedMoviesListContext } from "../../App/App";

export const SearchResults = () => {
  const { searchedMoviesList } = useContext(searchedMoviesListContext);

  return (
    <section className={style.searchResultsBox}>
      {searchedMoviesList.map((movie) => (
        <MovieBox
          key={movie.id}
          src={movie.src}
          title={movie.nome}
          id={movie.id}
        />
      ))}
    </section>
  );
};
