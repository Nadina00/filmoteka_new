import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import MyLibraryPage from "./pages/MyLibraryPage"
import WatchedPage from "./pages/WatchedPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/mylibrary" element={<MyLibraryPage/>}/>
      <Route path="/watched" element={<WatchedPage/>}/>
       <Route path="*" element={<div>Страница не найдена</div>} />
    </Routes>
  );
}

export default App;
