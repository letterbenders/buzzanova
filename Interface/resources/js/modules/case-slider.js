/*global define:false, Modernizr:false */
define(['jquery', 'slick'], function ($) {
    'use strict';

    // Slider

    var $slider = $('#cases-slider');

    // init slider
    $slider.slick();


    var tabs = $('#cases-slider-tabs [data-slider-tab]');
    tabs.on('click', function () {

        var selectedTab = $(this);
        var index = tabs.index(this);
        tabs.removeClass('selected');
        selectedTab.addClass('selected');

        $slider.slick('slickGoTo', index);

    });

    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        // set tabs
        tabs.removeClass('selected');
        $(tabs[nextSlide]).addClass('selected');
    });

    tabs.first().click();

});
