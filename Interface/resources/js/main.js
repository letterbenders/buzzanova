/*globals requirejs:false, window:false */

requirejs([
    'jquery',
    'skrollr-init',
    'hero-video',
    'target-groups-slider',
    'case-slider',
    'item-slider',
    'foundation-loader',
    'mobile-navigation',
    'product-navigation'
], function ($) {
    'use strict';

    var onReady, onResize, afterResize, timer;

    /* Hookups
    ----------------------------*/
    onReady = function () {
        //
    };

    onResize = function () {
        //
    };

    afterResize = function () {
        //
    };


    /* Attach events
    ----------------------------*/
    $(onReady); //Document ready
    $(window).resize(function () {
        onResize();
        clearTimeout(timer);
        timer = setTimeout(afterResize, 50);
    });

});
