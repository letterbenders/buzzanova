/*global define:false, Modernizr:false */
define(['jquery', 'slick'], function ($) {
    'use strict';


    // Overlay
    var isOverlayVisible = false;
    var $overlay = $('.section-overlay');

    var showOverlay = function () {
        $overlay.addClass('show');
        isOverlayVisible = true;
    }
    var hideOverlay = function () {
        $overlay.removeClass('show');
        isOverlayVisible = false;
    }

    $overlay.find('.close').on('click', function () {
        hideOverlay();
    });


    // Slider

    var $slider = $('#target-groups-slider');

    // init slider
    $slider.slick();


    var tabs = $('#target-groups [data-slider-tab]');
    tabs.on('click', function () {
        if (!isOverlayVisible) {
            showOverlay();
        }

        var selectedTab = $(this);
        var index = tabs.index(this);
        // tabs.removeClass('selected');
        // selectedTab.addClass('selected');

        $slider.slick('slickGoTo', index);


    });

    // $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //     // set tabs
    //     tabs.removeClass('selected');
    //     $(tabs[nextSlide]).addClass('selected');

    // });

});
