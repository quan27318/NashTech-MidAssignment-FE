import React from "react";
import { BrowserRouter,Link,Route, useHistory} from "react-router-dom";
import ListBook from "../BookPages/ListBook";
import AddBook from "../BookPages/AddBook";
import UpdateBook from "../BookPages/UpdateBook";
import ListCategory from "../CategoryPages/ListCategory";
import AddCategory from "../CategoryPages/AddCategory";
function Home() {
    let history = useHistory()
    let logout = ()=>{
        localStorage.removeItem('accessert')
        history.replace("/")
    };
    return(
        <div>
            <button onClick={logout}>Logout</button>
            <h2>Home Login</h2>
            <div>
            <Link to='/ListBook'>
                <button type="button">ListBook</button>
            </Link>
            <Route path='/ListBook'><ListBook/></Route>
            <Link to='/AddBook'>
            <button type="button">Create New Book</button>
            </Link>
            <Route path='/AddBook'><AddBook/></Route>
            <Link to='/ListCategory'>
                <button type="button">List Category</button>
            </Link>
            <Route path='/ListCategory'><ListCategory/></Route>
            <Link to='/AddCategory'>
                <button type="button">Add Category</button>
            </Link>
            <Route path='/AddCategory'><AddCategory/></Route>
            </div>
        </div>
    );
}

export default Home;