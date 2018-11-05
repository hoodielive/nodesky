Promise.race([
  new Promise((resolve, reject) => {
    // some possibly long operation  
  
  }),
  
  new Promise((resolve, reject) => {
    setTimeout(reject, 5000); 
  }) 
]).then(() => {
  console.log('Success!');
}, () => {
  console.log('Failed!'); 
});

