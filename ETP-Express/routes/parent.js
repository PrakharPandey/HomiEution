var express = require ('express')
let router = express.Router()
var mongoose = require ('mongoose')
var bodyParser = require ('body-parser')
var path = require('path')
var multer = require('multer')

const mongoURI = 'mongodb+srv://prakhar:passiton@cluster0.sjrlm.azure.mongodb.net/etp?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})

var parent = require ('../model/parentSchema')


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
	extended: true
}))

const storage = multer.diskStorage({
  destination: '../ETP-Angular/src/assets/parentProfiles',
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.fieldname+'_'+Date.now()+path.extname(file.originalname));
  }
});

router.use(express.static(__dirname + './shared/'))
var upload = multer({storage: storage}).single('file')

//Insert New Parent
router.post('/addParent', upload, (req, res) => {
  let parentObj = new parent()
  parentObj.firstName = req.body.firstName == 'null' ? null : req.body.firstName;
  parentObj.lastName = req.body.lastName == 'null' ? null : req.body.lastName;
  parentObj.email = req.body.email == 'null' ? null : req.body.email;
  parentObj.phoneNumber = req.body.phoneNumber == 'null' ? null : req.body.phoneNumber;
  parentObj.address = req.body.address == 'null' ? null : req.body.address;
  parentObj.postalCode = req.body.postalCode == 'null' ? null : req.body.postalCode;
  parentObj.subjects = req.body.subjects == 'null' ? null : req.body.subjects;
  parentObj.age = req.body.age == 'null' ? null : req.body.age;
  parentObj.aboutYou = req.body.aboutYou == 'null' ? null : req.body.aboutYou;
  parentObj.aboutStudent = req.body.aboutStudent == 'null' ? null : req.body.aboutStudent;
  parentObj.relation = req.body.relation == 'null' ? null : req.body.relation;
  parentObj.isRegistered = req.body.isRegistered == 'null' ? null : req.body.isRegistered;
  parentObj.profession = req.body.profession == 'null' ? null : req.body.profession;
  parentObj.studentUniqueID = req.body.studentUniqueID == 'null' ? null : req.body.studentUniqueID;
  parentObj.studentName = req.body.studentName == 'null' ? null : req.body.studentName;
  parentObj.schoolName = req.body.schoolName == 'null' ? null : req.body.schoolName;
  if(req.file)
    parentObj.uploadPhoto = req.file.filename == 'null' ? null : req.file.filename;

  parentObj.save((err, we) => {
    if(err){
     res.send('error saving Record')
   }	
   else
   {
     res.json(parentObj)
   }
 })
})

module.exports = router