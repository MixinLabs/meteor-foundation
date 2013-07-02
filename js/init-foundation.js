/* Ugly hack :-( */

Template._init_foundation.rendered = function () {
    var $document = $(document);
    
    $document.ready(function () {
        $(document).foundation();
    });
};