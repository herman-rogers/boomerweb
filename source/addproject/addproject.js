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

    moveFromPageIfLoggedOut: function() {
        if ( !this.get( 'loggedIn' ) ) {
            this.transitionToRoute( 'portfolio' );
        }
    }.observes( 'loggedIn' ).on( 'init' ),

    images: function() {
        return this.store.find( 'image' );
    }.property(),

    tags: [],

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

        addTag: function( tagName ) {
            console.log('TOGGLE TAG');
            if ( this.get( 'tags' ).contains( tagName ) ) {
                this.get( 'tags' ).removeObject( tagName );
                return;
            }
            this.get( 'tags' ).pushObject( tagName );
        },

        selectImage: function( image, project ) {
            project.set( 'image', image.get( 'image_url' ) );
        },

        cancel: function() {
            this.transitionToRoute( 'portfolio' );
        },

        createNew: function() {
            this.set( 'model.type', 'personal' );

            this.get( 'model' ).save().then( function() {
                this.transitionToRoute( 'portfolio' );
                this.send( 'pushNotifications', 'Project Saved', false );
            }.bind( this ), function( response ) {
                var errors = this.formValidation( response );
                this.send( 'pushNotifications', errors, true );
            }.bind(this) );
        },

        createNewAndContinue: function() {
            this.set( 'model.type', 'personal' );

            this.get( 'model' ).save().then( function() {
                this.send( 'refreshModel' );
                window.scrollTo( 0, 0 );
                this.send( 'pushNotifications', 'Project Saved', false );
            }.bind( this ), function( response ) {
                var errors = this.formValidation( response );
                this.send( 'pushNotifications', errors, true );
            }.bind( this ) );
        }
    }

} );