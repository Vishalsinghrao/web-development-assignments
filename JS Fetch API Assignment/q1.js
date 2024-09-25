// Function to fetch and display user data
async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json(); 

        
        const userList = document.getElementById('user-list');

        
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>Name:</strong> ${user.name}<br>
                <strong>Email:</strong> ${user.email}<br>
                <strong>Address:</strong> ${user.address.street}, ${user.address.city}, ${user.address.zipcode}
            `;
            userList.appendChild(listItem); 
        });
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}


fetchUserData();
