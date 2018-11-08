console.log('Before');

getUser(1, (user) => {
 // console.log('User', user)
  getRepositories(user.gitHubUsername, (repos) => {
    console.log('Repos', repos);
  });
}); 


console.log('After');

/** 
 * There are 3 patterns to deal with a longer running operation
 * callbacks
 * promises
 * async/await
**/

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from a database....');  
    callback({ id: id, gitHubUsername: 'lawrence'});
  }, 2000); 
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log('Connecting to the Github API')
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000);
}; 
