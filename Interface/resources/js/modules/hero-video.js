/*global define:false, Modernizr:false */
define(['jquery', 'skrollr'], function ($, skrollr) {
    'use strict';

    if (!Modernizr.touch) {

        $('[data-hero-video]').each(function(){
            var $this = $(this);
            var videotemplate = $this.find('[data-hero-video-template]').html();
            $this.html(videotemplate);

            var videoElm = $this.find("video");
            if (videoElm.length>0){
                videoElm = videoElm[0];

                $this.on('skrollr', function(event, data){
                    if (data.name === 'dataTopBottom') {
                        if (data.direction === 'down') {
                            videoElm.pause();
                        } else {
                            videoElm.play();
                        }
                    }

                });
            }
        });


    }
});
