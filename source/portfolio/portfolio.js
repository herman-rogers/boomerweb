App.PortfolioRoute = Ember.Route.extend( {
    model: function () {
        return this.store.find( 'project' );

    }
} );

App.PortfolioView = Ember.View.extend( {
    templateName: 'portfolio'
} );

App.PortfolioController = Ember.ArrayController.extend( {
    needs: ['index'],

    loggedIn: Ember.computed.alias( 'controllers.index.loggedIn' ),

    currentState: 'SAVED',

    isEditing: false,

    formState: function () {
        if ( !this.get( 'loggedIn' ) ) {
            this.set( 'currentState', 'SAVED' );
        }
        switch ( this.get('currentState') ) {
            case 'EDITING':
                this.set( 'isEditing', true );
                break;
            case 'CANCELLED':
                this.set( 'isEditing', false );
            default:
                this.set( 'isEditing', false );
        }
    }.observes( 'currentState', 'loggedIn' ),

    actions: {

        editState: function () {
            this.set( 'currentState', 'EDITING' );
        },

        savedState: function () {
            this.set( 'currentState', 'SAVED' );
        },

        cancelState: function () {
            this.get( 'model' ).forEach( function ( model ) {
                model.rollback();
            } );
            this.set( 'currentState', 'CANCELLED' );
        },

        saveEdits: function () {
            var models = this.get( 'model' );
            var saveModels = [];

            models.forEach( function ( project ) {
                saveModels.push( project.save() );
            } );
            Ember.RSVP.all( saveModels ).then( function () {
                this.transitionToRoute( 'portfolio' );
            }.bind( this ) );
            this.set( 'currentState', 'SAVED' );
        },

        deleteModel: function ( project ) {
            project.set( 'enableDelete', true );
        },

        cancelDelete: function ( project ) {
            project.set( 'enableDelete', false );
        },

        confirmDelete: function ( project ) {
            project.destroyRecord();
        }

    }

} );