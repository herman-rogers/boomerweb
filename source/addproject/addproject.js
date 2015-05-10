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

    actions: {

        cancel: function() {
            this.transitionToRoute( 'portfolio' );
        },

        createNew: function() {
            this.set( 'model.type', 'personal' );

            this.get( 'model' ).save().then( function() {
                this.transitionToRoute( 'portfolio' );
                this.send( 'pushNotifications', 'Project Saved', false );
            }.bind( this ), function( response ) {
                this.send( 'pushNotifications', 'Failed To Save Project', true );
            }.bind( this ) );
        },

        createNewAndContinue: function() {
            this.set( 'model.type', 'personal' );

            this.get( 'model' ).save().then( function() {
                this.send( 'refreshModel' );
                window.scrollTo( 0, 0 );
                this.send( 'pushNotifications', 'Project Saved', false );
            }.bind( this ), function( response ) {
                this.send( 'pushNotifications', 'Failed To Save Project', true );
            }.bind( this ) );
        },
    }
} );