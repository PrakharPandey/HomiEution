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

experience: String,
rating: String,
achievements: String,
expDescription: String
})

module.exports = mongoose.model('teacher', teacher)