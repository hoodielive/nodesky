console.log('Before');

getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repo, (commits) => {
    
    })
  });
}); 

/** How the above Async code would look as Synchronous 
 * console.log(before)
 * const user = getUser(1); 
 * const repos = getRepositories(user.gitHubUsername); 
 * const commits = getCommits(repos[0]); 
 * console.log('After'); 
**/ 

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
