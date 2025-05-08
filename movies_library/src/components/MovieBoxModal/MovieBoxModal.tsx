import { useContext, useState } from "react";
import {
  deleteMovie,
  getMovies,
  patchMovie,
} from "../../services/moviesService";
import style from "./movieboxmodal.module.css";
import { moviesType } from "../../types/moviesType";
import { moviesListContext, searchedMoviesListContext } from "../../App/App";

export const MovieBoxModal = ({
  closeModal,
  id,
  src,
  title,
}: {
  closeModal: () => void;
  id: string;
  src: string;
  title: string;
}) => {
  const { setMoviesList } = useContext(moviesListContext);
  const { setsearchedMovies } = useContext(searchedMoviesListContext);

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newSrc, setNewSrc] = useState(src);

  const getUpdatedMovies = async () => {
    const response = await getMovies();
    setTimeout(() => {
      setMoviesList(response);

      const pesquisaUser = sessionStorage.getItem("userInput");

      if (pesquisaUser) {
        const filtredList = response.filter((movie: moviesType) =>
          movie.nome.toLowerCase().includes(pesquisaUser.toLowerCase())
        );
        setsearchedMovies(filtredList);
      }
      closeModal();
    }, 1000);
  };

  const tobeDeleted = async () => {
    await deleteMovie(id);
    await getUpdatedMovies();
  };

  const editMovie = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleSrcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSrc(e.target.value);
  };

  const handleSave = async () => {
    const updatedMovie: moviesType = {
      nome: newTitle,
      id: id,
      src: newSrc,
    };

    try {
      const response = await patchMovie(id, updatedMovie);
      if (response.status === 200) {
        await getUpdatedMovies();
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Erro ao editar:", error);
      alert("Não foi possível salvar as alterações.");
    }
  };

  return (
    <div className={style.focusItem}>
      {id && (
        <>
          <div className={style.halfone}>
            {src ? (
              <img className={style.imgModal} src={src} alt="Filme" />
            ) : null}
          </div>
          <div className={style.halftwo}>
            <div className={style.edit}>
              {isEditing ? (
                <div className={style.inputsDiv}>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={handleTitleChange}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSave();
                      }
                    }}
                    className={style.editInput}
                  />
                  <input
                    type="text"
                    value={newSrc}
                    onChange={handleSrcChange}
                    placeholder="Nova URL da imagem"
                    className={style.editInput}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSave();
                      }
                    }}
                  />
                </div>
              ) : (
                <h3>{title}</h3>
              )}
              <button onClick={editMovie} className={style.editButton}>
                <img
                  className={style.editButtonimg}
                  src="assets/imgs/edit.svg"
                  alt="Editar"
                />
              </button>
            </div>
            <div className={style.buttons}>
              <button className={style.closeButton} onClick={closeModal}>
                Fechar
              </button>
              <button
                onClick={() => tobeDeleted()}
                className={style.deleteButton}
                type="button"
              >
                Excluir
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
