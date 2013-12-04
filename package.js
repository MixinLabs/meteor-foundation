Package.describe({
    summary: 'The most advanced responsive front-end framework in the world.'
});

Package.on_use(function (api) {
    var path = Npm.require('path');
    
    // Use jquery for zurb foundation
    api.use(['jquery', 'templating'], 'client');
    
    // CSS files
    api.add_files(path.join('css', 'normalize.css'), 'client');
    api.add_files(path.join('css', 'foundation.css'), 'client');
    
    // JS files
    api.add_files(path.join('js', 'vendor', 'custom.modernizr.js'), 'client');
    // Skip Fastclick, as it's currently embedded in foundation.js
    // api.add_files(path.join('js', 'vendor', 'fastclick.js'), 'client');
    api.add_files(path.join('js', 'vendor', 'jquery.autocomplete.js'), 'client');
    api.add_files(path.join('js', 'vendor', 'jquery.cookie.js'), 'client');
    api.add_files(path.join('js', 'vendor', 'placeholder.js'), 'client');
    api.add_files(path.join('js', 'foundation.js'), 'client');
    
    // Foundation Initialization
    api.add_files(path.join('html', 'init-foundation.html'), 'client');
    api.add_files(path.join('js', 'init-foundation.js'), 'client');
});