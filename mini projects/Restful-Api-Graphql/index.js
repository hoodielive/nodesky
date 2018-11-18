const express = require('express'); 

const app = express(); 

const apiRouter = express.Router(); 

apiRouter.get('/', (req, res) => res.json({ apiRouter: true }))

app.use('/api', apiRouter); 

app.get('/', (req, res) => {
  res.json({ first: true }); 
}); 


const port = process.env.PORT || 3000; 
app.listen(port, () =>console.log(`Listening on port ${port}`));  
