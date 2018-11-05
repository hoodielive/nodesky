// example of a synchronous continuation-passing style 
function add(a, b) {
  return a + b; 
}

add(4, 5)

// the equivalent continutation-passing style of the preceding function with a callback 

function adder(a, b, callback) {
  callback(a + b);
}

console.log('before'); 
adder(1, 2, result => console.log('Result: ' + result)); 
console.log('after'); 

function additionAsync( a, b, callback ) {
  setTimeout(() => callback(a + b ), 100)
}

console.log('this is before!'); // 1 
additionAsync(1, 2, result => console.log('Result: ' + result)); // 3 
console.log('this is after!'); // 2

/** 
 * Since setTimeout() triggers an asynchronous operation, it will not wait for the callback to be executed, but
 * instead, it returns immediately, giving control back to addtionalAsync(), and then back to its caller. This
 * property in NodeJS is crucial, as it gives control back to the event loop as soon as an asynchronous request is
 * sent, thus allowing a new event from the queue to be processed.
**/

const result = [1, 5, 7].map(element => element - 1); 
console.log(result); // 0, 4, 6
