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
    "One of Gordon Ramsay's most significant achievements is maintaining three Michelin stars at his flagship restaurant, Restaurant Gordon Ramsay, in London. This prestigious recognition, awarded in 2001, has made the restaurant one of the finest dining establishments in the world. It’s a rare and challenging accomplishment, as only a handful of restaurants globally have managed to sustain three Michelin stars over decades, showcasing Ramsay's unparalleled expertise and culinary excellence",
    "Ramsay's television career transformed him into a household name, with Hell’s Kitchen being one of his most successful shows. Premiering in 2005, the show, which pits aspiring chefs against each other under Ramsay's tough leadership, became a cultural phenomenon. His fiery temper and no-nonsense approach to cooking captured viewers’ attention, and the show has spanned over 20 seasons. It has helped him build a massive global fanbase and cement his status as a television icon.",
    "Outside of his culinary and media success, Gordon Ramsay has made a significant impact through his philanthropic work. He is heavily involved in numerous charity initiatives, focusing on causes like children’s health and education. Ramsay has supported organizations like Great Ormond Street Hospital and The Gordon Ramsay Foundation, using his fame and resources to raise millions for charity. His contributions demonstrate a commitment to using his platform for positive social change, beyond just the kitchen."
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
