App.BlogRoute = Ember.Route.extend( {

    model: function () {
        return this.store.find('post');
    },

} );

App.BlogView = Ember.View.extend( {
    templateName: 'blog'
} );

App.BlogController = Ember.Controller.extend( {

} ); 