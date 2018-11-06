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

/** GET REQUEST **/
app.get('/api/courses', (req, res) => {
  res.send(courses); 
});

app.get('/api/courses/:id', (req, res) => {
  const course = (c => c.id === req.params.id); 
  if (!course) res.status(404).send('Sorry, you have requested a resource that does NOT exist.');
  res.send(course)
});

/** POST **/ 
app.post('/api/courses', (req, res) => {

  /** JOI Validation **/
  const { error } = validateCourse(req.body);  

  /** if Invalid return 400 - Bad Request **/ 
  if (error) {
    res.status(400).send(result.error.details[0].message); 
    return; 
  }

  const course = {
    id: courses.length + 1, 
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
}); 

app.put('/api/courses/:id', (req, res) => {
 
  /** Look up course **/
  const course = courses.find(c => c.find === parseInt(req.params.id)); 
  
  /** If not existing, 404 Validate course **/ 
  if (!course) res.status(404).send('The course with the given ID was NOT found.')

  const { error } = validateCourse(req.body);  

  /** if Invalid return 400 - Bad Request **/ 
  if (error) {
    res.status(400).send(result.error.details[0].message); 
    return; 
  }
  
  /** Update course **/
  course.name = req.body.name; 

  /** Return the updated course to client **/
  res.send(course);
});

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required()  
  }

  return Joi.validate(course, schema); 
}
/** SERVER STUFF **/
const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Listening on port ${port}...`)); 
