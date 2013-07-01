Package.describe({
    summary: 'The most advanced responsive front-end framework in the world.'
});

Package.on_use(function (api) {
    var path = Npm.require('path');
    
    // Use jquery for zurb foundation
    api.use(['jquery', 'templating'], 'client');
    
    // CSS files
    api.add_files(path.join('css', 'normalize.css'), 'client');
    api.add_files(path.join('css', 'foundation.min.css'), 'client');
    
    // JS files
    api.add_files(path.join('js', 'custom.modernizr.js'), 'client');
    api.add_files(path.join('js', 'foundation.min.js'), 'client');
    
    // Foundation Initialization
    api.add_files(path.join('html', 'init-foundation.html'), 'client');
    api.add_files(path.join('js', 'init-foundation.js'), 'client');
});