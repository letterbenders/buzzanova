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
    } else {
        var isCompact = false
        var $pageheader = $('.page-header');

        $(window).on('scroll', function(){
            var st = $(document).scrollTop();
            if (st==0) {
                $pageheader.removeClass('compact');
                isCompact = false;
            } else if (!isCompact) {
                $pageheader.addClass('compact');
                isCompact = true;
            }
        });
    }

});
