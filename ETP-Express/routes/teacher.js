var express = require ('express')
let router = express.Router()
var mongoose = require ('mongoose')
var bodyParser = require ('body-parser')
var path = require('path')
var multer = require('multer')

const mongoURI = 'mongodb+srv://prakhar:passiton@cluster0.sjrlm.azure.mongodb.net/etp?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})

var teacher = require ('../model/teacherSchema')


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
	extended: true
}))

const storage = multer.diskStorage({
  destination: '../ETP-Angular/src/assets/teacherProfiles',
  filename: (req, file, cb) => {
cb(null, file.fieldname+'_'+Date.now()+path.extname(file.originalname));
  }
});

router.use(express.static(__dirname + './shared/'))
var upload = multer({storage: storage}).single('file')

//Find All Teachers
router.post('/searchTeacher', (req, res) => {

  teacher.find({firstName: req.body.subject}, (err, response) => {
    if(err) {
      res.send("error has occured while finding")
    }
    else
    {
      res.json(response)
    }
  });
})

router.post('/viewTeacher', (req, res) => {
  teacher.findOne({firstName: req.body.firstName}, (err, we) => {
    if(err)
      res.send("error has occured while finding")
    else
    {
      res.json(we)
    }
  });
})

//Insert New Teacher
router.post('/addTeacher', upload, (req, res) => {
  console.log(req.file)
	let teacherObj = new teacher()
  teacherObj.firstName = req.body.firstName == 'null' ? null : req.body.firstName;
  teacherObj.lastName = req.body.lastName == 'null' ? null : req.body.lastName;
  teacherObj.email = req.body.email == 'null' ? null : req.body.email;
  teacherObj.phoneNumber = req.body.phoneNumber == 'null' ? null : req.body.phoneNumber;
  teacherObj.address = req.body.address == 'null' ? null : req.body.address;
  teacherObj.postalCode = req.body.postalCode == 'null' ? null : req.body.postalCode;
  teacherObj.subjects = req.body.subjects == 'null' ? null : req.body.subjects;
  teacherObj.age = req.body.age == 'null' ? null : req.body.age;
  teacherObj.experience = req.body.experience == 'null' ? null : req.body.experience;
  teacherObj.rating = req.body.rating == 'null' ? null : req.body.rating;
  teacherObj.achievements = req.body.achievements == 'null' ? null : req.body.achievements;
  teacherObj.description = req.body.description == 'null' ? null : req.body.description;
  teacherObj.preferredLanguage = req.body.preferredLanguage == 'null' ? null : req.body.preferredLanguage;
  if(req.file)
    teacherObj.uploadPhoto = req.file.filename == 'null' ? null : req.file.filename;

	teacherObj.save((err, we) => {
		if(err)
			res.send('Error saving teacher')
		else
		{
			res.json(teacherObj)
		}
	})
})

//Find Employee By Id and Update
router.post('/rateTeacher', (req, res) => {
  teacher.update({
  	firstName: req.body.firstName
  }, { $set: 
  	{
    rating: req.body.rating,
    feedBack: req.body.feedBack
    }}, 
  	{upsert: true},
  	(err, empp) => {
  		if(err)
  			throw err
  		else
  		{
  			res.json(empp)
  		}
  })
})


//Delete Employee By Id
router.delete('/delete/:date', (req, res) => {
  teacher.remove({
  	date: req.params.date
  }, (err, empp) => {
  		if(err)
        throw err
  			//
  		else
  		{
  			res.json(empp)
  		}
  })
})

/*// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})*/

/*app.all('/secret', function (req, res, next) {
   console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
})*/

/*app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})*/

/*app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })*/

module.exports = router