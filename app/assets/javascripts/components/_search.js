/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function (window) {

    'use strict';

    if ($('.searchOverlay').length > 0) {

        var mainContainer = document.querySelector('main'),
            openCtrl = document.getElementById('btn-searchOverlay'),
            closeCtrl = document.getElementById('btn-searchOverlay-close'),
            searchOverlayContainer = document.querySelector('.searchOverlay'),
            inputSearch = searchOverlayContainer.querySelector('.searchOverlay__input');

    }

    function init() {

        initEvents();
    }

    function initEvents() {
        openCtrl.addEventListener('click', openSearch);
        closeCtrl.addEventListener('click', closeSearch);
        document.addEventListener('keyup', function (ev) {
            // escape key.
            if (ev.keyCode == 27) {
                closeSearch();
            }
        });
    }

    function openSearch() {
        console.log("gedddee");
        mainContainer.classList.add('main-wrap--hide');
        searchOverlayContainer.classList.add('searchOverlay--open');
        setTimeout(function () {
            inputSearch.focus();
        }, 500);
    }

    function closeSearch() {
        mainContainer.classList.remove('main-wrap--hide');
        searchOverlayContainer.classList.remove('searchOverlay--open');
        inputSearch.blur();
        inputSearch.value = '';
    }

    if ($('.searchOverlay').length > 0) {
        init();

    }
})(window);