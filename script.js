// Get the div
const scrollDiv = document.querySelector('.nav');

// Listen for the scroll event on the window
window.addEventListener('scroll', function() {
    // Check if the page has been scrolled down by a certain amount
    if (window.scrollY > 50) { // Change 50 to whatever scroll position you want
        scrollDiv.classList.add('nav-scrolled'); // Add the class when scrolled
    } else {
        scrollDiv.classList.remove('nav-scrolled'); // Remove the class when back at the top
    }
});



// Get the div
heroImage = document.querySelector('.hero-image');

// Listen for the scroll event on the window
window.addEventListener('scroll', function() {
    // Check if the page has been scrolled down by a certain amount
    if (window.scrollY > 50) { // Change 50 to whatever scroll position you want
        heroImage.classList.add('hero-image-scrolled'); // Add the class when scrolled
    } else {
        heroImage.classList.remove('hero-image-scrolled'); // Remove the class when back at the top
    }
});