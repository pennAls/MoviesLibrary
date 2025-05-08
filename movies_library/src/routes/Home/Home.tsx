import { useContext } from "react";
import "./home.css";
import HeroSection from "../../components/HeroSection";
import SearchResults from "../../components/SearchResults";
import { searchedMoviesListContext } from "../../App/App";

export const Home = () => {
  const { searchedMoviesList } = useContext(searchedMoviesListContext);

  return (
    <div className="App">
      <HeroSection />
      {searchedMoviesList.length > 0 && <SearchResults />}
    </div>
  );
};
