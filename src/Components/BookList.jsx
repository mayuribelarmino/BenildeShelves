import React from 'react';
import axios from 'axios';

export default class BookList extends React.Component{

    state={
        books:[]
    }

    componentDidMount(){
        axios.get('http://localhost:8080/BenildeShelves/rest/books').then(res =>{
       console.log(res);
        this.setState({books:res.data});
   }) }

   render(){
       return(
           <ul>
               {this.state.books.map(book=><li>{book.title}</li>)}
           </ul>
       )
   }
}
