// const promiseResolved = Promise.resolve({ id: 1 });
// promiseResolved.then(result => console.log(result));

// const promiseRejected = Promise.reject(new Error('Reason for rejection...'));
// promiseRejected.catch(err => console.log(err));

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async operation 1...');
    resolve(1);
  }, 3000)
});

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Async operation 1...');
//     reject(new Error('Because something failed...'));
//   }, 2000)
// });

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async operation 2...');
    resolve(2);
  }, 2000)
});

// Promise.all([promise1, promise2])
//   .then(result => console.log(result))
//   .catch(err => console.log('Error', err.message));

Promise.race([promise1, promise2])
  .then(result => console.log(result))
  .catch(err => console.log('Error', err.message));
