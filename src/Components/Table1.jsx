import React, { Component } from 'react';
import '../css/Table.css'
import axios from 'axios';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import { Input,FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Button, Table } from 'reactstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import PropTypes from 'prop-types';

class Table1 extends Component{
 
  constructor(props) {
    super(props);

    this.state = {
      lends:[],
    books:[],
    Title:'',
    Author:'',
    Subject:'',
    ISBN:'',
    
    

    
    editBookData: {
      bookID:'',
      title:'',
      author:'',
      isbn:'',
      subject:'',
      status:'',
      datePublished:'',
      dateAcquired:''
    },
    editBookData1: {
      bookID:'',
      title:'',
      author:'',
      isbn:'',
      subject:'',
      status:'',
      datePublished:'',
      dateAcquired:''
  
    },

   
    

    editBookModal: false,
    editBookModal1: false
  };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChangeTitle = this.handleChangeTitle.bind(this);
  this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
  this.handleChangeSubject = this.handleChangeSubject.bind(this);
  this.handleChangeISBN = this.handleChangeISBN.bind(this);
  

  }
  

  toggleEditBookModal() {
    this.setState({
      editBookModal: ! this.state.editBookModal
    });
  }
  toggleEditBookModal1() {

    
    this.setState({
      editBookModal1: ! this.state.editBookModal1
    });
  
   
  }

  toggleEditBookModal11() {

    this._refreshBooks();

      this.setState({
        editBookModal1: false, editBookData1: { bookID: '', title: '', author: '',isbn: '', subject: '', status: '',datePublished: '', dateAcquired: '' }
      })
    ;
  
   
  }
 

  updateBook() {
    let { bookID, title, author,isbn,subject,status,datePublished,dateAcquired } = this.state.editBookData;

    axios.put('http://localhost:8080/BenildeShelves/rest/books',  {bookID,
      title, author,isbn,subject,status,datePublished,dateAcquired
    }).then((response) => {
      this._refreshBooks();

      this.setState({
        editBookModal: false, editBookData: { bookID: '', title: '', author: '',isbn: '', subject: '', status: '',datePublished: '', dateAcquired: '' }
      })
    });
  }
  editBook( bookID, title, author,isbn,subject,status,datePublished,dateAcquired) {
    this.setState({
      editBookData: { bookID, title, author,isbn,subject,status,datePublished,dateAcquired}, editBookModal: ! this.state.editBookModal
    });
  }

  editBook1( bookID, title, author,isbn,subject,status,datePublished,dateAcquired) {
    
    this.setState({
      editBookData1: { bookID, title, author,isbn,subject,status,datePublished,dateAcquired}, editBookModal1: ! this.state.editBookModal1
    });

    console.log(this.state.editBookData1.bookID)
    let editBookDetails = () => {
      axios.get('http://localhost:8080/BenildeShelves/rest/lend?bookID=' + bookID).then(res =>{
    console.log(this.state.editBookData1.bookID)
 console.log(res);
 console.log("didmount");
  this.setState({lends:res.data});});
    
    };
    editBookDetails();
  
  }

 
  _refreshBooks() {
    axios.get('http://localhost:8080/BenildeShelves/rest/books?status=Available').then((response) => {
      this.setState({
        books: response.data
      })
    });
  }

