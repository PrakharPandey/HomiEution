var express = require ('express')
let router = express.Router()
var mongoose = require ('mongoose')
var bodyParser = require ('body-parser')
var multer = require('multer')

const mongoURI = 'mongodb+srv://prakhar:passiton@cluster0.sjrlm.azure.mongodb.net/etp?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})

var student = require ('../model/studentSchema')


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
	extended: true
}))

const storage = multer.diskStorage({
  destination: '../shared/uploads/teacherProfiles',
  filename: (req, file, cb) => {
callBack(null, 'Teacher_${file.originalname}')
  }
});

router.use(express.static(__dirname + '../shared/ '))
var upload = multer({storage: storage}).single('profileImage')


//Insert New Student
router.post('/addStudent', upload, (req, res) => {
	let studentObj = new student()
  studentObj.firstName = req.body.firstName;
  studentObj.lastName = req.body.lastName;
  studentObj.email = req.body.email;
  studentObj.phoneNumber = req.body.phoneNumber;
  studentObj.address = req.body.address;
  studentObj.postalCode = req.body.postalCode;
  studentObj.subjects = req.body.subjects;
  studentObj.age = req.body.age;
  studentObj.parentRegisterFlag = req.body.parentRegisterFlag;
  studentObj.previousResult = req.body.previousResult;
  studentObj.introduction = req.body.introduction;
  studentObj.parentUniqueID = req.body.parentUniqueID;
  studentObj.parentPhoneNumber = req.body.parentPhoneNumber;
  // studentObj.uploadPhoto = req.file.uploadPhoto;
  

	studentObj.save((err, we) => {
		if(err)
			res.send('Error saving student')
		else
		{
			res.json(studentObj)
		}
	})
})

module.exports = router