/*global define:false, Modernizr:false */
define(['jquery'], function ($) {
    'use strict';
    var $container = $('[data-product-container]');
    var $productLinks = $('[data-product-link]');


    if ($container.length>0 && $productLinks.length>0) {

        $productLinks.on('click', function(event){
            if (window.innerWidth<=640) {
                return;
            }

            event.preventDefault();
            var $this = $(this);
            var pageurl = $this.attr('href');

            $.get(pageurl)
            .done(function(data){
                var pagedom = $(data);
                var content = pagedom.find('#product-content');
                if (content.length>0) {
                    $container.html(content);
                    $productLinks.removeClass('active');
                    $this.addClass('active');
                    $(document).foundation('equalizer','reflow');
                } else {
                    // could not find the product content on the page content so we are redirecting
                    window.location = pageurl;
                }
            })
            .fail(function(){
                //redirect to the page so we can throw a proper error
                window.location = pageurl;
            })


        });


        if (window.innerWidth>640) {
            $productLinks.first().click();
        }


    }


});
