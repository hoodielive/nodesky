console.log('Before');
const user = getUser(1); 
console.log(user)
console.log('After');

/** 
 * There are 3 patterns to deal with a longer running operation
 * callbacks
 * promises
 * async/await
**/

function getUser(id) {
  setTimeout(() => {
    console.log('Reading a user from a database....');  
    return { id: id, gitHubUsername: 'lawrence'};
  }, 2000); 

  return 1; 
}
