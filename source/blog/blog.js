App.BlogRoute = Ember.Route.extend( {

    model: function () {
        return this.store.find('post');
    }

} );

App.BlogView = Ember.View.extend( {
    //template: Ember.TEMPLATES.App.blog
    templateName: 'blog'
} );

App.BlogController = Ember.Controller.extend( {

} ); 