import React, { Component } from 'react';
import '../css/LendList.css'
import axios from 'axios';
import { Input,FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class LendList extends Component{
constructor(...args) {
  super(...args);

  this.state = {
  lends:[],
  
  editLendData: {
    lendID:'',
    bookID:'',
    borrowerName:'',
    dateBorrowed:'',
    dateDue:'',
    dateReturned:'',
    lendStatus:'Returned',
    
  },
  editLendModal: false
};
}
componentWillMount() {
  this._refreshLends();
}

toggleEditLendModal() {
  this.setState({
    editLendModal: ! this.state.editLendModal
  });
}

updateLend() {
  let { lendID,bookID, borrowerName, dateBorrowed,dateDue,dateReturned,lendStatus } = this.state.editLendData;

  axios.put('http://localhost:8080/BenildeShelves/rest/lend',  {lendID,bookID, borrowerName, dateBorrowed,dateDue,dateReturned,lendStatus
  }).then((response) => {
    this._refreshLends();

    let editBookDetails = () => {
      console.log("editbook");
     
     axios.put('http://localhost:8080/BenildeShelves/rest/books/edit1/' + bookID).then((res) => {
      
      console.log(res);
       console.log(res.date);
     });
    
    };
    editBookDetails();

    this.setState({
      editLendModal: false, editLendData: { lendID:'', bookID: '',  borrowerName: '',dateBorrowed: '', dateDue: '', dateReturned: '',lendStatus: ''}
    })
  });
}
editLend( lendID, bookID, borrowerName, dateBorrowed,dateDue,dateReturned,lendStatus) {
  this.setState({
    editLendData: { lendID,bookID, borrowerName, dateBorrowed,dateDue,dateReturned,lendStatus}, editLendModal: ! this.state.editLendModal
  });
}
_refreshLends() {
  axios.get('http://localhost:8080/BenildeShelves/rest/lend?lendStatus=Not Returned').then((response) => {
    this.setState({
      lends: response.data
    })
  });
}

componentDidMount(){
    axios.get('http://localhost:8080/BenildeShelves/rest/lend?lendStatus=Not Returned').then(res =>{
   console.log(res);
    this.setState({lends:res.data});
}) }  
  
  render() {

    let lend=this.state.lends.map(lend =>{
      return(
        
          <tr>
        <td key={lend.lendID}>{lend.lendID}</td>
        <td>{lend.title}</td>
        <td>{lend.borrowerName}</td>
        <td>{lend.dateBorrowed}</td>
        <td>{lend.dateDue}</td>
        <td>{lend.lendStatus}</td>
        <td><Button color="success" size="sm" className="mr-2" onClick={this.editLend.bind(this,lend.lendID, lend.bookID, lend.borrowerName, lend.dateBorrowed, lend.dateDue,lend.dateReturned,lend.lendStatus)}>RETURN BOOK</Button>
      </td>
        </tr>
        
      )
    })
        return (
            <div>
                	
                    <table class="my_table">
  <tr>
    <th>LendID</th>
    <th>Book Name</th>
    <th>Borrower Name</th>
    <th>Date Borrowed</th>
    <th>Date Due</th>
    <th>Status</th>
    <th>ACTION</th>
  </tr>
  
    {lend}
   
  
  
</table>

<Modal isOpen={this.state.editLendModal} toggle={this.toggleEditLendModal.bind(this)}>
        <ModalHeader toggle={this.toggleEditLendModal.bind(this)}>Edit Return Book Details</ModalHeader>
        <ModalBody>
          <FormGroup>
            
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="bookID" value={this.state.editLendData.bookID} onChange={(e) => {
                        let { editLendData } = this.state;

                        editLendData.bookID = e.target.value;

                        this.setState({ editLendData });
                      }} readOnly />
            </InputGroup>
           
          </FormGroup>
          <FormGroup>
            

            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Borrower Name</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="borrowerName" value={this.state.editLendData.borrowerName} onChange={(e) => {
                        let { editLendData } = this.state;

                        editLendData.borrowerName = e.target.value;

                        this.setState({ editLendData });
                      }} readOnly/>
            </InputGroup>
          </FormGroup>
         
          <FormGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Date Borrowed</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" type="date" aria-describedby="inputGroup-sizing-sm" name="dateBorrowed" value={this.state.editLendData.dateBorrowed} onChange={(e) => {
                        let { editLendData } = this.state;

                        editLendData.dateBorrowed = e.target.value;

                        this.setState({ editLendData });
                      }} readOnly/>
                      
            </InputGroup>
          </FormGroup>
          <FormGroup>
          <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Date Due</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" type="date" aria-describedby="inputGroup-sizing-sm" name="dateDue" value={this.state.editLendData.dateDue} onChange={(e) => {
                        let { editLendData } = this.state;

                        editLendData.dateDue = e.target.value;

                        this.setState({ editLendData });
                      }} readOnly/>
            </InputGroup>
          </FormGroup>

          <FormGroup>
          <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Date Returned</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Small" type="date" aria-describedby="inputGroup-sizing-sm" name="dateReturned" value={this.state.editLendData.dateReturned} onChange={(e) => {
                        let { editLendData } = this.state;

                        editLendData.dateReturned = e.target.value;

                        this.setState({ editLendData });
                      }} />
            </InputGroup>
          </FormGroup>
          <FormGroup>
          <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Status</label>
          </div>
          <select class="custom-select" name="lendStatus" value={this.state.editLendData.lendStatus} onChange={(e) => {
                        let { editLendData } = this.state;

                        editLendData.lendStatus = e.target.value;

                        this.setState({ editLendData });
                      }} >
            <option selected>Choose...</option>
            <option value="Returned">Returned</option>
            <option value="Not Returned">Not Returned</option>
           
          </select>
        </div>

          </FormGroup>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.updateLend.bind(this)}>Return Book</Button>{' '}
          <Button color="secondary" onClick={this.toggleEditLendModal.bind(this)}>Cancel</Button>
        </ModalFooter>
      </Modal>


		</div>

           
          

        );
    }
}
export default LendList;
