$(document).ready(function(){
    $('.slider__content').slick({
        infinite: true, // Enable infinite looping of slides
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true, // Autoplay the slider
        speed: 500, // Transition speed in milliseconds
        autoplaySpeed: 4000, // Autoplay speed in milliseconds
        fade: true, // Enable fade effect between slides
        arrows: true, // Show navigation arrows
        prevArrow: $('.prev'), // Custom previous arrow selector
        nextArrow: $('.next'), // Custom next arrow selector
    });
});
