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

    //    Banner Slider  End

    // Product Slider Start 

    $('.productSlider1').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
    });

    // Product Slider End
    

$('.venobox').venobox({
        framewidth: 'auto',
        frameheight: 'auto',
        spinner: 'cube-grid',
        border: '5px',
    });
    
    $("._58an").attr("placeholder", "Full Order");

});
