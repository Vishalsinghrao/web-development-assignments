function repeatAction(action, interval, duration) {
    return new Promise((resolve) => {
      const intervalId = setInterval(() => {
        action(); // Execute the provided action at each interval
      }, interval);
  
      // Stop repeating after the specified duration
      setTimeout(() => {
        clearInterval(intervalId); // Clear the interval to stop the action
        resolve(); // Resolve the promise after the duration
      }, duration);
    });
  }
  
 
  repeatAction(() => {
    console.log("Action executed!");
  }, 1000, 5000).then(() => {
    console.log("Repeating action stopped after 5 seconds.");
  });
  