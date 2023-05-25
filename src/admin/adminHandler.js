import axios from 'axios';

const baseUrl = "http://10.3.201.131:9999";

async function postBook(book) {
     try {
          axios.post(`${baseUrl}/books/add`, {
               name: book.name,
               img: book.img,
               authors: book.authors,
               synopsis: book.synopsis,
               genres: book.genres,
               date: book.date,
               filename: book.filename
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

async function delBook(filename) {
     console.log(`${baseUrl}/books/${filename}`);
     try {
          return axios.delete(`${baseUrl}/books/${filename}`)
             .then((response) => {
               return response.data;
             })
             .catch(function (error) {
               console.log(error);
               return "error";
             });
     } catch(e) {
          console.error('Failure!');
          return "error";
     }
}

export {
     postBook,
     delBook
}