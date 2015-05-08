/*global define:false, Modernizr:false */
define(['jquery', 'slick'], function ($) {
    'use strict';

    // Slider

    var $slider = $('#item-slider-slider');

    // init slider
    $slider.slick({
        infinite: true,
        slidesToShow: 8,
        appendArrows: '#item-slider-container',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }, {
                breakpoint: 580,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });


});
