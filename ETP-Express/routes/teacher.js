var express = require ('express')
let router = express.Router()
var mongoose = require ('mongoose')
var bodyParser = require ('body-parser')


let db = 'mongodb://localhost/weather'
mongoose.connect(db)

var teacher = require ('../model/teacherSchema')


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
	extended: true
}))



//Find All Teachers
router.get('/find', (req, res) => {

  teacher.find((err, emp) => {
    if(err)
      res.send("error has occured while finding")
    else
    {
  
      res.json(emp)
    }
  });
})

router.get('/findByPostalCode/:postalCode', (req, res) => {
  teacher.findOne({postalCode: req.params.postalCode}, (err, we) => {
    if(err)
      res.send("error has occured while finding")
    else
    {
      res.json(we)
    }
  });
})

//Insert New Teacher
router.post('/addTeacher', (req, res) => {
	let teacherObj = new teacher()
       
teacherObj.name = req.body.name,
teacherObj.country = req.body.country,
teacherObj.date = req.body.date,
teacherObj.max = req.body.max,
teacherObj.min = req.body.min,
teacherObj.condition = req.body.condition,
teacherObj.img = req.body.img,

	teacherObj.save((err, we) => {
		if(err)
			res.send('error saving weather')
		else
		{
			res.json(we)
		}
	})
})

//Find Employee By Id and Update
router.put('/update/:date', (req, res) => {
  teacher.update({
  	date: req.params.date
  }, { $set: 
  	{min: req.body.min,
    max: req.body.max,
    condition: req.body.condition}}, 
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