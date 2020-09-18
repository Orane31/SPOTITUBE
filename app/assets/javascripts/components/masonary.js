require('masonry-layout');
require('.././libs/isotope');

(function () {
    "use strict";
    var initfilter = function ($masonryContainer, $ele) {
        var $filterElement = $('.project-filter li, .filter li');

        $filterElement.removeClass("active");
        $ele.addClass("active");


        if ($('.masonry-container .animated').length > 0) {
            $('.masonry-container .animated').addClass("go");
        }

        var selector = $ele.attr('data-filter');
        $masonryContainer.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;

    };
    var initMasonary = window.initMasonary = function initMasonary() {

        var $masonryContainer = $('.masonry-container');
        var $filterElement = $('.project-filter li, .filter li');

        if ($('#filter-items').length) {
            $('.filter li a').on('click', function () {
                $('html, body').animate({
                    scrollTop: $('#filter-items').offset().top - 0
                }, 1500, function () {
                });
                return false;
            });
        }


        $masonryContainer.waitForImages(function () {
            $('.masonry-container').show();
            $('.masonry-container').masonry({
                itemSelector: '.masonry-post'
            });

        });

        $(window).on('load', function () {
            var $ele = $('.project-filter .active');
            initfilter($masonryContainer, $ele);
        });


        $filterElement.on('click', function () {
            $filterElement.removeClass("active");
            var $ele = $(this).addClass("active");

            var $filterElement2 = $('.project-filter li a, .filter li a');
            //  $filterElement2.addClass("active");
            $filterElement2.removeClass("active");
            $(this).children('a').addClass("active");


            initfilter($masonryContainer, $ele, $filterElement);
        });
    };
    initMasonary();
}());