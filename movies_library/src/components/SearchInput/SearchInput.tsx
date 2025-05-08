import { moviesType } from "../../types/moviesType.ts";
import { useContext, useEffect, useState } from "react";

import { getMovies } from "../../services/moviesService.ts";
import { searchedMoviesListContext } from "../../App/App.tsx";

export const SearchInput = ({ style }: CSSModuleClasses) => {
  const { setsearchedMovies } = useContext(searchedMoviesListContext);
  const [inputValue, setInputValue] = useState("");
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  useEffect(() => {
    setsearchedMovies([]);
  }, [setsearchedMovies]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pesquisaUser = e.target.value;
    setInputValue(pesquisaUser);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(async () => {
      if (pesquisaUser === "") {
        setsearchedMovies([]);
      } else {
        const searchedMoviesList = await getMovies();
        const resultadoPesquisa = searchedMoviesList.filter(
          (movie: moviesType) =>
            movie.nome.toLowerCase().includes(pesquisaUser.trim().toLowerCase())
        );
        setsearchedMovies(resultadoPesquisa);
        sessionStorage.setItem("userInput", pesquisaUser);
      }
    }, 500);

    setTimeoutId(newTimeoutId);
  };

  return (
    <>
      <input
        className={style}
        onChange={handleChange}
        placeholder="Qual o seu próximo filme?"
        type="text"
        value={inputValue}
      />
    </>
  );
};
