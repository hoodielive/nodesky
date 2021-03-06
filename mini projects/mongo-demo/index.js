const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/playground", { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB...", err)); 

const courseSchema = new mongoose.Schema({
    name: String, 
    author: String, 
    tags: [ String ],
    date: { type: Date, default: Date.now }, 
    isPublished: Boolean,
});

async function createCourse() {
    const Course = mongoose.model("Course", courseSchema); 
    const course = new Course({
        name: "React Course", 
        author: "Larry", 
        tags: ["react", "frontend"],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);
}

async function getCourses() {
    const Course = mongoose.model("Course", courseSchema); 
    const courses = await Course
         .find({ author: 'Larry', isPublished: true })
  //     .find({ price: { $gte: 10, $lte: 20 } })
  //     .limit(10)
         .sort({ name: -1 })
  // .countDocuments() 
         .select( { name: 1, tags: 1 });
    console.log(courses); 
} 

getCourses(); 
