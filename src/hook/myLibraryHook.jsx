import { useSelector } from "react-redux";
import {selectItems,selectIsLoader} from '../redux/mylibrary/Mylibrary-selections'

export const useMyLibrary = () =>{
    return{
        itemsMyLib: useSelector(selectItems),
        isLoader: useSelector(selectIsLoader)
       

    }
}