import React, { Component } from 'react';
import '../css/ListOfBorrowedBooks.css';
import LendList from './LendList'



class ListOfBorrowedBooks extends Component{
    render() {
        return (
            <div className="listofborrowedbooks col-10">
         <div className="image4">
            </div>

            
            <LendList/>
      
      </div>

        );
    }
}
export default ListOfBorrowedBooks;
