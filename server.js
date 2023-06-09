const express = require('express');
const app = express();
const fs = require('fs');
var cors = require('cors')
app.use(express.json());
const allowedOrigins = ['http://localhost:5000'];
app.use(cors(allowedOrigins));
// Use the body-parser middleware app.use(bodyParser.json()); . automatically converts req.body into a js object
//the express.urlencoded({ extended: true }) middleware takes the form data the req.body json object from the url and automatically parses it into a js object .Particularly useful in complex forms
app.use(bodyParser.json());

const fileContent = JSON.parse(fs.readFileSync('db.json'))

app.get('/users',(req, res) => {
    res.json(fileContent)
});


app.post('/users',(req, res) => {
const newData = req.body;
const newId = fileContent[fileContent.length-1].id + 1 ;
const finalData = Object.assign({id: newId} , JSON.parse(newData))//semi parsing the object
fileContent.push(finalData)

try {
  fs.writeFileSync('db.json', JSON.stringify(fileContent))
  if (res.status<= 299) {
    console.log('data got posted')
  }
} catch (error) {
  console.log(error)
}
});


const port  = 5000
// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
