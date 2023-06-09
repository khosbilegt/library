const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const fs = require('fs');
const port = 9999

const parseEmail = (email) => {
     const arr = email.split('@');
     return arr[0];
}

app.use(cors({
     origin: 'http://localhost:3000'
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/auth/login/:email', (req, res) => {
     var parsedEmail = parseEmail(req.params.email);
     fs.readFile(`/Users/xocoo/Desktop/Projects/library/admin/res/users/${parsedEmail}.json`, 'utf8', function(err, data){
          res.send(data);
     });
     
     //res.send(content);
})

app.get('/books', (req, res) => {
     const response = [];
     filenames = fs.readdirSync('/Users/xocoo/Desktop/Projects/library/admin/res/books/');
     filenames.forEach(file => {
          const content = fs.readFileSync(`/Users/xocoo/Desktop/Projects/library/admin/res/books/${file}`, 'utf8');
          response.push(content);
     });
     res.send(response);
})

app.delete('/books/:filename', (req, res) => {
     fs.unlink(`/Users/xocoo/Desktop/Projects/library/admin/res/books/${req.params.filename}`, (err) => {
          if (err) {
              throw err;
          }
          res.send("Success");
      });
})

app.post('/books/rent', jsonParser, (req, res) => {
     console.log('Received Body:', req.body);

     var parsedEmail = parseEmail(req.body.email);

     const content = fs.readFileSync(`/Users/xocoo/Desktop/Projects/library/admin/res/users/${parsedEmail}.json`, 'utf8');
     console.log(content);
     
     const jsonObject = JSON.parse(content);
     jsonObject["rented"].push(req.body.book);

     fs.writeFile(`/Users/xocoo/Desktop/Projects/library/admin/res/users/${parsedEmail}.json`, JSON.stringify(jsonObject), err => {
          if (err) {
            console.error(err);
          }
     });

})

app.post('/books/add', jsonParser, (req, res) => {
     console.log('Received Body:', req.body);

     fs.writeFile(`/Users/xocoo/Desktop/Projects/library/admin/res/books/${req.body.filename}.json`, JSON.stringify(req.body), err => {
          if (err) {
            console.error(err);
          }
     });
})

app.post('/auth/register', jsonParser, (req, res) => {
     console.log('Received Body:', req.body);

     var parsedEmail = parseEmail(req.body.email);

     const jsonObject = req.body;
     jsonObject["rented"] = [];
     jsonObject["isAdmin"] = false;

     fs.writeFile(`/Users/xocoo/Desktop/Projects/library/admin/res/users/${parsedEmail}.json`, JSON.stringify(jsonObject), err => {
          if (err) {
            console.error(err);
          }
     });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})