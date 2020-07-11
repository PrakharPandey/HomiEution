let mongoose = require('mongoose')
let Schema = mongoose.Schema


let parent = new Schema({
id: String,	
firstName: String,
lastName: String,
email: String,
phoneNumber: Number,
address: String,
postalCode: Number,
age: Number,
profession: String,
relation: String,
student: String,
aboutYou: String,
aboutStudent: String,
studentUniqueID: Number,
isRegistered: String,
studentName: String,
schoolName: String,
subjects: Array,
})

module.exports = mongoose.model('Parent', parent)