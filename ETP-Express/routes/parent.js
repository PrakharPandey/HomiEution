var express = require ('express')
let router = express.Router()
var mongoose = require ('mongoose')
var bodyParser = require ('body-parser')

const mongoURI = 'mongodb+srv://prakhar:passiton@cluster0.sjrlm.azure.mongodb.net/etp?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})

var parent = require ('../model/parentSchema')


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
	extended: true
}))

//Insert New Parent
router.post('/addParent', (req, res) => {
	let parentObj = new parent()
  parentObj.firstName = req.body.firstName;
  parentObj.lastName = req.body.lastName;
  parentObj.email = req.body.email;
  parentObj.phoneNumber = req.body.phoneNumber;
  parentObj.address = req.body.address;
  parentObj.postalCode = req.body.postalCode;
  parentObj.subjects = req.body.subjects;
  parentObj.age = req.body.age;
  parentObj.aboutYou = req.body.aboutYou;
  parentObj.aboutStudent = req.body.aboutStudent;
  parentObj.relation = req.body.relation;
  parentObj.isRegistered=req.body.isRegistered;
  parentObj.profession=req.body.profession;
  parentObj.studentUniqueID=req.body.studentUniqueID;
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