const fs = require('fs'); 
const cache = {}; 
function inconsistentRead(filename, callback) {
  if(cache[filename]) {
    // invoked synchronously 
    callback(cache[filename]); 
  }
  else {
    // asynchronous function 
    fs.readFile(filename, 'utf-8', (err, data) => {
      cache[filename]  = data; 
      callback(data); 
    }); 
  }
}

inconsistentRead()
function createFileReader(filename) { 
  const listeners = []; 
  inconsistentRead(filename, value => { 
    listeners.forEach(listener => listener(value)); 
  }); 

  return {
    onDataReady: listener => listeners.push(listener) 
  }; 
}; 

createFileReader('love'); 

/** 
 * When the preceding function is invoked, it creates a new object that acts as a notifier, 
 * allowing us to set multiple listeners for a file read operation. 
 * All the listeners will be invoked at once when the read operation completes and the data is available.
 * The preceding function uses our inconsistentRead() function to implement this functionality. 
**/ 


