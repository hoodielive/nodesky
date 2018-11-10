async function removeCourse(id) {
 const result = await Course.deleteOne({ _id: id});
  console.log(result); 
}

removeCourse();
