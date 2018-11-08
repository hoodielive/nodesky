console.log('Before');

getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repo, (commits) => {
        console.log(commits); 
    })
  });
}); 

console.log('After');

function getUser(id) {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        console.log('Reading a user from a database....');  
        resolve({ id: id, gitHubUsername: 'lawrence'});
    }, 2000); 
  });
};

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('Connecting to the Github API')
          resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);
  });
}; 


function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('Calling the Github API');
          resolve(['commit'])
        }, 2000);
    });
};