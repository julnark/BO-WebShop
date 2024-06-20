//DarkMode//
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('click', (event) => {
        event.preventDefault();
        document.body.classList.toggle('dark-mode');
    });
});


//SearchBar//
function toggleSearch() {
    const searchContainer = document.getElementById('search-container');
    searchContainer.classList.toggle('expanded');
    const searchInput = document.getElementById('search-input');
    if (searchContainer.classList.contains('expanded')) {
        searchInput.focus();
    }
}
