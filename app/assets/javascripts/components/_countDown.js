require('jquery-countdown');

var countDown = window.countDown = function () {
    var ele = $(".countDown");
    ele.each(function () {
        var $this = $(this);
        $this.each(function () {
            var $this = $(this);
            var eventDate = $this.data('date');
            var targetDate = new Date(eventDate),
                finished = false,
                availiableExamples = {
                    set15daysFromNow: 15 * 24 * 60 * 60 * 1000,
                    set5minFromNow: 5 * 60 * 1000,
                    set1minFromNow: 1 * 60 * 1000
                };

            function callback(event) {
                var $this = $(this);
                $.each(event.offset, function (key, value) {
                    $this.find('div span.' + key).html(value);
                });

            }

            $this.countdown(eventDate.valueOf(), callback);
        });

    });
};
(function () {
    "use strict";
    countDown();
}());



