App.AddpostRoute = Ember.Route.extend( App.AuthentificationMixin, {

    model: function() {
        return this.store.createRecord( 'post' );
    },

    actions: {
        refreshRoute: function() {
            this.refresh();
        },

        willTransition: function() {
            controller = this.controllerFor( 'addpost' );
            controller.get( 'content' ).rollback();
        }
    }

} );

App.AddpostView = Ember.View.extend( {

    templateName: 'addpost'

} );

App.AddpostController = Ember.Controller.extend( {

    twitterPost: null,

    images: function() {
        return this.store.find( 'image' );
    }.property(),

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

        selectImage: function( image, project ) {
            project.set( 'image', image.get( 'image_url' ) );
        },

        cancel: function() {
            this.transitionToRoute( 'blog' );
        },

        createNew: function() {
            this.get( 'model' ).save().then( function() {
                this.transitionToRoute( 'blog' );
                this.send( 'postToTwitter' );
                this.send( 'pushNotifications', 'Post Saved', false );
            }.bind( this ), function( response ) {
                var errors = this.formValidation( response );
                this.send( 'pushNotifications', errors, true );
            }.bind( this ) );
        },

        createNewAndContinue: function() {
            this.get( 'model' ).save().then( function() {
                this.send( 'refreshRoute' );
                window.scrollTo( 0, 0 );
                this.send( 'postToTwitter' );
                this.send( 'pushNotifications', 'Post Saved', false );
            }.bind( this ), function( response ) {
                var errors = this.formValidation( response );
                this.send( 'pushNotifications', errors, true );
            }.bind( this ) );
        },

        postToTwitter: function() {
            var text = this.get( 'twitterPost' );
            if ( !text ) {
                return;
            }
            var tagPost = text + ' #boomerweb';
            var tweet = this.store.createRecord( 'tweet' );
            tweet.set( 'text', tagPost );

            tweet.save().then( function() {
                this.send( 'pushNotifications', 'Tweet Posted', false );
            }.bind( this ), function( response ) {
                var errors = this.formValidation( response );
                this.send( 'pushNotifications', errors, true );
            }.bind( this ) );
        }

    }

} );