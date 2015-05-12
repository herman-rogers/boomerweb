App.AboutRoute = Ember.Route.extend( {

    model: function() {
        return this.store.createRecord( 'contactform' );
    },

    actions: {
        refreshModel: function() {
            this.refresh();
            window.scrollTo( 0, 0 );
        }
    }

} );

App.GameplayerRoute = Ember.Route.extend( {

} );

App.GameplayerView = Ember.View.extend( {
    templateName:'gameplayer'
} );

App.GameplayerController = Ember.Controller.extend( {

    actions: {
    }

} );