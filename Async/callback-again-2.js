


const add = function(a, b, callback) {
  callback( a + b );
}

add(4, 5, (result) => {
  setTimeout(() => {
    console.log('Result:', result) 
  }, 2000);
});
