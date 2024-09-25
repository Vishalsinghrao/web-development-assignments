// Initialize an array with some elements
const myArray = ['Banana', 'Cherry', 'Date'];

// Function to add an element to the beginning of the array using unshift()
function addToBeginning(element) {
    myArray.unshift(element); 
}


console.log('Original Array:', myArray);
addToBeginning('Apple'); 
console.log('Updated Array:', myArray); 
