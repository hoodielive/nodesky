(param1, param2) => { statements }
(param1, param2) => expression // this is legal, but you must not add a ';'
(param1, param2) => { return expression; }; 
(singleParam) => { statements }
singleParam => { statements }

() => { statements }
() => expression 
() => { return expression; }

(param1, param2, paramN) => expression 

// Normal Function 
let multiply = function(x, y) {
  return x * y; 
}; 

let multiply2 = (x, y) => { return x * y }; 
// or 
let multiply3 = (x, y) => x * y; 

let materials = [
  'Hydrogen', 
  'Helium', 
  'Lithium', 
  'Beryllium'
]; 

let materialLength1 = materials.map(function(material) {
  return material.length;
});

let materialLength2 = materials.map((material) => {
  return material.length; 
});

let materialLength3 = mateirals.map(material => material.length); 

// no binding of 'this'
function Person() {
  this.age = 0; 

  setInterval(() => {
    this.age++;  
  }, 1000); 
}

var p = new Person(); 

// returning object literals 
let func = () => ({foo: 1});  // with this, whenever you are desiring to return an object, you must put it in parantheses 

// Line breaks are not allowed in arrow functions 
var func = () => 1; 
