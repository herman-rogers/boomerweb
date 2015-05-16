App.PortfolioRoute = Ember.Route.extend( {
    model: function() {
        return this.store.find( 'project' );
    }
} );

App.PortfolioView = Ember.View.extend( {

    templateName: 'portfolio',

} );

App.PortfolioController = Ember.ArrayController.extend( {

    needs: ['index'],

    loggedIn: Ember.computed.alias( 'controllers.index.loggedIn' ),

    sortProperties: ['updated_at'],

    projectTypes: ['games', 'tools', 'software'],

    sortAscending: false,

    selectedType: null,

    noTypesFound: false,

    currentState: 'SAVED',

    isEditing: false,

    formState: function() {
        if ( !this.get( 'loggedIn' ) ) {
            this.set( 'currentState', 'SAVED' );
        }
        switch ( this.get( 'currentState' ) ) {
            case 'EDITING':
                this.set( 'isEditing', true );
                break;
            case 'CANCELLED':
                this.set( 'isEditing', false );
            default:
                this.set( 'isEditing', false );
        }
    }.observes( 'currentState', 'loggedIn' ),

    images: function() {
        return this.store.find( 'image' );
    }.property(),

    actions: {

        selectImage: function( image, project ) {
            project.set( 'image', image.get( 'image_url' ) );
        },

        editState: function() {
            this.set( 'currentState', 'EDITING' );
        },

        savedState: function() {
            this.set( 'currentState', 'SAVED' );
        },

        cancelState: function() {
            this.get( 'model' ).forEach( function( model ) {
                model.rollback();
            } );
            this.set( 'currentState', 'CANCELLED' );
        },

        saveEdits: function() {
            var models = this.get( 'model' );
            var saveModels = [];

            models.forEach( function( project ) {
                saveModels.push( project.save() );
            } );
            Ember.RSVP.all( saveModels ).then( function() {
                this.transitionToRoute( 'portfolio' );
                this.send( 'pushNotifications', 'Projects Saved', false );
            }.bind( this ), function() {
                this.send( 'pushNotifications', 'Failed To Save Projects', true );
            }.bind( this ) );
            this.set( 'currentState', 'SAVED' );
        },

        deleteModel: function( project ) {
            project.set( 'enableDelete', true );
        },

        cancelDelete: function( project ) {
            project.set( 'enableDelete', false );
        },

        confirmDelete: function( project ) {
            project.destroyRecord().then( function() {
                this.send( 'pushNotifications', 'Post Deleted', false );
            }.bind( this ), function() {
                this.send( 'pushNotifications', 'Failed To Delete Post', true );
            }.bind( this ) );
        },

        resetFilter: function() {
            this.get( 'content' ).forEach( function( project ) {
                project.set( 'typeFilter', true );
            } );
            this.set( 'selectedType', null );
            this.set( 'noTypesFound', false );
        },

        editProjectType: function( project, type ) {
            project.set( 'type', type );
        },

        sortProjectByType: function( type ) {
            var projects = this.get( 'content' );
            var typesFound = true;

            projects.forEach( function( project ) {
                var typeArray = project.get( 'type' ).split( "," );
                if ( typeArray.indexOf( type ) > -1 ) {
                    project.set( 'typeFilter', true );
                    typesFound = false;
                } else {
                    project.set( 'typeFilter', false );
                }
            } );
            this.set( 'noTypesFound', typesFound );
            this.set( 'selectedType', type )
        },

    }

} );