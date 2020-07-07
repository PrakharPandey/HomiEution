let express = require('express');
let bodyParser = require('body-parser'); 
let mongoose = require('mongoose');

let teacher = require('./routes/teacher')

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/teacher",teacher);

app.listen(3000);
console.log('running')

module.exports = app;