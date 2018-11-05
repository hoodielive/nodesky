const fs = require('fs'); 
const numbers = [2, 6, 7, 8, 1]; 
const even = numbers.filter(x => x%2 === 0); 

/** 
 * filter is defined inline 
 * keyword 'function' is removed
 * leaves only list parameters 
 * when a list of args contains more than 1 arg, surround with parentheses and separate args with commas
 * when there is no arg, provide set of empty parentheses before the arrow 
 * () => {...} 
 * when body of function is one line, no need to write 'return' as it is implicitly applied 
 * if u need more lines to the body, wrap in curly braces, but use return because it is no longer implicity implied
 * it needs to be stated explicitly 
**/

const nums = [2, 6, 7, 8, 1]; 
const evenums = nums.filter(x => {
  if (x%2 === 0) {
    // fs.createReadStream(x + ' is even!').pipe(process.stdout); 
    console.log(x + ' is even!'); 
    return true; 
  }
}); 


function DelayedGreeter1(name) {
  this.name = name; 
}

DelayedGreeter1.prototype.greet = function() { 
  setTimeout( function cb() { 
    console.log('Hello ' + this.name); 
  }, 500); 
};

const greeter = new DelayedGreeter1('Aeonos');
greeter.greet(); // will print "hello, undefined" because it needs to be bound .bind(this)

function DelayedGreeter2(name) {
  this.name = name; 
}

DelayedGreeter2.prototype.greet = function() {
  setTimeout((function cb() { 
    console.log('Hello ' + this.name);     
  }).bind(this), 500); 
}; 

const greeter2 = new DelayedGreeter2('Aeonos'); 
greeter2.greet(); // now will display Aeonos! 

// all this bullshit goes away with arrows lol 

function DelayedGreeter3(name) {
  this.name = name; 
}

DelayedGreeter3.prototype.greet = function() {
  setTimeout( () => console.log('Hello ' + this.name), 500)
}

const greeter3 = new DelayedGreeter3('Aeon')
greeter3.greet(); 
