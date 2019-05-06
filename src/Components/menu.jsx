

import React, { Component } from 'react';
import '../css/menu.css';
import {NavLink} from "react-router-dom";
import Main from './main';




const Menu = () =>{
        return (

            <div>

<div id="wrapper">


<div id="sidebar-wrapper">
    <ul class="sidebar-nav">
        <li class="sidebar-brand">
           
        </li>
        <li>

            <a><NavLink to="/ListOfBooks"> List of Books </NavLink></a>
        </li>
        <li>
        <a><NavLink to="/AddBook"> Add a Book </NavLink></a>
        </li>
        <li>
        <a><NavLink to="/ListOfBorrowedBooks"> List of Borrowed Books </NavLink></a>
        </li>
        <li>
        <a><NavLink to="/AddBorrower"> Add a Borrower </NavLink></a>
        </li>
       
    </ul>
</div>



</div>

                    
            </div>
          

        );
    }

export default Menu;
