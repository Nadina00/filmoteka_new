import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import myLibraryOperations from "../../redux/mylibrary/MyLibrary-operations";
import watchedOperations from "../../redux/watched/Watched-operations";
import { Video } from "../video/Video";
import { Button } from "../button/Button";
import { useMyLibrary } from "../../hook/myLibraryHook";
import css from "./Modal.module.css";
import { useWatched } from "../../hook/watchedHook";

const baseUrl = "https://image.tmdb.org/t/p"
const APP_KEY = process.env.REACT_APP_KEY

export const Modal = ({ film, toggle, onClickModal, filmIdLib = null }) => {
  const [data, setData] = useState({});
  const [video, setVideo] = useState();
  const dispatch = useDispatch();
  const { itemsMyLib } = useMyLibrary();
  const { itemsWatch } = useWatched();

    useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${film}?api_key=${APP_KEY}&language=en-US`
      )
      .then((resp) => {
        const data = resp.data;
        setData(data);
      })
      .catch((error) => console.log(error));
  }, [film]);

  const onClickVideo = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${film}/videos?api_key=${APP_KEY}&language=en-US`
      )
      .then((resp) => {
        const video = resp.data.results;
        setVideo(video);
      })
      .catch((error) => console.log(error));
  };

  const onClick = (evt) => {
    evt.preventDefault();
    if (!itemsMyLib.length) {
      dispatch(myLibraryOperations.addMyLibrary(data));
    }
    if (itemsMyLib.length > 0) {
      for (const item of itemsMyLib) {
        if (!item.id) {
          return alert("Нет информации");
        }
        if (item.id !== data.id) {
          dispatch(myLibraryOperations.addMyLibrary(data));
        }
        if (item.id === data.id) {
          return alert("Такой фильм уже есть!");
        }
      }
    }
  };
  const onClickWatched = (evt) => {
    evt.preventDefault();
    if (!itemsWatch.length) {
      dispatch(watchedOperations.addWatched(data));
    }
    if (itemsWatch.length > 0) {
      for (const item of itemsWatch) {
        console.log(data.id);
        if (!item.id) {
          return alert("Нет информации");
        }
        if (data.id !== item.id) {
          dispatch(watchedOperations.addWatched(data));
        }
        if (item.id === data.id) {
          console.log("re-re");
          return alert("Такой фильм уже есть!");
        }
      }
    }
  };
  const onClickDel = (evt) => {
    evt.preventDefault();
    dispatch(myLibraryOperations.myLibraryDel(data.id));
    dispatch(watchedOperations.watchedDel(data.id));
  };

  const onClickClose = (evt) => {
    evt.preventDefault();
    onClickModal(!toggle);
  };

  let genreList = data.genres;
  console.log(genreList);

  return (
    <div className={css.modalBackground}>
      <div className={css.box}>
        <button className={css.btnClose} type="button" onClick={onClickClose}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 8L22 22" stroke="black" stroke-width="2" />
            <path d="M8 22L22 8" stroke="black" stroke-width="2" />
          </svg>
        </button>
        <div className={css.modal_box}>
          {data.poster_path === null ? (
            <img className={css.image}
              src={imgScr + "/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"}
              alt="foto film"
             
            ></img>
          ) : (
            <img
  className={css.image}
  src={`${baseUrl}/w342${data.poster_path || "/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"}`}
  srcSet={
    data.poster_path
      ? `
        ${baseUrl}/w185${data.poster_path} 185w,
        ${baseUrl}/w342${data.poster_path} 342w,
        ${baseUrl}/w500${data.poster_path} 500w
      `
      : ""
  }
  sizes="(max-width: 767px) 185px,
         (max-width: 1279px) 342px,
         500px"
  alt="film poster"
/>
          )}
          <div className={css.descriptionFilm}>
            <h2 className={css.title}> {data.title} </h2>
            <p className={css.option}>
              Vote / Votes:{" "}
              <span className={css.data}>
                {data.vote_average} / {data.vote_count}
              </span>
            </p>
            <p className={css.option}>
              Popularity: <span className={css.data}> {data.popularity}</span>
            </p>
            <p className={css.option}>
              Original Title:{" "}
              <span className={css.data}> {data.original_title}</span>
            </p>
            <p className={css.option + " " + css.dataList}>
              Genre:{" "}
              <span className={css.dataList}>
                <ul className={css.genrelist}>
                  {genreList &&
                    genreList.map((genre) => (
                      <li key={genre.id} className={css.genreItem}>
                        {genre.name}
                      </li>
                    ))}
                </ul>
              </span>
            </p>
            <h3 className={css.about}> About </h3>
            <p className={css.text}>{data.overview}</p>
            <div className={css.btn_box}>
              <button className={css.btn} onClick={onClickVideo}>
                start video
              </button>

              {filmIdLib ? (
                <div className={css.button}>
                  <button className={css.btn} onClick={onClickDel}>
                    delete
                  </button>
                  <Button data={data} />
                </div>
              ) : (
                <div className={css.btnList}>
                  <button className={css.btn} onClick={onClickWatched}>
                    add to Watched
                  </button>
                  <button className={css.btn} onClick={onClick}>
                    add to queue
                  </button>
                </div>
              )}
            </div>

            <Video video={video} />
          </div>
        </div>
      </div>
    </div>
  );
};
