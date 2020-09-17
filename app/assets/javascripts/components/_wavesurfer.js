var WaveSurfer = window.WaveSurfer = require('../libs/wavesurfer');
var NProgress = require('nprogress');
// Create a WaveSurfer instance
// Init on DOM ready

if ($('#waveform').length > 0) {
    document.addEventListener('DOMContentLoaded', function () {
        wavesurfer = WaveSurfer.create({
            container: '#waveform',
            backend: 'MediaElement',
            waveColor: $('body').hasClass('theme-dark') ? '#243049' : '#ecf0f5',
            progressColor: '#8FB4C7',
            height: 50,
            responsive: false,
            barWidth: 3,
            normalize: true
        });


    });
}


// Bind controls
document.addEventListener('DOMContentLoaded', function () {


    if ($('#playPause').length > 0) {
        var playPause = document.querySelector('#playPause');

        playPause.addEventListener('click', function () {
            wavesurfer.playPause();
        });


        // Toggle play/pause text
        wavesurfer.on('play', function () {
            document.querySelector('#play').style.display = 'none';
            document.querySelector('#pause').style.display = '';
            $('#playlist a.active i').removeClass('icon-play').addClass('icon-pause');

        });

        wavesurfer.on('pause', function () {
            document.querySelector('#play').style.display = '';
            document.querySelector('#pause').style.display = 'none';
            $('#playlist a.active i').removeClass('icon-pause').addClass('icon-play');
        });

    }



    if ($('.playlist').length > 0) {
        // The playlist links
        var links = document.querySelectorAll('.playlist .media-url');
        var currentTrack = 0;


        //Player Actions

        nextTrackSelector = $('#nextTrack');
        prevTrackSelector = $('#previousTrack');

        var disablePrevNextBtn = function (track) {
            if (track === 0) {
                prevTrackSelector.addClass('disabled');
            } else {
                prevTrackSelector.removeClass('disabled');
            }
            if (track === links.length) {
                nextTrackSelector.addClass('disabled');
            } else {
                nextTrackSelector.removeClass('disabled');
            }
        };

        var nextTrack = function () {
            $('.playlist .media-url i').removeClass('icon-pause').addClass('icon-play');
            if (currentTrack <= links.length) {
                setCurrentSong((currentTrack + 1) % links.length);
            }
        };

        var previousTrack = function () {
            $('.playlist .media-url i').removeClass('icon-pause').addClass('icon-play');
            if (currentTrack > 0) {
                setCurrentSong((currentTrack - 1) % links.length);
            }
        };

        nextTrackSelector.on('click', function (e) {
            e.preventDefault();
            nextTrack();
        });
        prevTrackSelector.on('click', function (e) {
            e.preventDefault();
            previousTrack();
        });


        // Load a track by index and highlight the corresponding link
        var setCurrentSong = window.setCurrentSong = function (index) {

            disablePrevNextBtn(index);

            links[currentTrack].classList.remove('active');
            currentTrack = index;
            links[currentTrack].classList.add('active');

            var waveUrl = links[currentTrack].dataset.wave;

            if (waveUrl !== undefined) {
                $.getJSON(waveUrl, function (data) {
                    wavesurfer.load(links[currentTrack].href, data.data);
                });
            } else {
                wavesurfer.load(links[currentTrack].href);
                // wavesurfer.playPause();
            }

            window.media = links[currentTrack].href;
            $('.playlist a.active i').toggleClass('icon-pause');
            window.currentTrack = currentTrack;
        };


        Array.prototype.forEach.call(links, function (link, index) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                if (currentTrack == index) {
                    $(e.target).toggleClass('icon-pause');
                    wavesurfer.playPause();
                } else {
                    $('.playlist .media-url i').removeClass('icon-pause').addClass('icon-play');
                    setCurrentSong(index);
                    $(e.target + ' i').toggleClass('icon-pause');
                }
            });
        });


        // Auto Play on audio load
        wavesurfer.on('ready', function () {
            if ($('#mediaPlayer').data('auto')) {
                wavesurfer.play();
            }
        });

        // Go to the next track on finish
        wavesurfer.on('finish', function () {
            nextTrack();
        });

        // Load the first track
        setCurrentSong(currentTrack);

        // Show current time
        wavesurfer.on('audioprocess', function () {
            $('.track-time').text(formatTime(wavesurfer.getCurrentTime()));
        });


        var formatTime = function (time) {
            return [
                Math.floor((time % 3600) / 60), // minutes
                ('00' + Math.floor(time % 60)).slice(-2) // seconds
            ].join(':');
        };

        //loading
        wavesurfer.on('loading', function (percents, eventTarget) {
            NProgress.start();
            if (percents >= 100) {
                NProgress.done();
            }
        });

    }


});

