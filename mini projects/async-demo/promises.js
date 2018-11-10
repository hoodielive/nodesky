/** a Promise holds the eventual result of an asynchronous operation */
/** Pending -async- Fulfilled or Rejected */

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(1); // pending => resolved, fulfilled
    reject(new Error('message')); // pending => rejected
  }, 2000);
}); 

p
  .then(result => console.log('Result', result))
  .catch(err => console.log('Error', err.message));

// anywhere you are using callbacks, you can modify to use promises! 