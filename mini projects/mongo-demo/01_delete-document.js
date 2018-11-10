async function removeCourse(id) {
 const result = await Course.deleteOne({ _id: id});
  // for many do deleteMany({}) -> returns how many were deleted
  // findByIdAndRemove(id); 
  console.log(result); 
}

removeCourse();