  handleSubmit(){
    
  if(this.state.Title !=""){
    let getBookURL ='http://localhost:8080/BenildeShelves/rest/books?Title=' + this.state.Title;
    console.log(getBookURL);
    axios.get(getBookURL).then(res =>
      {
        this.setState({books:[]});
        //var BlankArray = this.state.books;
        //this.state.books.push(res.data)
        this.setState({books:res.data})
        
        console.log(res);
        console.log(res.data)
      });
    }

  else if (this.state.Author !=""){

    let getBookURL ='http://localhost:8080/BenildeShelves/rest/books?Author='+this.state.Author;
    console.log(getBookURL);
    axios.get(getBookURL).then(res =>
      {
        this.setState({books:[]});
        //var BlankArray = this.state.books;
        //this.state.books.push(res.data)
        this.setState({books:res.data})
        
        console.log(res);
        console.log(res.data)
      });

  }
  else if (this.state.Subject !=""){

    let getBookURL ='http://localhost:8080/BenildeShelves/rest/books?Subject='+this.state.Subject;
    console.log(getBookURL);
    axios.get(getBookURL).then(res =>
      {
        this.setState({books:[]});
        //var BlankArray = this.state.books;
        //this.state.books.push(res.data)
        this.setState({books:res.data})
        
        console.log(res);
        console.log(res.data)
      });

  }
  else if (this.state.ISBN !=""){

    let getBookURL ='http://localhost:8080/BenildeShelves/rest/books?ISBN=' + this.state.ISBN;
    console.log(getBookURL);
    axios.get(getBookURL).then(res =>
      {
        this.setState({books:[]});
        //var BlankArray = this.state.books;
        //this.state.books.push(res.data)
        this.setState({books:res.data})
        
        console.log(res);
        console.log(res.data)
      });

  }
 
  

  
  
    
  }
  handleChangeTitle(event) {
    this.setState({Title: event.target.value});
  }

  handleChangeAuthor(event) {
    this.setState({Author: event.target.value});
  }

  handleChangeSubject(event) {
    this.setState({Subject: event.target.value});
  }

  handleChangeISBN(event) {
    this.setState({ISBN: event.target.value});
  }

  



componentDidMount(){
    axios.get('http://localhost:8080/BenildeShelves/rest/books?status=Available').then(res =>{
   console.log(res);
   console.log("didmount");
  
    this.setState({books:res.data});
}) }  
  

