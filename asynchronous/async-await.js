const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1 resolved");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise2 resolved");
  }, 5000);
});

async function handlePromise() {
  console.log("Hello World");

  const val = await p1; //await can only be used inside an async function
  console.log("This is await 1");
  console.log(val);

  const val2 = await p2;
  console.log("This is await 2");
  console.log(val2);
}

handlePromise();

// function getData() {
//   // JS engine will not wait for the promise to be resolved.
//   p1.then((res) => console.log(res));
//   console.log("This is an example of Promise .then");
// }

// getData();
