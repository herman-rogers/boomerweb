App.AddprojectRoute = Ember.Route.extend( {

    // Authenticate user before loading route
    beforeModel: function( controller ) {
        var loggedIn = this.controllerFor( 'Addproject' ).get( 'loggedIn' );
        if ( !loggedIn ) {
            return Ember.RSVP.reject( 'Unauthorized Access' );
        }
    },

    model: function() {
        return this.store.createRecord( 'project' );
    },

    actions: {

        refreshModel: function() {
            this.refresh();
        },

        willTransition: function() {
            controller = this.controllerFor( 'addproject' );
            controller.get( 'content' ).rollback();
        }
    }

} );

App.AddprojectView = Ember.View.extend( {
    templateName: 'addproject'

} );

App.AddprojectController = Ember.Controller.extend( {

    needs: ['index'],

    loggedIn: Ember.computed.alias( 'controllers.index.loggedIn' ),

    twitterPost: null,

    projectTypes: ['games', 'tools', 'software'],

    moveFromPageIfLoggedOut: function() {
        if ( !this.get( 'loggedIn' ) ) {
            this.transitionToRoute( 'portfolio' );
        }
    }.observes( 'loggedIn' ).on( 'init' ),

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

        selectType: function( type ) {
            this.set( 'model.type', type );
        },

        cancel: function() {
            this.transitionToRoute( 'portfolio' );
        },

        createNew: function() {
            this.get( 'model' ).save().then( function() {
                this.transitionToRoute( 'portfolio' );
                this.send( 'postToTwitter' );
                this.send( 'pushNotifications', 'Project Saved', false );
            }.bind( this ), function( response ) {
                var errors = this.formValidation( response );
                this.send( 'pushNotifications', errors, true );
            }.bind(this) );
        },

        createNewAndContinue: function() {
            this.get( 'model' ).save().then( function() {
                this.send( 'refreshModel' );
                window.scrollTo( 0, 0 );
                this.send( 'postToTwitter' );
                this.send( 'pushNotifications', 'Project Saved', false );
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