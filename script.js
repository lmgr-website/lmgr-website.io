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



document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelectorAll('.testimonial');
    
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    let index = 0;
    testimonials[index].classList.add('active');

    function nextTestimonial() {
        testimonials[index].classList.remove('active');
        index = (index + 1) % testimonials.length
        testimonials[index].classList.add('active');    
    }

    const interval = setInterval(nextTestimonial, 5000);
});

