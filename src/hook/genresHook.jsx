import { useSelector } from "react-redux";
import { selectGenres, selectIsLoader } from "../redux/genres/genres-selector";

export const useGenres = () => {
  return {
    genres: useSelector(selectGenres),
    isLoader: useSelector(selectIsLoader)
  };
};
