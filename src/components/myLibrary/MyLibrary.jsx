import { useMyLibrary } from "../../hook/myLibraryHook";
import { FilmItem } from "../filmList/filmItem";
import { useGenres } from "../../hook/genresHook";
import css from "./MyLibrary.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import myLibraryOperations from "../../redux/mylibrary/MyLibrary-operations";

export const MyLibrary = () => {
  const { itemsMyLib, isLoader } = useMyLibrary();
  const { genres } = useGenres();
  const dispatch = useDispatch();
  console.log(itemsMyLib);

  useEffect(() => {
    dispatch(myLibraryOperations.myLibraryList(itemsMyLib));
  }, [dispatch, itemsMyLib]);

  return (
    <div className={css.box}>
      <ul className={css.list}>
        {isLoader ? (
          <p>Loader</p>
        ) : (
          itemsMyLib.map((filmLib) => (
            <li key={filmLib.id}>
              <FilmItem filmLib={filmLib} genres={genres} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
