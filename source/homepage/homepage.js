App.HomePageRoute = Ember.Route.extend( {

    model: function () {
        return this.store.find( 'post' );
    }

} );

App.HomePageController = Ember.Controller.extend( {

} );