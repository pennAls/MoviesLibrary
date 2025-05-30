import { useContext } from "react";
import { searchedMoviesListContext } from "../../App/App";
import AddButton from "../Buttons/AddButton";
import { Carrossel } from "../Carrossel/Carrossel";
import SearchInput from "../SearchInput";
import style from "./hero.module.css";
import SearchResults from "../SearchResults";

export const HeroSection = () => {
  const { searchedMoviesList } = useContext(searchedMoviesListContext);
  return (
    <>
      <section className={style.hero}>
        <div className={style.halfOne}>
          <div className={style.boxTitle}>
            <img
              className={style.logo}
              src="/assets/imgs/logo2.png"
              alt="Logo"
            />
            <h1 className={style.title}>
              Movies<strong>Library</strong>
            </h1>
          </div>
          <p className={style.subtitle}>
            Não sabe por onde começar? Salve suas produções favoritas, registre
            cada descoberta e organize sua coleção nas nossas estantes virtuais.
          </p>
          <AddButton></AddButton>
        </div>
        <div className={style.halfTwo}>
          <Carrossel></Carrossel>
          <SearchInput style={style.inputHero}></SearchInput>
        </div>
      </section>
      {searchedMoviesList.length > 0 && <SearchResults />}
    </>
  );
};
