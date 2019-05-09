import React, { Component } from 'react';
import '../css/ListOfBooks.css';
import Table1 from './Table1';
import BookList from './BookList'
import axios from 'axios';


  


class ListOfBooks extends Component{

    constructor(){
        super();
        this.state={
         
            books:{
                bookID:'',
            }
        };
    }

   
    
    
    
    componentWillMount() {
        this._refreshBooks1();
      }
    
      _refreshBooks1() {
        let { bookID} = this.state.books;
    
        axios.get('http://localhost:8080/BenildeShelves/rest/books/',{bookID}).then((response) => {
          this.setState({
            ViewBookData: response.data
          })
        });
      }
 
  
    render() {
        
       
        return (
            <>
            <div className="listofbooks col-10">
            <div className="image3">
            </div>
          
            <Table1
             handleChange={this.handleChange}
             handleSubmit={this.handleSubmit}/>
            
           
      </div>
      </>

        );
    }
}




export default ListOfBooks;
