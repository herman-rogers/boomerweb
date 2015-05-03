App.IndexRoute = Ember.Route.extend( {
    beforeModel: function () {
        this.transitionTo('home');
    }
} );

App.IndexView = Ember.View.extend( {
    templateName: 'index'
} );

App.IndexController = Ember.Controller.extend( {

} );