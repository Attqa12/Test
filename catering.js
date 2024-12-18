function toggleDropdown(event) {
    event.preventDefault();
    const dropdownContent = event.target.nextElementSibling;
    dropdownContent.classList.toggle('open');
}

// Close dropdown if clicked outside
document.addEventListener('click', function(e) {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target) && !dropdown.previousElementSibling.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });
});

function toggleMenu() {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("show");
}




document.getElementById('view-more').addEventListener('click', function () {
    const moreProducts = document.getElementById('more-products');
    if (moreProducts.classList.contains('hidden')) {
        moreProducts.classList.remove('hidden');
        this.textContent = 'View Less';
    } else {
        moreProducts.classList.add('hidden');
        this.textContent = 'View More';
    }
});
