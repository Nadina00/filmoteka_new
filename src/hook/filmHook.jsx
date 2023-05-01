import { useSelector } from "react-redux";
import {selectItems, selectIsLoader, selectIsOpen} from '../redux/films/films-selector'

export const useFilms = () =>{
    return{
        items: useSelector(selectItems),
        isLoader: useSelector(selectIsLoader),
        isOpen: useSelector(selectIsOpen)

    }
}