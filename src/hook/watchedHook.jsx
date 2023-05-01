import { useSelector } from "react-redux";
import {selectItems,selectIsLoader} from '../redux/watched/Watched-selections'

export const useWatched = () =>{
    return{
        itemsWatch: useSelector(selectItems),
        isLoader: useSelector(selectIsLoader)
       

    }
}