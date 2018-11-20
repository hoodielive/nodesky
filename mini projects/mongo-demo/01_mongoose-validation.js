const mongoose = require("mongoose"); 

mongoose.connect("mongodb://localhost/mongo-exercises", { useNewUrlParser: true })
    .then(() => console.log("Connected to mongo-exercises db collection.."))
    .catch(() => console.error("Could not connect to mongo-exercises db collection for some reason..."));

const courseSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    minlength: 5, 
    maxlength: 255,
    // match: /pattern/ 
  }, 
  category: {
    type: String, 
    required: true, 
    enum: ['web', 'mobile', 'network'],
  },
    author: String, 
    tags: [ String ],
    date: { type: Date, default: Date.now }, 
    isPublished: Boolean,
  price: { 
    type: Number, 
    required: function() { return this.isPublished; }, 
    min: 10,
    max: 200,
}) 

const Course = mongoose.model('Course', courseSchema); 

async function createCourse() {
  const course = new Course({
    name: 'Angularity', 
    category: '-', 
    author: 'Larry', 
    tags: ['angularity', 'frontend'], 
    isPublished: true, 
    price: 15
  });
};

async function getCourses() {
    return await Course
    .find({ isPublished: true, tags: 'backend' })
    .sort('-name')
    .select('name author');
} 
async function run() {
  const courses = await getCourses(); 
  console.log(courses);
}

run();
