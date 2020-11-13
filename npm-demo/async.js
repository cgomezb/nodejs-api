// console.log('Before');
// getUser(1, (user) => {
//   getRepositories(user.name, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     })
//   })
// });
// console.log('After');

// Promise-based approach

console.log('Before');
// getUser(1)
//   .then(user => getRepositories(user.username))
//   .then(repos => getCommits(repos[0]))
//   .then(commits => console.log(commits))
//   .catch(err => console.log('Error', err.message));

// console.log('After');

// Async and await approach

async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.username);
    const commits = await getCommits(repos[0]);
    console.log(commits);  
  } catch (error) {
    console.log('Error', error.message)    
  }
}

displayCommits();
console.log('test');


// function getUser(id, callback) {
//   setTimeout(() => {
//     console.log('Reading a user from a database...');
//     callback({ id: id, name: 'cgomezb' });
//   }, 2000);
// }

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a user from a database...');
      resolve({ id: id, name: 'cgomezb' });
    }, 2000);

    // An alternative for setTimeout
    // setTimeout(resolve, 500, "one");
  });
}

// function getRepositories(username, callback) {
//   setTimeout(() => {
//     console.log('Calling github API...');
//     callback(['repo1', 'repo2', 'repo3']);
//   }, 2000);
// }

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling github API...');
      resolve(['repo1', 'repo2', 'repo3']);
      // reject({ message: 'Faild calling github' });
    }, 2000);
  });
}

// function getCommits(repo, callback) {
//   setTimeout(() => {
//     console.log('Getting commits from repo...');
//     callback(['commit1', 'commit2', 'commit3']);
//   }, 2000);
// }

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Getting commits from repo...');
      resolve(['commit1', 'commit2', 'commit3']);
    }, 2000);
  });
}
