/** PULL in Libs **/
const express = require('express'); 
const app = express();

/** Middleware **/
app.use(express.json());

/** Variables **/
const courses = [
  { id: 1, name: 'course1'},
  { id: 2, name: 'course2'},
  { id: 3, name: 'course3'},
]; 

/** GET **/
app.get('/', (req, res) => {
  console.log('You are at the root of the API'); 
}); 

app.get('/api/courses', (req, res) => {
  res.send(courses)
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find( c => c.id === parseInt(req.params.id)); 
  if (!course) res.status(404).send('The specified course could not be found.'); 
  res.send(course);
});

/** POST-> Route Handler **/ 
app.post('/api/courses', (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    // 400 Bad Request 
    res.status(400).send('Name is required and should be a minimum of 3 characters');
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

app.listen(port, () => console.log(`Now listening on port ${port}...`))
