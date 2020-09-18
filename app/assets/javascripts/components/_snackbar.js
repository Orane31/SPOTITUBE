(function () {
    "use strict";
    var Snackbar = require('node-snackbar');


    var snackbarInit = window.snackbarInit = function () {
        $('.snackbar').on('click', function () {
            var $this = $(this);
            toastrInit($this);
        });
    };

    function toastrInit(el) {
        if (el) {
            Snackbar.show({
                    text: el.data('text'),
                    textColor: el.data('textColor'),
                    pos: el.data('pos'),
                    customClass: el.data('customClass'),
                    // width: el.data('width'),
                    //   showAction: el.data('showAction'),
                    // actionText: el.data('actionText'),
                    actionTextColor: 'red',
                    backgroundColor: el.data('backgroundColor'),

                }
            );
        }
    }

    snackbarInit();

}());


