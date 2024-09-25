function wait(delay) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }
  
  async function delayedLogSequence(messagesAndDelays) {
    for (const [message, delay] of messagesAndDelays) {
      await wait(delay);       
      console.log(message);     
    }
  }
  
  
  const messagesAndDelays = [
    ["Message 1", 1000],  
    ["Message 2", 2000],  
    ["Message 3", 1500],  
  ];
  
  delayedLogSequence(messagesAndDelays).then(() => {
    console.log("All messages logged.");
  });
  