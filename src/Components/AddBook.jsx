import React, { Component } from 'react';
import '../css/AddBook.css';
import { BookInput } from './BookInput';
import css from '../css/BookInput.css';
import { postBook } from '../util/service-helper';
import BookList from './BookList';
import ListOfbooks from './listofbooks';



class AddBook extends Component{
    constructor(props){
       
        super(props);

        this.state={
            
            book:{
            bookID:'',
            title:'',
            author:'',
            isbn:'',
            subject:'',
            status:'Available',
            datePublished:'',
            dateAcquired:''
            }
        };
     
    }

    
    
    handleChange = e => {
        const {name, value} = e.target;
        console.log(value)
    
        this.setState((prevState) => ({
          book: {
            ...prevState.book,
            [name]: value
          }
        }));
    }

   handleSubmit = e =>{
    
    postBook(this.state.book)
    .then(function(response){
        console.log(response);
        alert('You successully add new book')
        
       
    })
    .catch(function(error){
        console.log(error);
    });
    
       e.preventDefault();
    
 
    }

      
      


    render() {
        return (
            <div className="addbook col-10">
            <div className="image1">
            </div>
            <BookInput
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            input = {this.input}
            />
             </div>

        );
    }
}
export {
    AddBook
}