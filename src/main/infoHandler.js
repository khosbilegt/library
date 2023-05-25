import axios from 'axios';

const baseUrl = "http://10.3.201.131:9999";

async function getBooks() {
     try {
          return axios.get(`${baseUrl}/books`)
             .then((response) => {
               return response.data;
             })
             .catch(function (error) {
               console.log(error);
               return "error";
             });
     } catch(e) {
          console.error('Failure!');
          console.error(e.response.status);
          return("error");
     }
}

async function postRent(email, book) {
     try {
          axios.post(`${baseUrl}/books/rent`, {
               email: email,
               book: book
             })
             .then(function (response) {
               console.log(response);
             })
             .catch(function (error) {
               console.log(error);
             });
     } catch(e) {
          console.error('Failure!');
          console.error(e.response.status);
     }
}

export {
     getBooks,
     postRent
}