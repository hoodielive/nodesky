const express = require('express');
const app = express();
const Joi = require('joi');
const helmet = require('helmet');
const morgan = require('morgan');
const logger = require('./middleware');

/** console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get('env')}`);
**/

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('Morgan enabled...')
}

app.use(express.json());
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('tiny'));

/** ARTIST CONTAINER **/
artists = [
  { id: 1, name: '+ma' }, 
  { id: 2, name: 'hajino' }, 
  { id: 3, name: 'yclept insan' }, 
  { id: 4, name: 'CYGN' }, 
  { id: 5, name: 'tzyurash' }
];

app.get('/api/artists', (req, res) => {
  res.send(artists); 
  return; 
});

app.get('/api/artists/:id', (req, res) => { 
  const artist = artists.find(a => a.id === parseInt(req.params.id)); 
  if (!artist) return res.sendStatus(404).send('We are sorry but the requested artist id does NOT exist'); 
  const { error } = validateArtist(req.body);
  res.send(artist)
});

app.post('/api/artists/:id', (req, res) => {
  const { error } = validateArtist(req.body); 
  if (error) return res.sendStatus(400).send(error.details[0].message); 

  const artist = {
    id: artists.length + 1, 
    name: req.body.name
  }; 
}); 

app.put('/api/artists/:id', (req, res) => {
  const artist = artists.find(a => a.id === parseInt(req.params.id)); 
  if (!artist) return res.sendStatus(400).send('Are you cracked? This ID does not exist!')
  const { error } = validateArtist(req.body); 
  if (error ) return res.sendStatus(400).send(error.details[0].message); 
  artist.name = req.body.name;
  res.send(artist);
});

app.delete('/api/artists/:id', (req, res) => {
  const artist = artists.find(a => a.id === parseInt(req.params.id)); 
  if (!artist) return res.sendStatus(404).send('Artist does not exist!')
  const index = artists.indexOf(artist); 
  artists.splice(index, 1); 
  res.send(artist)
})
function validateArtist(artist) {
  const schema = {
    name: Joi.string().min(3).required()
  };
  return Joi.validate(artist, schema);
}

/** SERVER STUFF **/
const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Listening on port ${port}...`)); 
