import React, {Component,Fragment} from 'react';

import axios from 'axios';
import '../css/BookInput.css';
import { postBook } from '../util/service-helper';
import PropTypes from 'prop-types';
import { postLend } from '../util/service-helper';
import {NavLink} from "react-router-dom";




 class LendInput extends Component{
  
  constructor(props) {
    super(props);

    this.state = {
      
    books:[],
    bookID:'',
    
    lend:{
      lendID:'',
      bookID:'',
      borrowerName:'',
      dateBorrowed:'',
      dateDue:'2019-10-10',
      dateReturned:'',
      lendStatus:'Not Returned',
      
      
      },

      
    
  };

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  
}
  handleChange = e => {
    const {name, value} = e.target;
    console.log(name);
    
    console.log(value);

    this.setState((prevState) => ({
      lend: {
        ...prevState.lend,
        [name]: value
      }
    }));
}



handleSubmit = e =>{
  let { lendID, bookID, borrowerName, dateBorrowed,dateDue,dateReturned,lendStatus } = this.state.lend;
 
  console.log(this.state.lend);
postLend(this.state.lend)


.then((response) => {
    console.log("postLend then");
    //console.log(response);
    console.log(this.state.lend);
    
    let editBookDetails = () => {
      console.log("editbook");
     
     axios.put('http://localhost:8080/BenildeShelves/rest/books/edit/' + bookID).then((res) => {
     
      console.log(res);
       console.log(res.date);
     });
    
    };
    editBookDetails();
    alert('You successully input Borrowed details');
    window.location.reload();
    
   
})
.catch(function(error){
    console.log(error);
});

   e.preventDefault();


}



  componentDidMount(){
    axios.get('http://localhost:8080/BenildeShelves/rest/books?status=Available').then(res =>{
   console.log(res);
    this.setState({books:res.data});
}) } 


   
   render(){

    console.log(this.handleChange);

    let books = this.state.books.map((book) => {
      return (
      
     

        <option key={book.bookID}  value={book.bookID}  >{book.title}</option>
      
    
      )
    });
       
    console.log(this.handleChange);
       return(
     <Fragment>
           <div class="container" >  
  <form id="contact" >
    
    
    <div className="row">
    <div class="col-25">
        <label>Book Name :</label>
      </div>
      <div class="col-75">
    <fieldset>
    <select name="bookID" onChange={this.handleChange}>
      
    <option >Choose book title</option>
    {books}
        
        </select>
      


      
      
    </fieldset>
    </div>
   </div>
   <div className="row">
    <div class="col-25">
         <label>Borrower Name:</label>
      </div>
      <div class="col-75">
    <fieldset >
      <input  placeholder="Enter name of the author(s)" type="text"   name="borrowerName" onChange={this.handleChange}  required/>
    </fieldset>
    </div>
   </div>
   <div className="row">
    <div class="col-25">
        <label>Date Borrowed :</label> 
      </div>
      <div class="col-75">
    <fieldset>
      <input placeholder="Enter date published" type="date" tabindex="2" id="dateBorrowed" name="dateBorrowed"  onChange={this.handleChange} required/>
      <input type="hidden" id="dateDue" name="dateDue" onChange={this.handleChange} />
    </fieldset>
    </div>
   </div>
    <input  placeholder="Enter date acquired" type="hidden" tabindex="2" name="dateReturned" onChange={this.handleChange} required/>
  
    
   <div className="row">
   <div className="col-50">
    <fieldset >
      <button  type="submit" id="contact-submit" onClick={this.handleSubmit}>Add this Book</button>
      
    </fieldset>
    </div>
    <div className="col-50">
    <fieldset >
      <button type="button" class="btn btn-danger" ><NavLink to="/ListOfBorrowedBooks" className="font1"> Cancel </NavLink></button>
    </fieldset>
    </div>
    </div>
   </form>
</div>
      </Fragment>
      
       )
   }
}


LendInput.propTypes={
    handleChange:PropTypes.func,
    handleSubmit:PropTypes.func

}
export{
    LendInput
}
console.log("hello");