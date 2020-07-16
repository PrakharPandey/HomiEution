let mongoose = require('mongoose')
let Schema = mongoose.Schema


let teacher = new Schema({
firstName: String,
lastName: String,
email: String,
phoneNumber: Number,
address: String,
postalCode: Number,
subjects: Array,
age: Number,
experience: String,
rating: Number,
achievements: String,
description: String,
preferredLanguage: String,
feedBack: String
})

module.exports = mongoose.model('teacher', teacher)