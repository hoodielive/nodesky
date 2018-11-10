const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mongo-exercises", { useNewUrlParser: true })
    .then(() =>console.log("Connected to mongo-exercises db collection"))
    .catch(err => console.error("Something went wrong with regards to connecting to your db collection", err));


// Set a schema 
const courseSchema = mongoose.Schema({
    name: String, 
    author: String, 
    tags: [ String ], 
    date: Date, 
    isPublished: Boolean, 
    price: Number
});

// Set a model 

const Course = mongoose.model("Course", courseSchema); 

async function getCourses() {
    return await Course
        .find({ isPublished: true })
        .or({
            /*.by.*/  
        })
        .sort("-price");
}

async function run() {
    const course = await getCourses(); 
    console.log(course);
}

run(); 


async function updateCourse(id) {
    // Approach Query First
    // FindById() 
    // Modify its properties 
    // save()

    // Approach: Update first
    // update directly
    // Optionally: get Updated document
}
