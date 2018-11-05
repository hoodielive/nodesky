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

  /** if (!req.body.name || req.body.name.length < 3 ) {
    // 400 Bad Request 
    res.status(400).send('Sorry, you must provide a name greater than 3 characters.')
   };**/

  /** JOI Validation **/
  const schema = {
  name: Joi.string().min(3).required()
  };

  const result = Joi.validate(req.body, schema);
  if (result.error) {
    res.status(400).send(result.error);
    return;
  }

  const course = {
    id: courses.length + 1, 
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
}); 

/** SERVER STUFF **/
const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Listening on port ${port}...`)); 
