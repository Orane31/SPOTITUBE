require('.././libs/jquery.slimscroll');

jQuery(function ($) {
    "use strict";
    slimScroll();


});

var slimScroll = window.slimScroll = function () {
    var ele = $(".slimScroll");
    var headerDiv = 0;
    if (ele.length) {
        ele.each(function () {
            var $this = $(this);
            var attrData = $this.data();
            $this.slimscroll({
                height: attrData.height ? attrData.height + 'px' : ($(window).height() - headerDiv) + "px",
                color: attrData.color ? attrData.color : "rgba(0,0,0,0.95)",
                size: attrData.size ? attrData.size + 'px' : "5px",
                alwaysVisible: attrData.visible,
                railOpacity: attrData.opacity,
            });
        });
    }
};
