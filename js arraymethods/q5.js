// Initialize an array with some elements
const myArray = ['Apple', 'Banana', 'Cherry', 'Date'];

// Function to modify the array using splice()
function modifyArray() {
    myArray.splice(1, 1, 'Blueberry'); 
}

// Example usage
console.log('Original Array:', myArray); 
modifyArray(); 
console.log('Updated Array:', myArray); 
