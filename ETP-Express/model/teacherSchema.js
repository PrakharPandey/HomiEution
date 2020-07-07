let mongoose = require('mongoose')
let Schema = mongoose.Schema


let teacher = new Schema({
id: String,
name: String,
age: Number,
subjects: Array,
experience: String,
rating: String,
address: String,
postalCode: String,
achievements: String,
expDescription: String
})

module.exports = mongoose.model('Teacher', teacher)