import React, {Component,Fragment} from 'react';


import '../css/BookInput.css';

import PropTypes from 'prop-types';


 class BookInput extends Component{
 
   
   render(){
       
    console.log(this.props.handleChange);
       return(
     <Fragment>
           <div class="container" >  
  <form id="contact" >
    
    
    <div className="row">
    <div class="col-25">
        <label>Book Title :</label>
      </div>
      <div class="col-75">
    <fieldset>
      
      <input placeholder="Enter book title" type="text"  name="title" onChange={this.props.handleChange} required/>
      
    </fieldset>
    </div>
   </div>
   <div className="row">
    <div class="col-25">
         <label>Author(s) :</label>
      </div>
      <div class="col-75">
    <fieldset >
      <input  placeholder="Enter name of the author(s)" type="text"   name="author" onChange={this.props.handleChange}  required/>
    </fieldset>
    </div>
   </div><div className="row">
    <div class="col-25">
         <label>Book ISBN :</label>
      </div>
      <div class="col-75">
    <fieldset >
      <input  placeholder="Enter book ISBN" type="text"  name="isbn" onChange={this.props.handleChange} required/>
    </fieldset>
    </div>
   </div><div className="row">
    <div class="col-25">
            <label>Subject :</label>       
      </div>
      <div class="col-75">
    <fieldset >
      <input placeholder="Enter subject" type="text"  name="subject" onChange={this.props.handleChange} required/>
    </fieldset>
    </div>
   </div>
   <div className="row">
    <div class="col-25">
        <label>Date Published :</label> 
      </div>
      <div class="col-75">
    <fieldset>
      <input placeholder="Enter date published" type="date" tabindex="2" name="datePublished" onChange={this.props.handleChange} required/>
    </fieldset>
    </div>
   </div>
   <div className="row">
    <div class="col-25">
        <label>Date Acquired :</label> 
      </div>
      <div class="col-75">
    <fieldset >
      <input  placeholder="Enter date acquired" type="date" tabindex="2" name="dateAcquired" onChange={this.props.handleChange} required/>
    </fieldset>
    </div>
   </div>
   <div className="row">
   <div className="col-50">
    <fieldset >
      <button  type="submit" id="contact-submit" onClick={this.props.handleSubmit}>Add this Book</button>
      
    </fieldset>
    </div>
    <div className="col-50">
    <fieldset >
      <button type="button" class="btn btn-danger" >Cancel</button>
    </fieldset>
    </div>
    </div>
   </form>
</div>
      </Fragment>
      
       )
   }
}


BookInput.propTypes={
    handleChange:PropTypes.func,
    handleSubmit:PropTypes.func

}
export{
    BookInput
}
