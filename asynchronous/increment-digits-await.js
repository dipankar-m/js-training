// Example using async/await
const incrementDigits = async (num) => {
  num++;
  console.log(num);
  if (num < 10) {
    await incrementDigits(num);
  } else {
    return "done!";
  }
};

(async () => {
  const res = await incrementDigits(0);
  console.log(res);
})();
