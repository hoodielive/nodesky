const express = require('express'); 
const app = express(); 

app.get('/', (req, res) => {
  res.send('Howdy Aeon!')

}); 

app.get('/api/courses', (req, res) => {
  res.send([1,2,3]);
}); 

port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`)); 
