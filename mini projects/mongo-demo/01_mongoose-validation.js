const mongoose = require("mongoose"); 

mongoose.connect("mongodb://localhost/mongo-exercises", { useNewUrlParser: true })
    .then(() => console.log("Connected to mongo-exercises db collection.."))
    .catch(() => console.error("Could not connect to mongo-exercises db collection for some reason..."));

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },  
    author: String, 
    tags: [ String ],
    date: { type: Date, default: Date.now }, 
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema); 

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
