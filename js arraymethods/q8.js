// Initialize an array with some elements
const myArray = [1, 2, 3, 4];

// Function to create a new array by transforming elements
function transformArray() {
    const newArray = myArray.map(element => element * 2); 
    return newArray;
}


console.log('Original Array:', myArray); 
const transformedArray = transformArray(); 
console.log('Transformed Array:', transformedArray); 
