let mongoose = require('mongoose')
let Schema = mongoose.Schema


let student = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	phoneNumber: Number,
	address: String,
	postalCode: Number,
	subjects: Array,
	age: Number,
	uploadPhoto: String,
	class: Number,
	school: String,
	parentRegisterFlag: String,
	previousResult: String,
	introduction: String,
	parentUniqueID: String,
	parentPhoneNumber: Number,
})

module.exports = mongoose.model('Student', student)