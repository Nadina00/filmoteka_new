import React from "react";
import { MyLibrary } from "../components/myLibrary/MyLibrary";
import { HeaderLibrary } from "../components/header/HeaderLibrary";

const MyLibraryPage = () =>{
return(
    <div>
        <HeaderLibrary/>
        <MyLibrary/>
    </div>
)
}
export default MyLibraryPage