console.log('Before');

getUser(1)
  .then(user => getRepositories(user.gitHubUsername)
    .then(repos => getCommits(repo[0]))
    .then(commits => console.log('Commits', commits))
    .catch(err => console.log('Error', err.message));

    // Async and Await approach
    async function displayCommits() {
      try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
      } catch (err) {
        console.log('Error', err.message);
      }
    }
    displayCommits();

    console.log('After');

    function getUser(id) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('Reading a user from a database....');
          resolve({
            id: id,
            gitHubUsername: 'lawrence'
          });
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