var express = require ('express')
let router = express.Router()
var mongoose = require ('mongoose')
var bodyParser = require ('body-parser')
var path = require('path')
var multer = require('multer')

const mongoURI = 'mongodb+srv://prakhar:passiton@cluster0.sjrlm.azure.mongodb.net/etp?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})

var student = require ('../model/studentSchema')


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
	extended: true
}))

const storage = multer.diskStorage({
  destination: '../ETP-Angular/src/assets/studentProfiles',
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.fieldname+'_'+Date.now()+path.extname(file.originalname));
  }
});

router.use(express.static(__dirname + './shared/'))
var upload = multer({storage: storage}).single('file')


//Insert New Student
router.post('/addStudent', upload, (req, res) => {
	let studentObj = new student()
  studentObj.firstName = req.body.firstName == 'null' ? null : req.body.firstName;
  studentObj.lastName = req.body.lastName == 'null' ? null : req.body.lastName;
  studentObj.email = req.body.email == 'null' ? null : req.body.email;
  studentObj.phoneNumber = req.body.phoneNumber == 'null' ? null : req.body.phoneNumber;
  studentObj.address = req.body.address == 'null' ? null : req.body.address;
  studentObj.postalCode = req.body.postalCode == 'null' ? null : req.body.postalCode;
  studentObj.subjects = req.body.subjects == 'null' ? null : req.body.subjects;
  studentObj.age = req.body.age == 'null' ? null : req.body.age;
  studentObj.parentRegisterFlag = req.body.parentRegisterFlag == 'null' ? null : req.body.parentRegisterFlag;
  studentObj.previousResult = req.body.previousResult == 'null' ? null : req.body.previousResult;
  studentObj.introduction = req.body.introduction == 'null' ? null : req.body.introduction;
  studentObj.parentUniqueID = req.body.parentUniqueID == 'null' ? null : req.body.parentUniqueID;
  studentObj.parentPhoneNumber = req.body.parentPhoneNumber == 'null' ? null : req.body.parentPhoneNumber;
  studentObj.school = req.body.school == 'null' ? null : req.body.school;
  studentObj.class = req.body.class == 'null' ? null : req.body.class;
  if(req.file)
    studentObj.uploadPhoto = req.file.filename == 'null' ? null : req.file.filename;

  studentObj.save((err, we) => {
    if(err) {
      console.log(err)
    }
    else
    {
     res.json(studentObj)
   }
 })
})

module.exports = router