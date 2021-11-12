jQuery(document).ready(function ($) {
	"use strict";
    /*------------------------------- slider ---------------------------------------*/
    $(function(){
        $('#mainslider').slick({
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            navigation: false,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
        });
        $('#onquote').slick({
            dots: true,
            infinite: true,
            speed: 500,
            navigation: false,
            pagination:false,
        });
        $('#twitslide').slick({
            dots: false,
            infinite: true,
            speed: 500,
            navigation: false,
            pagination:false,
        });
    });
    /*------------------------------- Lightbox ---------------------------------------*/
    $(function(){
        $("a[data-rel^='prettyPhoto']").prettyPhoto({
            theme:'light_square',
            animationSpeed:'fast',
            slideshow:5000,
            show_title:true,
            overlay_gallery: false,
            social_tools:false
            
        });
    });
    /*------------------------------- wow ---------------------------------------*/
    $(function() {
        new WOW().init();
    });
    /*------------------------------- pinterest look ---------------------------------------*/
    $(function() {
        var $container = $('.masonry-container');
        $container.imagesLoaded( function () {
            $container.masonry({
                columnWidth: '.mitem',
                itemSelector: '.mitem'
            });   
        });
    });
    /*------------------------------- Hover Dropdown ---------------------------------------*/
    //Navbar Dropdown Hover
    $('ul.nav li.dropdown').hover(function () {
        if ($(window).width() > 767) {
            $(this).find('.dropdown-menu').show();
        }
    }, function () {
        if ($(window).width() > 767) {
            $(this).find('.dropdown-menu').hide().css('display','');
        }
    });
    
});