import style from "./carrossel.module.css";

export const Carrossel = () => {
  const movies = [
    {
      src: "assets/imgs/matrix.jpg",
    },
    {
      src: "assets/imgs/lalaland.png",
    },
    {
      src: "assets/imgs/hym.jpg",
    },
    {
      src: "assets/imgs/fullmetal.webp",
    },
  ];

  return (
    <div className={style.carrossel}>
      {movies.map((movie) => (
        <article
          key={movie.src}
          style={{ backgroundImage: `url(${movie.src})` }}
          className={style.card}
        ></article>
      ))}
    </div>
  );
};
