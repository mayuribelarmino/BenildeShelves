import {getBookListURL} from './service-url';
import {getLendListURL} from './service-url';
import axios from 'axios';
import BookInput from '../Components/BookInput';

const getBookList = () => {
    return axios.get(getBookListURL);
}

const postBook = (book)=>{
    return axios.post(getBookListURL, book)
}
const postLend = (lend)=>{
    return axios.post(getLendListURL, lend)
}
export {
    getBookList,
    postBook,
    postLend
}