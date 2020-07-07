let mongoose = require('mongoose')
let Schema = mongoose.Schema


let parent = new Schema({
id: String
name: String,
age: Number,
profession: String,
relation: String,
student: String,
description: String
})

module.exports = mongoose.model('Parent', parent)