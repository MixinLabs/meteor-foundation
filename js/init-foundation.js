Meteor.startup(function () {
  if (typeof(Router) !== 'undefined' && Router.onAfterAction) {
    Router.onAfterAction(function () {
      Deps.afterFlush(function () {
        Foundation.init(document);
      });
    });
  } else {
    UI.body.rendered = function () {
      Foundation.init(document);
    };
  }
});
