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

export {
     getBooks
}