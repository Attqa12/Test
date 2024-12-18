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

// SLIDER

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slidesContainer = document.querySelector(".slides");
const descriptions = [
    "Chef Marco is a master of Italian cuisine, known for his deep understanding of regional Italian flavors and time-honored techniques. With a passion for fresh, seasonal ingredients, he brings the authentic taste of Italy to every dish, from pasta to seafood and beyond. Chef Marco’s cooking is a celebration of Italy’s rich culinary heritage. His creations highlight the importance of simplicity, allowing the quality of each ingredient to shine through. Every plate tells a story of tradition, love, and the beauty of Italian food.",
    "Chef Noah specializes in Mediterranean dishes, blending the vibrant flavors of the region into modern yet timeless creations. His menus feature an array of fresh vegetables, seafood, and aromatic herbs, reflecting the diverse culinary traditions of countries like Greece, Spain, and Italy. Chef Noah’s food is a journey through the sun-soaked shores of the Mediterranean. He champions sustainable cooking practices, ensuring that each meal not only delights the taste buds but also supports the environment. His dishes are as healthy as they are flavorful, celebrating both simplicity and sophistication.",
    "Chef Anna is a renowned expert in French pastries, with a keen eye for both tradition and innovation. From flaky croissants to delicate macarons, she brings an artistry to baking that’s second to none. With a focus on precision and technique, Chef Anna’s pastries embody the elegance and refinement of French patisserie at its finest. Her creations are a perfect blend of timeless classics and contemporary twists, delighting both purists and adventurous foodies alike. Chef Anna’s attention to detail ensures every pastry is a piece of edible art."
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
