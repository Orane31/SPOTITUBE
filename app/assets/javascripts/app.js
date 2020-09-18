/**
 * Scripts & Plugins
 */

window.$ = window.jQuery = require('jquery');

//Preloader
if ($("body").hasClass("has-preloader")) {
    require('./components/_preloader');
}
require('./functions');
require('./libs/modernizr');
require('./libs/jquery.easing');
require('./libs/jquery.waitforimages');
require('./libs/css3-animate-it');
require('./components/_popper');
require('bootstrap');
require('./components/_lightSlider');
require('./components/_lightGallery');
require('./components/_sticky');
require('./components/_wavesurfer');
require('./components/_slimScroll');
require('./components/_countDown');
require('./components/_map');
require('./components/_overlay');
require('./components/_parallex');
require('./components/_contact');
require('./components/_heroSection');
require('./components/_search');
require('./components/_ajaxify');
require('./scripts');
require('./components/masonary'); // Masonary + isotope + portfolio filter
require('./components/_sidebar');
require('./components/_promotionsBar');
require('./components/ControlSidebar');
require('./components/_responsiveTabs');
require('./components/_snackbar');

