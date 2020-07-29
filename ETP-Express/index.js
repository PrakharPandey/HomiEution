let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors'); 
let mongoose = require('mongoose');

let teacher = require('./routes/teacher');
let student = require('./routes/student');
let parent = require('./routes/parent');

let app = express();
let port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use("/teacher",teacher);
app.use("/student",student);
app.use("/parent",parent);

app.listen(port);
console.log('running')

module.exports = app;