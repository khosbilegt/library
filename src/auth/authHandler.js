import axios from 'axios';

const baseUrl = "http://10.3.201.131:9999";

async function postRegister(email, password) {
     try {
          axios.post(`${baseUrl}/auth/register`, {
               email: email,
               password: password
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

async function getLogin(email) {
     try {
          return axios.get(`${baseUrl}/auth/login/${email}`)
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
     postRegister,
     getLogin
}