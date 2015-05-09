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

    verificationNumber: null,

    humanVerification: function() {
        var verificationNumber = this.get( 'verificationNumber' );
        if ( verificationNumber === '2' ) {
            return true;
        }
        return false;
    }.property( 'verificationNumber' ),

    actions: {
        sendContactRequest: function () {
            this.get( 'model' ).save().then( function () {
                this.send( 'refreshModel' );
            }.bind( this ) );
        },

    }

} );