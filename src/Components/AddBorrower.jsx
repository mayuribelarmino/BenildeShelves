import React, { Component } from 'react';
import '../css/AddBorrower.css';
import { LendInput } from './LendInput';
import { postLend } from '../util/service-helper';
import axios from 'axios';



class AddBorrower extends Component{

    constructor(props){
       
        super(props);

        this.state={
            
           
            lend:{
            lendID:'',
            bookID:'',
            borrowerName:'',
            dateBorrowed:'',
            dateDue:'',
            dateReturned:'',
            lendStatus:'Not Returned',
            
            
            },

            

        };
     
    }

    
    
   

      
    render() {
        return (
            <div className="addborrower col-10">
             <div className="image2">
            </div>
            <LendInput
          
            />
      </div>

        );
    }
}
export default AddBorrower;
