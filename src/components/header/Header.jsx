import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "./Header.module.css";
import { useDispatch } from "react-redux";
import filmOperations from "../../redux/films/films-operations";

export const Header = () => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    evt.preventDefault();
    setValue(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(filmOperations.filmFind(value));
    setValue("");
  };

  return (
    <div className={css.box}>
      <div className={css.headerBtn}>
        <div className={css.boxBtn}>
        <button className={css.btnLogo}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.82 2H4.18C2.97602 2 2 2.97602 2 4.18V19.82C2 21.024 2.97602 22 4.18 22H19.82C21.024 22 22 21.024 22 19.82V4.18C22 2.97602 21.024 2 19.82 2Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 2V22"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 2V22"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 12H22"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 7H7"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 17H7"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 17H22"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 7H22"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <p className={css.logoFilm}>Filmoteka</p>
        </div>
        <div className={css.btnNav}>
          <Link to={"/"} className={css.btnNav}>
            Home
          </Link>
          <Link to={"/mylibrary"} className={css.btnNav}>
            my library
          </Link>
        </div>
      </div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          <input
            placeholder="Movie search"
            value={value}
            onChange={handleChange}
            className={css.input}
          ></input>
          <button type="submit" className={css.btnFind}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 9.5C7.70914 9.5 9.5 7.70914 9.5 5.5C9.5 3.29086 7.70914 1.5 5.5 1.5C3.29086 1.5 1.5 3.29086 1.5 5.5C1.5 7.70914 3.29086 9.5 5.5 9.5Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 10.5002L8.32495 8.3252"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </label>
      </form>
    </div>
  );
};
