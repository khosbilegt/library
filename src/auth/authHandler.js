import axios from 'axios';

const baseUrl = "http://192.168.43.205:9999";

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

async function getLogin(email, password) {
     try {
          axios.get(`${baseUrl}/auth/register`)
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
     postRegister,
     getLogin
}