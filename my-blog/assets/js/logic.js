document.addEventListener('DOMContentLoaded', function() {
    // Check local storage for theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }

    // Add event listener for the light/dark mode toggle button
    const toggleButton = document.getElementById('toggleMode');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            document.body.classList.toggle('light-mode');
            // Save the theme preference in local storage
            const theme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
            localStorage.setItem('theme', theme);
        });
    }

    // Add event listener for the back button
    const backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});