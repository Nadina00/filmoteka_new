import css from "./filmList.module.css";
export const GenresItem = ({ genresList }) => {
  let nameList = [];
  for (const genre of genresList) {
    if (genre !== undefined) {
      const genreName = genre.name;
      nameList.push(genreName);
    }
  }

  return (
    <div className={css.genreList}>
      {nameList.slice(0, 3).map((name) => (
        <li key={name.index} className={css.genre}>
          {name}
        </li>
      ))}
    </div>
  );
};
