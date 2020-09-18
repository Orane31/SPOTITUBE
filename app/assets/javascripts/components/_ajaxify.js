require('../libs/history');
require('../libs/ajaxify-html5');
require('../libs/jquery.scrollto.min');

var Snackbar = require('node-snackbar');
var NProgress = require('nprogress');
var WaveSurfer = window.WaveSurfer = require('../libs/wavesurfer');

(function () {
    "use strict";
    $.ajaxify({
        contentSelector: '#pageContent',
        linkSelector: '.ajaxifyPage',
        //   linkContainerSelector: 'aside',
    });


    // The playlist links
    function removeBaseUrl(url) {

        console.log('sssss');
        /*
         * Replace base URL in given string, if it exists, and return the result.
         *
         * e.g. "http://localhost:8000/api/v1/blah/" becomes "/api/v1/blah/"
         *      "/api/v1/blah/" stays "/api/v1/blah/"
         */
        var baseUrlPattern = /^https?:\/\/[a-z\:0-9.]+/;
        var result = "";

        var match = baseUrlPattern.exec(url);
        if (match != null) {
            result = match[0];
        }

        if (result.length > 0) {
            url = url.replace(result, "");
        }

        console.log(url);
        return url;
    }

    /*
 Find channel ID from channel name - http://johnnythetank.github.io/youtube-channel-name-converter/
*/

    // autoPlayYouTubeModal();
    //
    // //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
    // function autoPlayYouTubeModal() {
    //     var trigger = $("body").find('[data-toggle="modal"]');
    //     trigger.click(function () {
    //         var theModal = $(this).data("target"),
    //             videoSRC = $(this).attr("data-theVideo"),
    //             videoSRCauto = videoSRC + "?autoplay=1";
    //         $(theModal + ' iframe').attr('src', videoSRCauto);
    //         $(theModal + ' button.close').click(function () {
    //             $(theModal + ' iframe').attr('src', videoSRC);
    //         });
    //     });
    // }
    // var reqURL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=");
    // function loadVideo(iframe){
    //     $.getJSON( reqURL + iframe.getAttribute('cid'),
    //         function(data) {
    //             var videoNumber = (iframe.getAttribute('vnum')?Number(iframe.getAttribute('vnum')):0);
    //             console.log(videoNumber);
    //             var link = data.items[videoNumber].link;
    //             var id = link.substr(link.indexOf("=") + 1);
    //             iframe.setAttribute("src","https://youtube.com/embed/"+id + "?controls=0&autoplay=0&showinfo=0");
    //         }
    //     );
    //
    // }
    // var iframes = document.getElementsByClassName('latestVideoEmbed');
    // for (var i = 0, len = iframes.length; i < len; i++){
    //     loadVideo(iframes[i]);
    // }

    function ajaxInit() {
        // All the code you want to retrigger

        //Plugins
        lightSlider();
        lightGallery();
        initMasonary();
        countDown();
        snackbarInit();
        slimScroll();
        mapInit();

        //Animation
        $('.animated').addClass('go');


        // Create a WaveSurfer instance
        // Init on DOM ready

        if ($('.playlist').length) {


            var links = document.querySelectorAll('.playlist .media-url');


            if (wavesurfer.isPlaying() && $("a[href='" + window.media + "']")) {

                links[window.currentTrack].classList.add('active');

                $('#playlist a.active i').toggleClass('icon-pause');

            }


            // $(".playlist .media-url").click(function (event) {
            //     event.preventDefault();
            //     console.log('cccc' + window.currentTrack);
            //     //  $('.playlist .media-url i').removeClass('icon-pause').addClass('icon-play');
            //     $('i').removeClass('icon-pause');
            //
            // });


            Array.prototype.forEach.call(links, function (link, index) {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    if (window.currentTrack == index) {
                        $(e.target).toggleClass('icon-pause');
                        $('.playlist .media-url').removeClass('icon-pause').removeClass('icon-play');
                        wavesurfer.playPause();
                    } else {
                        $('#playlist a.active i').toggleClass('icon-pause');
                        $('.playlist .media-url').removeClass('active');

                        links[index].classList.add('active');

                        $('.playlist .media-url i').removeClass('icon-pause').addClass('icon-play');
                        $('.playlist .media-url').removeClass('icon-pause').removeClass('icon-play');

                        window.setCurrentSong(index);
                        //   $(e.target).toggleClass('icon-pause');
                    }
                });
            });

        }


    }

// Call myInit when document is ready.
    //ajaxInit();

// Call myInit again after each AJAX load.
    $(window).on('statechangecomplete', function () {
        NProgress.start();
        ajaxInit();
        NProgress.done();

        // Optionally, do other stuff only after an AJAX load.
    });


}());