  render() {

    let lend=this.state.lends.map(lend =>{
      
      return(
        
          <tr>
        <td key={lend.lendID}>{lend.lendID}</td>
        <td>{lend.title}</td>
        <td>{lend.borrowerName}</td>
        <td>{lend.dateBorrowed}</td>
        <td>{lend.dateReturned}</td>
      
        
      
        
      
        </tr>
        
      )
    });
  
    let books1 = this.state.books.map((book) => {
      return (
        <tr>
        <td>{book.bookID}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.isbn}</td>
        <td>{book.subject}</td>
        <td>{book.status}</td>
        <td>{book.datePublished}</td>
        <td>{book.dateAcquired}</td>
       
          
          
          <td> 
        <Button color="success" size="sm" className="mr-2" onClick={this.editBook1.bind(this, book.bookID, book.title, book.author,book.isbn,book.subject,book.status,book.datePublished,book.dateAcquired)}>Book Transaction </Button>
       </td>

       <td>
          
          <Button color="success" size="sm" className="mr-2" onClick={this.editBook.bind(this, book.bookID, book.title, book.author,book.isbn,book.subject,book.status,book.datePublished,book.dateAcquired)}>Edit Book </Button>
          </td>
        </tr>
      )
    });

   
        return (
          <>
            <div>
            <div class="search-container">
                
                <input type="text"  className="title" name="Title" onKeyUp={this.handleSubmit}onChange={this.handleChangeTitle} placeholder="Search for book title"/>
                <input type="text" className="author" name="Author" onKeyUp={this.handleSubmit}onChange={this.handleChangeAuthor} placeholder="Search for book author"/>
                <input type="text" className="subject" name="Subject" onKeyUp={this.handleSubmit}onChange={this.handleChangeSubject} placeholder="Search for subject"/>
                <input type="text" className="isbn" name="ISBN" onKeyUp={this.handleSubmit}onChange={this.handleChangeISBN} placeholder="Search for book ISBN"/>

                
              
             </div>
    <table class="my_table table1">
    
  <tr>
    <th>BOOK ID</th>
    <th>TITLE</th>
    <th>AUTHOR</th>
    <th>ISBN</th>
    <th>SUBJECT</th>
    <th>STATUS</th>
    <th>DATE PUBLISHED</th>
    <th>DATE ACQUIRED</th>
    <th>HISTORY</th>
    <th>ACTION</th>

    
  </tr>
  
    {books1}
    
   
  
  
</table>
<Modal isOpen={this.state.editBookModal} toggle={this.toggleEditBookModal.bind(this)}>
        <ModalHeader toggle={this.toggleEditBookModal.bind(this)}>Edit Book Details</ModalHeader>
        <ModalBody>
          <FormGroup>
            
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="title" value={this.state.editBookData.title} onChange={(e) => {
                        let { editBookData } = this.state;

                        editBookData.title = e.target.value;

                        this.setState({ editBookData });
                      }} />
            </InputGroup>
           
          </FormGroup>
          <FormGroup>
            

            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Author</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="author" value={this.state.editBookData.author} onChange={(e) => {
                        let { editBookData } = this.state;

                        editBookData.author = e.target.value;

                        this.setState({ editBookData });
                      }} />
            </InputGroup>
          </FormGroup>
          <FormGroup>
          <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Book ISBN</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="isbn" value={this.state.editBookData.isbn} onChange={(e) => {
                        let { editBookData } = this.state;

                        editBookData.isbn = e.target.value;

                        this.setState({ editBookData });
                      }} />
            </InputGroup>
          </FormGroup>
          <FormGroup>
          <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Subject</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="subject" value={this.state.editBookData.subject} onChange={(e) => {
                        let { editBookData } = this.state;

                        editBookData.subject = e.target.value;

                        this.setState({ editBookData });
                      }} />
            </InputGroup>
          </FormGroup>
          <FormGroup>
             <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Book Status</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="status" value={this.state.editBookData.status} onChange={(e) => {
                        let { editBookData } = this.state;

                        editBookData.status = e.target.value;

                        this.setState({ editBookData });
                      }} readOnly/>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Date Published</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" type="date" aria-describedby="inputGroup-sizing-sm" name="datePublished" value={this.state.editBookData.datePublished} onChange={(e) => {
                        let { editBookData } = this.state;

                        editBookData.datePublished = e.target.value;

                        this.setState({ editBookData });
                      }} />
                      
            </InputGroup>
          </FormGroup>
          <FormGroup>
          <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Date Acquired</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" type="date" aria-describedby="inputGroup-sizing-sm" name="dateAcquired" value={this.state.editBookData.dateAcquired} onChange={(e) => {
                        let { editBookData } = this.state;

                        editBookData.dateAcquired = e.target.value;

                        this.setState({ editBookData });
                      }} />
            </InputGroup>
          </FormGroup>
       

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.updateBook.bind(this)}>Update Book</Button>{' '}
          <Button color="secondary" onClick={this.toggleEditBookModal.bind(this)}>Cancel</Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={this.state.editBookModal1} toggle={this.toggleEditBookModal1.bind(this)}>
        <ModalHeader toggle={this.toggleEditBookModal1.bind(this)}>Edit Book Details</ModalHeader>
        <div class="modal-body">
          <FormGroup>
            
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="title" value={this.state.editBookData1.title} onChange={(e) => {
                        let { editBookData1 } = this.state;

                        editBookData1.title = e.target.value;

                        this.setState({ editBookData1 });
                      }} readonly/>
            </InputGroup>
           
          </FormGroup>
          <FormGroup>
            
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">ID</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="ID" value={this.state.editBookData1.bookID} onChange={(e) => {
                        let { editBookData1 } = this.state;

                        editBookData1.bookID = e.target.value;

                        this.setState({ editBookData1 });
                      }} readonly/>
            </InputGroup>
           
          </FormGroup>
          
       
        <FormGroup>
          <InputGroup size="sm" className="mb-3">
          
          <table striped bordered hover size="sm" className="mb-3" className="table2">
  <tr>
    <th>LendID</th>
    <th>Book Name</th>
    <th>Borrower Name</th>
    <th>Date Borrowed</th>
    <th>Date Returned</th>
   
  </tr>
  
    {lend}
   
  
  
</table>
</InputGroup>

</FormGroup>

      </div>
        <ModalFooter>
        
          <Button color="secondary" onClick={this.toggleEditBookModal11.bind(this)}>Back to List</Button>
        </ModalFooter>
      </Modal>


     

		</div>


           
          
</>
        );
    }
}


export default Table1;
