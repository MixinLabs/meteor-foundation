/* Ugly hack :-( */

Template._init_foundation.rendered = function () {
    console.log('[smart-package] template rendered');
    $(document).foundation();
};

Meteor.startup(function () {
    console.log('[smart package] Meteor.startup');
});

$(document).ready(function () {
    console.log('[smart-package] document.ready');
});