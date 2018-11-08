console.log('Before');

getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repo, (commits) => {
        console.log(commits); 
    })
  });
}); 

console.log('After');

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
