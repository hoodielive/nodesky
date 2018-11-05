/**
 * One of the most dangerous situations is to have an API that behaves synchronously under certain conditions and 
 * asynchronously under others. 
 * Check this out.
**/ 

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

/** put peice into function **/ 

inconsistentRead()
/**
 * The function uses the cache variable to store the results of different file read operations. 
 * Bear in mind that this is just an example, it does not have error management, and the caching logic itself is
 * suboptimal.
 * Its dangerous because it behaves asynchronously if the cache is not set-which is not until the fs.readFile()
 * function returns its results-but it will also be synchronous for all the subsequent requests for a file already
 * in the cache-triggering an immediate invocation of the callback. 
**/ 


