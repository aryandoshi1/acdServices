// Define the API endpoint URL
var username = "aryandoshi1";
var apiUrl = `https://api.github.com/users/${username}/repos`;


// Fetch data from the API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Process the received data
        displayData(data);
    })
    .catch(error => {
        console.log("An error occurred:", error);
    });

// Display the data on the page
function displayData(data) {
    var dataContainer = document.getElementById("data-container");
    // Modify the dataContainer element to display the fetched data as desired
    dataContainer.innerHTML = JSON.stringify(data);
}
