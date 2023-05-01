import React from "react";
import { FilmList } from "../components/filmList/FilmList";
import { Header } from "../components/header/Header";

const HomePage = () => {
  return (
    <div >
      <Header />
      <FilmList />
    </div>
  );
};
export default HomePage;
