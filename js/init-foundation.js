/* Ugly hack :-( */

Template._init_foundation.rendered = function () {
    var self = this,
        body = document.getElementsByTagName('body')[0]
        newScript = document.createElement('script');
        
    newScript.text = 'var $document = $(document); $document.ready(function () { $document.foundation(); });';
    body.appendChild(newScript);
};