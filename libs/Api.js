import axios from 'axios';

const baseURL = 'https://dummyjson.com/';

export default axios.create({
    baseURL
});