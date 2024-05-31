//DarkMode//
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('click', (event) => {
        event.preventDefault();
        document.body.classList.toggle('dark-mode');
    });
});
