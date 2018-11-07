const express = require('express'); 
const router = express.Router(); 

router.get('/', (req, res) => {
  res.send(artists); 
  return; 
});

router.get('/:id', (req, res) => { 
  const artist = artists.find(a => a.id === parseInt(req.params.id)); 
  if (!artist) return res.sendStatus(404).send('We are sorry but the requested artist id does NOT exist'); 
  const { error } = validateArtist(req.body);
  res.send(artist)
});

router.post('/:id', (req, res) => {
  const { error } = validateArtist(req.body); 
  if (error) return res.sendStatus(400).send(error.details[0].message); 

  const artist = {
    id: artists.length + 1, 
    name: req.body.name
  }; 
}); 

router.put('/:id', (req, res) => {
  const artist = artists.find(a => a.id === parseInt(req.params.id)); 
  if (!artist) return res.sendStatus(400).send('Are you cracked? This ID does not exist!')
  const { error } = validateArtist(req.body); 
  if (error ) return res.sendStatus(400).send(error.details[0].message); 
  artist.name = req.body.name;
  res.send(artist);
});

router.delete('/:id', (req, res) => {
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

module.exports = router; 
