// eslint-disable-next-line no-console
console.log('Before');

// Javascript is NOT going to wait for you.. lol
setTimeout(() => {
  
  // eslint-disable-next-line no-console
  console.log('Reading from the database...')
}, 2000)

// eslint-disable-next-line no-console
console.log('After')

// Async does NOT mean concurrent or multithreaded!
