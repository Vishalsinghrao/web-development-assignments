// Initialize an array with some elements
const myArray = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

// Function to create a new array using slice()
function createSlice() {
    const newArray = myArray.slice(1, 4); 
    return newArray;
}

// Example usage
console.log('Original Array:', myArray); 
const slicedArray = createSlice(); 
console.log('Sliced Array:', slicedArray); 
