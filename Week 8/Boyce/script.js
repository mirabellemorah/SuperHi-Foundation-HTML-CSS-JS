$(document).ready(function() {
    var currentSlide = 0; // Current slide
    var totalSlides = $(".holder div").length; // Number of slides

    var updateSlidePosition = function() {
        var leftPosition = (-currentSlide * 100) + "vw"; // Calculate the vw unit
        $(".holder").css("left", leftPosition); // Set the left position
        var slideNumber = currentSlide + 1;
        $(".steps").text(slideNumber + " / " + totalSlides);
    };

    var nextSlide = function() {
        currentSlide = (currentSlide + 1) % totalSlides; // Increment and wrap around
        updateSlidePosition();
    };

    var prevSlide = function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Decrement and wrap around
        updateSlidePosition();
    };

    var autoSlide = setInterval(nextSlide, 3500); // Auto slide every 2 seconds

    $(".next").click(function() {
        clearInterval(autoSlide); // Stop the auto slide
        nextSlide(); // Call the next slide function
    });

    $(".prev").click(function() {
        clearInterval(autoSlide); // Stop the auto slide
        prevSlide(); // Call the previous slide function
    });
});