console.log('This is BEFORE!');


const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is the resolution'); 
    reject(new Error('message'))
  }, 2000);
})  

p 
  .then(result => console.log('Result', result))
  .catch(err => console.log('Error', err.message))
console.log('This is AFTER!')
