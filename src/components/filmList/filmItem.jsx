import { useState } from "react";
import css from "./filmList.module.css";
import { GenresItem } from "./GenresItem";
import { Link } from "react-router-dom";
import { Modal } from "../modal/Modal";

const imgScr = "https://image.tmdb.org/t/p/w500/";

export const FilmItem = ({ film = null, genres, filmLib = null }) => {
  const [toggle, setToggle] = useState(false);
  const [filmId, setFilmId] = useState();
  const [filmIdLib, setFilmIdLib] = useState();

  let filmGenre = [];
  let fimlGenreLib = [];

  if (film !== null) {
    filmGenre = film.genre_ids;
  }
  if (filmLib !== null) {
    fimlGenreLib = filmLib.genres;
  }

  let genresList = [];

  if (film !== []) {
    if (filmGenre.length) {
      for (const item of filmGenre) {
        if (item !== undefined) {
          const genresFind = genres.find(({ id }) => id === item);
          genresList.push(genresFind);
        }
      }
    }
  }
  if (filmLib !== []) {
    if (fimlGenreLib.length) {
      for (const item of fimlGenreLib) {
        if (item !== undefined) {
          const genresFind = genres.find(({ id }) => id === item);
          genresList.push(genresFind);
        }
      }
    }
  }

  const onClick = () => {
    setToggle(!toggle);
    if (film !== null) {
      setFilmId(film.id);
    }
    if (filmLib !== null) {
      setFilmIdLib(filmLib.id);
    }
  };

  return (
    <div className={css.box}>
      {film !== null && (
        <div>
          <Link onClick={onClick} className={css.link}>
            {film.poster_path === null ? (
              <img
                className={css.image}
                src={imgScr + "wwemzKWzjKYJFfCeiB57q3r4Bcm.png"}
                alt="foto film"
              ></img>
            ) : (
              <img
                className={css.image}
                src={imgScr + film.poster_path}
                alt="foto film"
              ></img>
            )}
            <h2 className={css.title}>{film.title ? film.title : film.name}</h2>
            <div className={css.boxGenre}>
              <ul className={css.listItem}>
                <GenresItem genresList={genresList} />
              </ul>
              <p className={css.date}>{film.release_date}</p>
            </div>
          </Link>
        </div>
      )}
      {filmLib !== null && (
        <div>
          <Link onClick={onClick} className={css.link}>
            {filmLib.poster_path === null ? (
              <img
                className={css.image}
                src={imgScr + "wwemzKWzjKYJFfCeiB57q3r4Bcm.png"}
                alt="foto film"
              ></img>
            ) : (
              <img
                className={css.image}
                src={imgScr + filmLib.poster_path}
                alt="foto film"
              ></img>
            )}
            <h2 className={css.title}>
              {filmLib.title ? filmLib.title : filmLib.name}
            </h2>
            <div className={css.boxGenre}>
              <ul className={css.list}>
                <GenresItem genresList={genresList} />
              </ul>
              <p className={css.date}>{filmLib.release_date}</p>
            </div>
          </Link>
        </div>
      )}

      {toggle && (
        <Modal
          film={filmIdLib ? filmIdLib : filmId}
          filmIdLib={filmIdLib}
          toggle={toggle}
          onClickModal={onClick}
          filmLib={filmIdLib}
        />
      )}
    </div>
  );
};
