Package.describe({
    summary: '5.3.3: The most advanced responsive front-end framework in the world.'
});

var CSS_FILES = [
  'foundation.css',
  'normalize.css'
];

var VENDOR_FILES = [
  'fastclick.js',
  'jquery.cookie.js',
  'modernizr.js',
  'placeholder.js'
];

var PLUGIN_FILES = [
  'foundation.abide.js',
  'foundation.accordion.js',
  'foundation.alert.js',
  'foundation.clearing.js',
  'foundation.dropdown.js',
  'foundation.equalizer.js',
  'foundation.interchange.js',
  'foundation.joyride.js',
  'foundation.magellan.js',
  'foundation.offcanvas.js',
  'foundation.orbit.js',
  'foundation.reveal.js',
  'foundation.slider.js',
  'foundation.tab.js',
  'foundation.tooltip.js',
  'foundation.topbar.js'
];

Package.on_use(function (api) {
    var path = Npm.require('path');

    // Use jquery for zurb foundation
    api.use(['jquery', 'templating'], 'client');

    // CSS files
    CSS_FILES.forEach(function (file) {
      api.add_files(path.join('css',file), 'client');
    });

    // Vendor Files
    VENDOR_FILES.forEach(function (file) {
      api.add_files(path.join('js', 'vendor', file), 'client');
    });

    // Foundation.js
    api.add_files(path.join('js', 'foundation.js'), 'client');

    // Plugins
    PLUGIN_FILES.forEach(function (file) {
      api.add_files(path.join('js', file), 'client');
    });

    // Foundation Initialization
    api.add_files(path.join('js', 'init-foundation.js'), 'client');
});
