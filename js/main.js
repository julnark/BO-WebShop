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


//Filter en Modal//
document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll('.product');
    const productDetails = document.querySelector('.product-details');
    const productName = document.querySelector('.product-name');
    const productPrice = document.querySelector('.product-price');
    const productDesc = document.querySelector('.product-desc');
    const closeBtn = document.querySelector('.close');
    const filters = document.querySelectorAll('.filter');

    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            filters.forEach(f => f.classList.remove('filter-active'));
            this.classList.add('filter-active');

            products.forEach(product => {
                if (category === 'all' || product.getAttribute('data-category') === category) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    products.forEach(product => {
        product.addEventListener('click', function() {
            productName.textContent = product.getAttribute('data-name');
            productPrice.textContent = product.getAttribute('data-price');
            productDesc.textContent = product.getAttribute('data-desc');
            productDetails.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        productDetails.style.display = 'none';
    });
});
