import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFilms } from "../../hook/filmHook";
import { useGenres } from "../../hook/genresHook";
import filmOperations from "../../redux/films/films-operations";
import { FilmItem } from "./filmItem";
import css from "./filmList.module.css";
import genresOperations from "../../redux/genres/genres-operations";
import usePagination from "../../hook/usePagination";
import classNames from "classnames";

export const FilmList = () => {
  const dispatch = useDispatch();
  const { items, isLoader } = useFilms();
  const { genres } = useGenres();
 
  const {
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 20,
    count: 300,
  });

  useEffect(() => {
    dispatch(filmOperations.filmPopulerList(page));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(genresOperations.genresList());
  }, [dispatch]);


  return (
    <div className={css.boxList}>
      <ul className={css.list}>
        {isLoader ? (
          <p>Loader</p>
        ) : (
          items.map((film) => (
            <li key={film.id}>
              <FilmItem film={film} genres={genres} />
            </li>
          ))
        )}
      </ul>
      <div className="pagination">
  
  <button onClick={prevPage} className={css.page}>
    &larr;
  </button>
  {/* @ts-ignore */}
  {[...Array(totalPages).keys()].map((el) => (
    <button
      onClick={() => setPage(el + 1)}
      key={el}
      className={classNames(css.page, page === el + 1 ? css.active : "")}
    >
      {el + 1}
    </button>
  ))}
  <button onClick={nextPage} className={css.page}>
    &rarr;
  </button>
</div>
    </div>
  );
};
