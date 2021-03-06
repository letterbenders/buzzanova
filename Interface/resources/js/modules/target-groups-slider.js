/*global define:false, Modernizr:false */
define(['jquery', 'slick'], function ($) {
    'use strict';

    function setupOverlay(){
        // Overlay
        var isOverlayVisible = false;
        var overlayMoved = false;
        var $overlay = $('.section-overlay');
        var $container = $('#overlayed');

        var showOverlay = function () {
            if (window.innerWidth <= 640) {
                overlayMoved = true;
                $('body').append($overlay);
            } else {
                //scroll to the top of the section plus header height
                var scrollpos = $container.offset().top - 59;
                $('body').scrollTop(scrollpos);
            }
            $overlay.addClass('show');
            isOverlayVisible = true;
        }
        var hideOverlay = function () {
            if (overlayMoved) {
                overlayMoved = false;
                $container.append($overlay);
            }
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
        tabs.on('click', function (event) {
            event.preventDefault();
            if (!isOverlayVisible) {
                showOverlay();
            }

            var selectedTab = $(this);
            var index = tabs.index(this);
            // tabs.removeClass('selected');
            // selectedTab.addClass('selected');

            $slider.slick('slickGoTo', index);


        });
    }

    setupOverlay()

    $(document).on('new-product-page', setupOverlay);


});
