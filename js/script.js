$(function () {
    'use strict';

    // Sticky Menu Start 

    var navOffSet = $('#menuPart').offset().top;

    $(window).on('scroll', function () {
        var scrolled = $(this).scrollTop();
        if (scrolled > navOffSet) {
            $('#menuPart').addClass('menuFix');
        } else {
            $('#menuPart').removeClass('menuFix');
        }
    })

    // Sticky Menu End 

    //    Banner Slider  Start
    $('.bannerInner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
    });

});
