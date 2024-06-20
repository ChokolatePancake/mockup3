$(document).ready(function(){
    $('.slider__content').slick({
        infinity: true,
        slidesToShow: 1,
        slidesToScroll:1,
        autoplay: true,
        speed:500,
        autoplaySpeed: 4000,
        fade:true,
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        // centerMode: true
});
});