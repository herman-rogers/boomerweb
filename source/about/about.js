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

    sendingMessage: false,

    humanVerification: function() {
        var verificationNumber = this.get( 'verificationNumber' );
        if ( verificationNumber === '2' ) {
            return true;
        }
        return false;
    }.property( 'verificationNumber' ),

    actions: {

        sendContactRequest: function() {
            this.set( 'sendingMessage', true );
            this.get( 'model' ).save().then( function () {
                this.send( 'pushNotifications', 'Message Sent', false );
                this.set( 'sendingMessage', false );
                this.send( 'refreshModel' );
            }.bind( this ), function( response ) {
                this.send( 'pushNotifications', 'Failed To Send Message', true );
                this.set( 'sendingMessage', false );
            }.bind( this ) );
        },

    }

} );