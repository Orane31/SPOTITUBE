require('lightgallery');
jQuery(function ($) {
    "use strict";
    lightgallery();
});


var lightgallery = window.lightGallery = function () {
    var ele = $(".lightGallery");
    ele.lightGallery({
        selector: ".light-post"
    });
};

