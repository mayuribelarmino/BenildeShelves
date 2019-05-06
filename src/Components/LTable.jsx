import React, { Component } from 'react';
import '../css/Table.css'
import axios from 'axios';

class LTable extends Component{
  state={
    lends:[]
}

componentDidMount(){
    axios.get('http://localhost:8080/BenildeShelves/rest/lends').then(res =>{
   console.log(res);
    this.setState({books:res.data});
}) }  
  
  render() {
        return (
            <div>
                	
                    <table class="my_table">
  <tr>
    <th>BOOK ID</th>
    <th>TITLE</th>
    <th>AUTHOR</th>
    <th>ISBN</th>
    <th>SUBJECT</th>
    <th>STATUS</th>
    <th>DATE PUBLISHED</th>
    <th>DATE ACQUIRED</th>
    <th>ACTION</th>
  </tr>
  
    {this.state.books.map(book =>{
      return(
        
          <tr>
        <td key={book.bookID}>{book.bookID}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.isbn}</td>
        <td>{book.subject}</td>
        <td>{book.statusID}</td>
        <td>{book.datePublished}</td>
        <td>{book.dateAcquired}</td>
        <td>EDIT</td>
        </tr>
        
      )
    })}
   
  
  
</table>
		</div>

           
          

        );
    }
}
export default Table;
