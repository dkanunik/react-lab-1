import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreateBook from "./pages/CreateBook.jsx";
import ShowBook from "./pages/ShowBook.jsx";
import EditBook from "./pages/EditBook.jsx";
import DeleteBook from "./pages/DeletetBook.jsx";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/books/create' element={<CreateBook/>}></Route>
            <Route path='/books/details/:id' element={<ShowBook/>}></Route>
            <Route path='/books/edit/:id' element={<EditBook/>}></Route>
            <Route path='/books/delete/:id' element={<DeleteBook/>}></Route>
        </Routes>
    )
}

export default App;
