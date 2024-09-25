// Initialize an array with some elements
const myArray = [1, 2, 3, 4, 5, 6];

// Function to filter elements based on a condition
function filterArray() {
    const filteredArray = myArray.filter(element => element % 2 === 0); 
    return filteredArray;
}


console.log('Original Array:', myArray); 
const filteredArray = filterArray(); 
console.log('Filtered Array:', filteredArray); 
