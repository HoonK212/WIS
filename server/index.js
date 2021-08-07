const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }));

//application/json 
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', (req, res) => res.send('Hello MangoS !!'))

const port = 5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
