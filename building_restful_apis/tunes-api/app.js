const Joi = require('joi'); 
const express = require('express');
const app = express(); 

app.use(express.JSON());

/** MUSIC VAR **/
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

function validateArtist()
