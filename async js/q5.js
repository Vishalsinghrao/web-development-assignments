function wait(delay) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }
  
  function countdown(number) {
    return new Promise(async (resolve) => {
      while (number >= 0) {
        console.log(number);
        await wait(1000); 
        number--;
      }
      resolve(); 
    });
  }
  
  
  countdown(5).then(() => {
    console.log("Countdown complete!");
  });
  