App.BlogRoute = Ember.Route.extend( {

    model: function () {
        return this.store.find( 'post' );
    },

} );

App.BlogView = Ember.View.extend( {
    templateName: 'blog'
} );

App.BlogController = Ember.ArrayController.extend( {

    needs: ['index'],

    loggedIn: Ember.computed.alias( 'controllers.index.loggedIn' ),

    currentState: 'SAVED',

    isEditing: false,

    formState: function () {
        var state = this.get( 'currentState' );
        if ( !this.get( 'loggedIn' ) ) {
            this.set( 'state', 'SAVED' );
        }
        switch ( state ) {
            case 'EDITING':
                this.set( 'isEditing', true );
                break;
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

        savePostEdits: function () {
            var models = this.get( 'model' );
            var saveModels = [];

            models.forEach( function ( post ) {
                saveModels.push( post.save() );
            } );
            Ember.RSVP.all( saveModels ).then( function () {
                this.transitionToRoute( 'blog' );
            }.bind( this ) );
            this.set( 'currentState', 'SAVED' );
        },

    }

} );