// Initialize an array with some elements
const myArray = ['Apple', 'Banana', 'Cherry', 'Date'];

// Function to find the index of an element
function findIndex(element) {
    const index = myArray.indexOf(element); 
    return index;
}

console.log('Original Array:', myArray); 
const index = findIndex('Cherry'); 
console.log(`Index of 'Cherry': ${index}`); 
