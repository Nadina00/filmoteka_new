import { useDispatch } from "react-redux";
import watchedOperations from "../../redux/watched/Watched-operations";
import myLibraryOperations from "../../redux/mylibrary/MyLibrary-operations";
import css from "./Button.module.css";

export const Button = ({ data }) => {

  const dispatch = useDispatch();

  const onClickAddWatched = (evt) => {
    evt.preventDefault();
    dispatch(watchedOperations.addWatched(data));
    dispatch(myLibraryOperations.myLibraryDel(data.id));
  };
  const onClickMyLibrary = (evt) => {
    evt.preventDefault();
    dispatch(myLibraryOperations.addMyLibrary(data));
    dispatch(watchedOperations.watchedDel(data.id));
  };

  return (
    <div className={css.btnList}>
      <button className={css.btn} onClick={onClickAddWatched}>
        add to Watched
      </button>
      <button className={css.btn} onClick={onClickMyLibrary}>
        add to queue
      </button>
    </div>
  );
};
