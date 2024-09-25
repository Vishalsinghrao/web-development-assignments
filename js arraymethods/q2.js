// Initialize an array with some elements
const myArray = ['Apple', 'Banana', 'Cherry', 'Date'];

// Function to remove the last element from the array using pop()
function removeLastElement() {
    const removedElement = myArray.pop(); 
    console.log(`Removed Element: ${removedElement}`); 
}


function displayArray() {
    console.log('Current Array:', myArray); 
}

displayArray(); 

removeLastElement(); 

displayArray(); 
