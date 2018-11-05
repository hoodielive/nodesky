const x = 22; 
const y = 17; 
const obj = { x, y }; 

// write a module that exports the functions square and cube mapped to properties with the same name 
module.exports = {
  square(x) {
    return x * x;  
  }, 
  cube(x){
    return x * x * x;  
  }
}; 


