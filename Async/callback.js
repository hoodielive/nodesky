
getUser(1, getRepositories); 

function getRepositories(user) {
  getRepositories(user.gitHubUser, getCommits);  
}

function getCommits(repos) {
  getCommits(repo, displayCommits); 
}

function displayCommits(commits) {
  console.log(commits);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log('It has been 2 secs, so I figured I say hi.'); 
    callback({ id: id, gitHubUser: 'Larry'});
  }, 2000); 
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log(`User ${username} has the following repos: `) 
    callback(['repo1', 'repo2', 'repo3']); 
  }, 2000);
}

function getCommits(callback) {
  setTimeout(() => {
    console.log('I found the following commits: ') 
    callback(['43e25', '69ea3r', 'yt3251'])
  }, 2000)
}
