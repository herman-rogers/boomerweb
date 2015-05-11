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
        if ( verificationNumber === '8' ) {
            return true;
        }
        return false;
    }.property( 'verificationNumber' ),

    formValidation: function( response ) {
        var jsonResponse = response.responseJSON.error;
        var errors = Ember.keys( jsonResponse ).map( function( key ) {
            var jsonResponseValue = jsonResponse[key];
            if ( Array.isArray( jsonResponseValue ) ) {
                jsonResponseValue = jsonResponseValue.join( '' );
            }
            return { field: key, value: jsonResponseValue };
        }.bind( this ) );
        return errors;
    },

    actions: {

        sendContactRequest: function() {
            this.set( 'sendingMessage', true );
            this.get( 'model' ).save().then( function () {
                this.send( 'pushNotifications', 'Message Sent', false );
                this.set( 'sendingMessage', false );
                this.send( 'refreshModel' );
            }.bind( this ), function( response ) {
                var errors = this.formValidation( response );
                this.send( 'pushNotifications', errors, true );
                this.set( 'sendingMessage', false );
            }.bind( this ) );
        },

    }

} );