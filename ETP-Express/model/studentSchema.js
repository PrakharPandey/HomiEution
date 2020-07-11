let mongoose = require('mongoose')
let Schema = mongoose.Schema


let student = new Schema({
id: String,
name: String,
age: Number,
class: String,
school: String,
address: String,
postalCode: String,
subjects: Array,
lastResult: String,
description: String
})

module.exports = mongoose.model('Student', student)