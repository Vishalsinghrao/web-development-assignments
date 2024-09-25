function wait(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(); // Resolves the Promise after the delay
      }, delay);
    });
  }
  
  // Example usage:
  wait(2000).then(() => {
    console.log("Resolved after 2 seconds");
  });
  