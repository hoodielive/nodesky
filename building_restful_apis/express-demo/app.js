/** DEPENDENCIES **/ 
const express = require('express');
const app = express(); 
const Joi = require('joi');  

/** MIDDLEWARE **/
app.use(express.json());

/** VARIABLES **/
const courses = [
  { id: 1, name: 'Course 1'},
  { id: 2, name: 'Course 2'},
  { id: 3, name: 'Course 3'},
];

/** GET REQUESTS **/
app.get('/api/courses', (req, res) => {
  res.send(courses); 
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id)); 
  if (!course) return res.status(404).send('Sorry, you have requested a resource that does NOT exist.');
  res.send(course)
});

/** POST **/ 
app.post('/api/courses', (req, res) => {

  /** JOI Validation **/
  const { error } = validateCourse(req.body);  

  /** if Invalid return 400 - Bad Request **/ 
  if (error) return res.status(400).send(result.error.details[0].message); 

  const course = {
    id: courses.length + 1, 
    name: req.body.name
  };

  courses.push(course);
  res.send(course);
}); 

/** PUT/UPDATE **/
app.put('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id)); 
  if (!course) return res.sendStatus(404).send("Sorry, but the request ID that you specified does NOT exist.")

  const { error } = validateCourse(req.body); 
    
  if (error) return res.sendStatus(400).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);

});

/** DELETE **/
app.delete('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id)); 
  if (!course) return res.sendStatus(404).send('The course id specified does NOT exist.')
  const index = courses.indexOf(course); 
  courses.splice(index, 1); 
  res.send(course);
})

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required()  
  }

  return Joi.validate(course, schema); 
}
/** SERVER STUFF **/
const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Listening on port ${port}...`)); 
