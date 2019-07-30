const express = require('express'); 
const app = express(); 
const numbers = [ 1, 2, 3, ];

app.use(express.json()); 
app.use(express.urlencoded()); 
app.use(express.static()); 

app.get('/', (req, res) => {
  res.send('Howdy'); 
}); 

app.get('/api/courses', (req, res) => {
  res.send(numbers); 
}); 

app.post('/api/courses', (req, res) => {
  res.json(numbers); 
}); 

const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Listening on port ${port}..`)); 
