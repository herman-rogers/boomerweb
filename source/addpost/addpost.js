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

    actions: {

        createNewPost: function () {
            this.get( 'model' ).save().then( function () {
                this.transitionTo( 'blog' );
            }.bind( this ) );
        },

        createNewPostAndContinue: function() {
            this.get( 'model' ).save().then( function () {
                this.send( 'saveAndAddAnother' );
            }.bind( this ) );
        },
    }
} );