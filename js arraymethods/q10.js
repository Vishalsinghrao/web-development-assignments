// Initialize an array with some elements
const myArray = [1, 2, 3, 4];

// Function to calculate the sum of elements using reduce()
function calculateSum() {
    const sum = myArray.reduce((accumulator, current) => accumulator + current, 0); 
    return sum;
}


console.log('Original Array:', myArray); 
const total = calculateSum(); 
console.log('Total Sum:', total); 
