App.BlogRoute = Ember.Route.extend( {

    beforeModel: function() {
        // Reset the post limit to pull in the 
        // specified amount
        var controller = this.controllerFor( 'blog' );
        var postLimit = controller.get('postLimit');
        controller.set('postIndex', postLimit);
    },

    model: function() {
        return this.store.find( 'post' );
    },

} );

App.BlogView = Ember.View.extend( {

    templateName: 'blog',

} );

App.BlogController = Ember.ArrayController.extend( {

    testPost: function(){
        return this.store.find( 'post', 50 );
    }.property(),

    needs: ['index'],

    loggedIn: Ember.computed.alias( 'controllers.index.loggedIn' ),

    currentState: 'SAVED',

    tweets: function() {
        return this.store.find( 'tweet' );
    }.property(),

    // Blog Loading Properties
    cachedPosts: function() {
        return this.get( 'model' );
    },

    postLimit: 3,

    postIndex: 3,

    loadPosts: function() {
        var cache = this.get( 'content' ).content;
        var postLimit = this.get( 'postIndex' );
        var viewablePosts = Ember.A( [] );

        for ( var i = 0; i < postLimit; i++ ) {
            if ( i < cache.length ) {
                viewablePosts.pushObject( cache[i] );
            }
        }
        return viewablePosts;

    }.property( 'model.[]', 'postIndex' ),

    // Blog Editing Properties
    isEditing: false,

    isDeleting: false,

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

    actions: {

        loadMorePosts: function() {
            var postIndex = this.get( 'postIndex' );
            var cachedPosts = this.get( 'content' ).content;
            if ( postIndex > cachedPosts.length ) {
                return;
            }
            var setNewLimit = postIndex + this.get( 'postLimit' );
            this.set( 'postIndex', setNewLimit );
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

            models.forEach( function( post ) {
                saveModels.push( post.save() );
            } );
            Ember.RSVP.all( saveModels ).then( function() {
                this.transitionToRoute( 'blog' );
            }.bind( this ) );
            this.set( 'currentState', 'SAVED' );
        },

        deleteModel: function( post ) {
            post.set( 'enableDelete', true );
        },

        cancelDelete: function( post ) {
            post.set( 'enableDelete', false );
        },

        confirmDelete: function( post ) {
            post.destroyRecord();
        }

    }

} );