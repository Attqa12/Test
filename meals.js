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




function increment(button) {
    var quantity = button.previousElementSibling; // Get the span before the button (which holds the quantity)
    var currentQuantity = parseInt(quantity.innerText);
    if (currentQuantity < 10) { // Check if the current quantity is less than 10
        quantity.innerText = currentQuantity + 1; // Increment the quantity
    }
}

function decrement(button) {
    var quantity = button.nextElementSibling; // Get the span after the button (which holds the quantity)
    var currentQuantity = parseInt(quantity.innerText);
    if (currentQuantity > 1) { // Ensure it doesn't go below 1
        quantity.innerText = currentQuantity - 1; // Decrement the quantity
    }
}

// Initialize bucket data
let bucketItems = 0;
let bucketTotal = 0;

// Add event listener to all "Add to Bucket" buttons
document.querySelectorAll(".add-to-bucket").forEach((button) => {
    button.addEventListener("click", function() {
        // Get the card container
        const card = button.closest(".card");

        // Get the price and quantity
        const price = parseInt(card.querySelector(".Price").innerText.replace("RS ", ""));
        const quantity = parseInt(card.querySelector(".quantity-number").innerText);

        // Update bucket data
        bucketItems += quantity;
        bucketTotal += price * quantity;

        // Update bucket box
        document.getElementById("bucket-items").innerText = `Items: ${bucketItems}`;
        document.getElementById("bucket-total").innerText = `Total Rs: ${bucketTotal}`;

        // Show the bucket box
        const bucketBox = document.getElementById("bucket-box");
        bucketBox.style.display = "block";
    });
});

// Add event listener to the close button
document.getElementById("close-bucket").addEventListener("click", function () {
    const bucketBox = document.getElementById("bucket-box");

    // Reset the bucket data
    bucketItems = 0;
    bucketTotal = 0;

    // Update the UI
    document.getElementById("bucket-items").innerText = "Items: 0";
    document.getElementById("bucket-total").innerText = "Total Rs: 0";

    // Hide the bucket box
    bucketBox.style.display = "none";
});




// Show the order form when "Buy Bucket" is clicked
document.getElementById("view-bucket-button").addEventListener("click", function () {
    document.getElementById("order-form-container").style.display = "block";
});

// Handle form submission
document.getElementById("order-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Hide the form and show the confirmation modal
    document.getElementById("order-form-container").style.display = "none";
    document.getElementById("confirmation-modal").style.display = "block";

    // Reset the bucket to default
    bucketItems = 0;
    bucketTotal = 0;
    document.getElementById("bucket-items").innerText = "Items: 0";
    document.getElementById("bucket-total").innerText = "Total Rs: 0";
    document.getElementById("bucket-box").style.display = "none";
});

// Close the confirmation modal
document.getElementById("close-modal").addEventListener("click", function () {
    document.getElementById("confirmation-modal").style.display = "none";
});


// Show the order form when "Buy Now" is clicked
document.querySelectorAll(".add-button").forEach((button) => {
    button.addEventListener("click", function () {
        // Open the order form
        document.getElementById("order-form-container").style.display = "block";
    });
});

// Handle form submission (same as the "Buy Bucket" functionality)
document.getElementById("order-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Hide the form and show the confirmation modal
    document.getElementById("order-form-container").style.display = "none";
    document.getElementById("confirmation-modal").style.display = "block";

    // Reset the bucket to default
    bucketItems = 0;
    bucketTotal = 0;
    document.getElementById("bucket-items").innerText = "Items: 0";
    document.getElementById("bucket-total").innerText = "Total Rs: 0";
    document.getElementById("bucket-box").style.display = "none";
});

// Close the confirmation modal
document.getElementById("close-modal").addEventListener("click", function () {
    document.getElementById("confirmation-modal").style.display = "none";
});


// Add event listener to the close button
document.getElementById("close-form").addEventListener("click", function () {
    const bucketBox = document.getElementById("order-form-container");

    // Hide the bucket box
    bucketBox.style.display = "none";

    // If the order form is open, hide it as well
    document.getElementById("order-form-container").style.display = "none";

    const form = document.getElementById("order-form");
    form.reset();

});