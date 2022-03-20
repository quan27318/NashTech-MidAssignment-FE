import React from 'react';
import { Redirect } from 'react-router-dom';
import {BrowserRouter as Router, Route,Link, Switch } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import ListBook from './Pages/BookPages/ListBook';
import UpdateBook from './Pages/BookPages/UpdateBook';
import AddBook from './Pages/BookPages/AddBook';
import ListCategory from './Pages/CategoryPages/ListCategory';
import AddCategory from './Pages/CategoryPages/AddCategory';
import UpdateCategory from './Pages/CategoryPages/UpdateCategory';
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Home" render={() => {return localStorage.getItem("accessert") ? (<Home />) : (<Redirect to="/" />);}}></Route>
        <Route path="/ListBook" render={() => {return localStorage.getItem("accessert") ? (<ListBook />) : (<Redirect to="/" />);}}></Route>
        <Route path="/AddBook" render={() => {return localStorage.getItem("accessert") ? (<AddBook />) : (<Redirect to="/" />);}}></Route>
        <Route path="/UpdateBook" render={() => {return localStorage.getItem("accessert") ? (<UpdateBook />) : (<Redirect to="/" />);}}></Route>
        <Route path="/ListCategory" render={() => {return localStorage.getItem("accessert") ? (<ListCategory />) : (<Redirect to="/" />);}}></Route>
        <Route path="/AddCategory" render={() => {return localStorage.getItem("accessert") ? (<AddCategory />) : (<Redirect to="/" />);}}></Route>
        <Route path="/UpdateCategory" render={() => {return localStorage.getItem("accessert") ? (<UpdateCategory />) : (<Redirect to="/" />);}}></Route>
        <Route path="/"><Login /></Route>
      </Switch>
    </Router>
  );
}

export default App;
