document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to logo
    document.querySelector('.logo img').addEventListener('click', function() {
        window.location.href = 'index.html'; // Replace 'index.html' with your home page URL
    });
    
})

// Function to toggle dark mode
function toggleDarkMode() {
    // Toggle dark mode class on the body
    document.body.classList.toggle('dark-mode');
    
    // Save the current mode preference in localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Check if there's a saved dark mode preference in localStorage
const savedDarkMode = localStorage.getItem('darkMode');

// If there's a saved preference, apply dark mode
if (savedDarkMode && savedDarkMode === 'true') {
    document.body.classList.add('dark-mode');
}

// Event listener for dark mode toggle button
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
