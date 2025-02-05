// app.js

// Log a message to the console to confirm the script is running
console.log("JavaScript file loaded!");

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select the button using its ID (make sure it matches the one in your HTML)
    const button = document.getElementById('clickMe');

    // Add a click event listener to the button
    button.addEventListener('click', () => {
        // Display an alert when the button is clicked
        alert("Button was clicked!");
    });
});
