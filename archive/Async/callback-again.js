console.log('Start');

getUser(1, function(user) {
  console.log(user);
  getRepositories(repos, function() {
    console.log('Repo: ', repos) 
  });
});

console.log('End');

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Return this object..'); 
    callback({ id: id, username: 'Dradi' }) 
  }, 2000); 
};

function getRepositories(repos, callback) {
  setTimeout(() => {
    console.log('Calling Github API'); 
    callback([ 'repo1', 'repo2','repo3']);
  }, 2000);
}
