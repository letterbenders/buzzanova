/*global define:false, Modernizr:false */
define(['jquery'], function ($) {
    'use strict';
    var navigationIsVisibile = false;
    var $trigger = $('[data-mobile-trigger]');
    var $content = $('body');
    var $nav = $('[data-mobile-navigation]');

    $trigger.on('click', function(){
        if (navigationIsVisibile) {
            $content.removeClass('reveal-navigation');
            $trigger.removeClass('active');
            $nav.removeClass('visible');
            navigationIsVisibile = false;
        } else {
            $content.addClass('reveal-navigation');
            $trigger.addClass('active');
            $nav.addClass('visible');
            navigationIsVisibile = true;
        }
    });

});
