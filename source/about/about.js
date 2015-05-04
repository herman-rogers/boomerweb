App.AboutRoute = Ember.Route.extend( {

    model: function () {
        return this.store.createRecord( 'contactform' );
    },

    actions: {
    
        refreshModel: function () {
            this.refresh();
            window.scrollTo(0,0);
        }

    }

} );

App.AboutView = Ember.View.extend( {
    templateName: 'about'
} );

App.AboutController = Ember.Controller.extend( {

    actions: {
        sendContactRequest: function () {
            this.get( 'model' ).save().then( function () {
                this.send( 'refreshModel' );
            }.bind( this ) );
        }
    }

} );