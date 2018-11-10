const p = Promise.resolve({
  id: 1
});

p.then((result) => console.log(result));

const r = Promise.reject(new Error('reason for rejection'));
r.catch(error => console.log(error));