const express = require('express'); 
const app = express(); 

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
]; 

app.get('/', (req, res) => {
  res.send('Howdy Aeon!')
}); 

app.get('/api/courses', (req, res) => {
  res.send(courses);
}); 

// /api/courses 
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send('The course with the given ID was NOT found.')
  res.send(course); 
});

/** 
 *
 * const course = courses.find()
 *
**/

const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Listening on port ${port}`)); 
