App.AddpostRoute = Ember.Route.extend( {

    model: function () {
        return this.store.createRecord( 'post' );
    },

    actions: {
        saveAndAddAnother: function () {
            this.refresh();
            window.scrollTo( 0, 0 );
        },
    }

} );

App.AddpostView = Ember.View.extend( {
    templateName: 'addpost'

} );

App.AddpostController = Ember.Controller.extend( {

    needs: ['index'],

    moveFromPageIfLoggedOut: function(){
        if ( !this.get( 'loggedIn' ) ) {
            this.transitionToRoute('portfolio');
        }
    }.observes('loggedIn').on('init'),

    loggedIn: Ember.computed.alias( 'controllers.index.loggedIn' ),

    actions: {

        createNewPost: function () {
            this.get( 'model' ).save().then( function () {
                this.transitionToRoute( 'blog' );
            }.bind( this ) );
        },

        createNewPostAndContinue: function() {
            this.get( 'model' ).save().then( function () {
                this.send( 'saveAndAddAnother' );
            }.bind( this ) );
        },
    }
} );