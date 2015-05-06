/*global define:false, Modernizr:false */
define(['jquery', 'slick'], function ($) {
    'use strict';

    // Slider

    var $slider = $('#cases-slider');
    var $tabs = $('#cases-slider-tabs');

    // init slider
    $slider.slick({
        asNavFor: '#cases-slider-tabs',
    });
    $tabs.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#cases-slider',
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true
    });


    // var tabs = $('#cases-slider-tabs [data-slider-tab]');
    // tabs.on('click', function () {

    //     var selectedTab = $(this);
    //     var index = tabs.index(this);
    //     tabs.removeClass('selected');
    //     selectedTab.addClass('selected');

    //     $slider.slick('slickGoTo', index);

    // });

    // $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //     // set tabs
    //     tabs.removeClass('selected');
    //     $(tabs[nextSlide]).addClass('selected');
    // });

    // tabs.first().click();

});
