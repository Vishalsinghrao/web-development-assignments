// Initialize an array with some elements
const myArray = ['Apple', 'Banana', 'Cherry', 'Date'];


function removeFirstElement() {
    const removedElement = myArray.shift(); // Remove the first element
    console.log(`Removed Element: ${removedElement}`); // Log the removed element
}

// Example usage
console.log('Original Array:', myArray); 
removeFirstElement(); 
console.log('Updated Array:', myArray); 
