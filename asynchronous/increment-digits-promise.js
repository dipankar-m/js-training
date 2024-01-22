const incrementDigits = (num) => {
  return new Promise((resolve, reject) => {
    //executor function
    setTimeout(() => {
      num++;
      console.log(num);
      if (num < 10) {
        resolve(incrementDigits(num));
      } else {
        resolve("done!");
      }
    }, 1000);
  });
};

incrementDigits(0).then((res) => console.log(res));
