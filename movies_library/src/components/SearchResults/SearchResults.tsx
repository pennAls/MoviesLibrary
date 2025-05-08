import { moviesType } from "../../types/moviesType";
import MovieBox from "../MovieBox";
import style from "./searchresults.module.css";

export const SearchResults = ({
  searchedMovies,
}: {
  searchedMovies: moviesType[];
}) => {
  return (
    <div className={style.searchResultsBox}>
      {searchedMovies.map((movie) => (
        <MovieBox
          key={movie.id}
          src={movie.src}
          title={movie.nome}
          id={movie.id}
        />
      ))}
    </div>
  );
};
