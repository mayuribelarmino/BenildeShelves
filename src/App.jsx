import React, { Component } from 'react';

import Header from './Components/header';
import Menu from './Components/menu';
import ListOfBooks from './Components/listofbooks.jsx';
import { AddBook } from './Components/AddBook';
import ListOfBorrowedBooks from './Components/ListOfBorrowedBooks';
import AddBorrower from './Components/AddBorrower';

import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import './Components/AddDate.js';
import Homepage from './Components/Homepage';


const NewRoute = () =>{
  return(
    <div>
      <Header/>
      
      <Menu/>
      <Homepage/>
    </div>
  )
}

const NewRoute1 = () =>{
  return(
    <div>
      <ListOfBooks/>
    </div>
  )
}

const NewRoute2 = () =>{
  return(
    <div>
      <AddBook/>
    </div>
  )
}

const NewRoute3 = () =>{
  return(
    <div>
      <ListOfBorrowedBooks/>
    </div>
  )
}

const NewRoute4 = () =>{
  return(
    <div>
      <AddBorrower/>
    </div>
  )
}

class App extends Component {
 
  render() {
    return (
     <BrowserRouter>
     <div>

     <Route path="" component={NewRoute} />
     <Route path="/ListOfBooks" component={NewRoute1} />
     <Route path="/AddBook" component={NewRoute2} />
     <Route path="/ListOfBorrowedBooks" component={NewRoute3} />
     <Route path="/AddBorrower" component={NewRoute4} />
 
     </div>
     </BrowserRouter>
    );
  }
}

export default App;
