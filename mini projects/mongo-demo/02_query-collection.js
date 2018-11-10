const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/mongo-exercises', { useNewUrlParser: true })
  .then(() =>console.log('Connected to mongo-exercises db...'))
  .catch(err => console.error('Something went wrong with regards to connecting to mongo-exercises..', err));


// Create schema 
const courseSchema = new mongoose.Schema({
  name: String, 
  author: String, 
  tags: [ String ], 
  date: Date, 
  isPublished: Boolean, 
  price: Number
});

// Create model 
const Course = mongoose.model('Course', courseSchema);

async function getCourses() {

  return await Course
    .find({ isPublished: true, tags: { $in: ['frontend', 'backend'] }}) // you can also use .or([{}])
    .sort('-price')
    .select('name author price') 
}

async function run() {
  const courses = await getCourses(); 
  console.log(courses)
}

run(); 
