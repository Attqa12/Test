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



let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slidesContainer = document.querySelector(".slides");
const descriptions = [
    "A meaty rice dish, plov comes in more than 60 varieties and is one of Uzbek cuisine's most beloved staples. These days, it's usually made by layering up a base of eggs, flour, butter and yogurt with steamed long grain rice, then adding toppings like meat, dried fruit, fresh herbs, fish, vegetables and spices. However, in its most basic form, plov is simply rice with onions, carrots and a meat like mutton or lamb – and its history can be traced back more than 1,000 years. Traditionally prepared for special occasions, plov is often cooked in a large, wide pan called a kazán over an open flame, allowing the ingredients to infuse together in perfect harmony. Each region of Uzbekistan has its own variation of plov, showcasing the diversity and regional flavors of the dish.",
    "The dish is complete with onions, garlic, carrots, raisins, and some local herbs and spices. You can visit any restaurant and eat a plate of delicious plov, but I recommend making your way to a local plov center. They are experts in what they do and visiting them is considered one of the great things to do in Tashkent. Plov centers are often bustling with locals, creating a vibrant atmosphere where the air is filled with the aromatic scent of the dish cooking. Here, the plov is made in massive kettles, ensuring that each serving is packed with flavor and cooked to perfection. It's not just a meal; it's a cultural experience, offering a taste of Uzbekistan's rich culinary heritage.",
    "A platter of fast food is a delightful assortment of everyone's favorite quick bites, from crispy fries to juicy burgers and golden chicken nuggets. Perfect for sharing, this indulgent spread offers a mix of flavors and textures that satisfy all your cravings. Whether for a casual meal or a fun gathering, it's the ultimate comfort food experience! Add a variety of dipping sauces to elevate the experience—barbecue, ketchup, or creamy ranch—ensuring there's something for every taste. The combination of hot, crispy items with soft, savory bites creates the perfect balance of textures, making each bite as satisfying as the last. It's the kind of meal that brings people together, turning any moment into a celebration of delicious indulgence.",
    "Vegetarian Skillet Stuffed Shells are a delicious and hearty dish featuring large pasta shells filled with a creamy blend of ricotta, spinach, and mozzarella cheese. Cooked in a flavorful tomato sauce, this one-pan meal is perfect for a cozy dinner. Topped with fresh herbs and melted cheese, these stuffed shells offer a satisfying balance of rich, comforting flavors and vibrant vegetables. It's a simple yet impressive dish that's sure to please vegetarians and non-vegetarians alike! The combination of the creamy filling and tangy sauce creates a harmonious dish that's both indulgent and wholesome.",
    "A classic Indian takeout dish, chicken tikka masala is not as difficult to make at home as you may think. Packed with flavor, the creamy, spiced sauce covers tender pieces of chicken, just waiting to be served with homemade naan and perfect basmati rice. The combination of aromatic spices like cumin, coriander, and garam masala creates a rich, flavorful base, while the addition of cream and tomatoes gives the sauce its signature smoothness and depth. Marinating the chicken in yogurt and spices before grilling or broiling ensures that each bite is juicy and flavorful. Whether you're cooking for a special occasion or a weeknight dinner, chicken tikka masala offers a delicious, comforting meal that brings the vibrant flavors of India straight to your table."
];

// Function to move slides
function moveSlides(direction) {
    // Update the index based on the direction
    currentIndex += direction;

    // Loop the slides if the index goes out of bounds
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Loop to the last slide
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Loop to the first slide
    }

    // Update the transform property to slide to the correct image
    const offset = -currentIndex * 100; // Slide to the next image
    slidesContainer.style.transform = `translateX(${offset}%)`;

    // Update the description based on the current index
    document.getElementById("description-text").innerText = descriptions[currentIndex];
}

// Change slide every 5 seconds (5000 milliseconds)
setInterval(() => {
    moveSlides(1); // Automatically move to the next slide
}, 10000);



// Function to validate email and display the popup
document.querySelector('.Sign-inButton').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent form from submitting
    const emailInput = document.querySelector('input[type="email"]');
    const email = emailInput.value;
    const popup = document.getElementById('popup');
    const popupContent = popup.querySelector('.popup-content p');

    if (validateEmail(email)) {
        // Display success message
        popup.className = 'popup success';
        popupContent.textContent = "You are successfully signed in. You will get updates & offers!";
    } else {
        // Display error message
        popup.className = 'popup error';
        popupContent.textContent = "Enter a valid email.";
    }
    
    popup.style.display = 'block';  // Show the popup
    emailInput.value = '';  // Reset the email input field
});

// Function to validate email format
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}




