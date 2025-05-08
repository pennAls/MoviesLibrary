import { useEffect, useState } from "react";
import { getbyID } from "../../services/moviesService";
import { moviesType } from "../../types/moviesType";
import style from "./movieboxmodal.module.css";

export const MovieBoxModal = ({
  closeModal,
  id,
}: {
  closeModal: () => void;
  id: string;
}) => {
  const [filteredMovie, setFilteredMovie] = useState<moviesType | null>(null);
  useEffect(() => {
    const getMoviebyID = async () => {
      const filteredMovieDTO = await getbyID(id);
      setFilteredMovie(filteredMovieDTO);
    };

    getMoviebyID();
  }, [id]);

  return (
    <div className={style.focusItem}>
      {filteredMovie && (
        <>
          <div className={style.halfone}>
            <img className={style.imgModal} src={filteredMovie.src} alt="" />
          </div>
          <div className={style.halftwo}>
            <h3>{filteredMovie.nome}</h3>
            <button className={style.closeButton} onClick={closeModal}>
              Fechar
            </button>
          </div>
        </>
      )}
    </div>
  );
};
