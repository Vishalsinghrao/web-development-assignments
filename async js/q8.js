function randomDelayMessage(message) {
    const randomDelay = Math.floor(Math.random() * 5000) + 1000; // Random delay between 1 and 5 seconds (1000ms to 5000ms)
  
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(message); // Log the message after the random delay
        resolve();
      }, randomDelay);
    });
  }
  
  
  randomDelayMessage("This message is displayed after a random delay").then(() => {
    console.log("Message logged with random delay.");
  });
  