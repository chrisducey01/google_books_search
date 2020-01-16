require('dotenv').config();
const axios = require('axios');
const API_KEY=process.env.GOOGLE_BOOKS_API_KEY;
const BASE_URL=`https://www.googleapis.com/books/v1/volumes?key=${API_KEY}`;

// Current functionality supports searching the google books API
// by a search string.  API key must be set in the .env file and
// must be a valid key.

module.exports = {
    search:function(bookName){
        return axios.get(`${BASE_URL}&q=${bookName}`)
    }
}