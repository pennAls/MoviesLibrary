import { moviesType } from "../../types/moviesType.ts";
import { useContext, useEffect } from "react";

import { getMovies } from "../../services/moviesService.ts";
import { searchedMoviesListContext } from "../../App/App.tsx";

export const SearchInput = ({ style }: CSSModuleClasses) => {
  const { setsearchedMovies } = useContext(searchedMoviesListContext);

  useEffect(() => {
    setsearchedMovies([]);
  }, [setsearchedMovies]);

  return (
    <>
      <input
        className={style}
        onChange={async (e) => {
          const pesquisaUser = e.target.value;
          if (pesquisaUser === "") {
            setsearchedMovies([]);
          } else {
            const searchedMoviesList = await getMovies();
            const resultadoPesquisa = searchedMoviesList.filter(
              (movie: moviesType) =>
                movie.nome.toLowerCase().includes(pesquisaUser.toLowerCase())
            );
            setsearchedMovies(resultadoPesquisa);
            sessionStorage.setItem("userInput", pesquisaUser);
          }
        }}
        placeholder="Qual o seu próximo filme?"
        type="text"
      />
    </>
  );
};
