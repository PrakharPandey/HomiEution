let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors'); 
let mongoose = require('mongoose');

let teacher = require('./routes/teacher');
let student = require('./routes/student');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use("/teacher",teacher);
app.use("/student",student);

app.listen(3000);
console.log('running')

module.exports = app;