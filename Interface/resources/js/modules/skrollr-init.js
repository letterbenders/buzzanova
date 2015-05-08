define(['jquery', 'skrollr'], function($, skrollr) {
    'use strict';

    if (!Modernizr.touch) {
        var s = skrollr.init({
            smoothScrolling: false,
            forceHeight: false,
            keyframe: function(element, name, direction){
                $(element).trigger('skrollr', {name:name, direction:direction});
            }
        });
    }

});
