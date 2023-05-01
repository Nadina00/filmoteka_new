import { useWatched } from "../../hook/watchedHook"
import { useGenres } from "../../hook/genresHook";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { FilmItem } from "../filmList/filmItem";
import watchedOperations from "../../redux/watched/Watched-operations";
import css from "./MyLibrary.module.css"

export const Watched = () =>{
    const { itemsWatch, isLoader } = useWatched();
    const {genres} = useGenres();
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(watchedOperations.watchedList(itemsWatch))
      }, [dispatch, itemsWatch])
      
          return (
              <div className={css.box}>
                <ul className={css.list}>
                  {isLoader ? (
                    <p>Loader</p>
                  ) : (
                    itemsWatch.map((filmLib) => (
                      <li key={filmLib.id}>
                        <FilmItem filmLib={filmLib} genres={genres} />
                      </li>
                    ))
                  )}
                </ul>
              </div>
            );
          };
          

