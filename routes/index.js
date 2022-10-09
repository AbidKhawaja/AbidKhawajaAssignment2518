const express = require('express') // IMPORT express
const app = express() // create an instance of the import.
const port = 9000 // variable to store the port to listen on
var router = express.Router();

app.get('/getRequest', (req, res) => res.send('She wanted rainbow hair. Thats what she told the hairdresser. It should be deep rainbow colors, too. She wasnt interested in pastel rainbow hair. She wanted it deep and vibrant so there was no doubt that she had done this on purpose.')) 

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) // make app lis

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://crypto-news-live3.p.rapidapi.com/news',
  headers: {
    'X-RapidAPI-Key': '6520da9141msh99c913c17a59a0cp1bb6ccjsna7c77a609c3e',
    'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data[5]["title"]);
  app.get('/article', (req, res) => res.send(response.data[5]["title"]))
}).catch(function (error) {
	console.error(error);
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  })
});

module.exports = router;
