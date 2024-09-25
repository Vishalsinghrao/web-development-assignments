function wait(delay) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }
  
  function delayedLogSequence(messagesAndDelays) {
    let promiseChain = Promise.resolve(); 
  
    messagesAndDelays.forEach(([message, delay]) => {
      promiseChain = promiseChain
        .then(() => wait(delay))  
        .then(() => {
          console.log(message);   
        });
    });
  
    return promiseChain; 
  }
  
  // Example usage:
  const messagesAndDelays = [
    ["Message 1", 1000], 
    ["Message 2", 2000], 
    ["Message 3", 1500], 
  ];
  
  delayedLogSequence(messagesAndDelays).then(() => {
    console.log("All messages logged.");
  });
  