App.BlogRoute = Ember.Route.extend( {

    beforeModel: function() {
        // Reset the post limit to pull in the 
        // specified amount
        var controller = this.controllerFor( 'blog' );
        var postLimit = controller.get( 'postLimit' );
        controller.set( 'postIndex', postLimit );
    },

    model: function() {
        return this.store.find( 'post' );
    },

} );

App.BlogView = Ember.View.extend( {

    templateName: 'blog',

} );

App.BlogController = Ember.ArrayController.extend( {

    needs: ['index'],

    loggedIn: Ember.computed.alias( 'controllers.index.loggedIn' ),

    currentState: 'SAVED',

    loadingTweets: true,

    // Twitter Functions
    tweets: function() {
        return this.store.find( 'tweet' );
    }.property( ),

    toggleTweetsLoaded: function() {
        this.set( 'loadingTweets', false );
    }.observes('tweets.[]'),

    twitterPost: function() {
        return this.store.createRecord( 'tweet' );
    }.property(),

    destroyAndCreateNewTweet: function() {
        var tweet = this.get( 'twitterPost' );
        tweet.rollback();
        this.set( 'twitterPost', this.store.createRecord( 'tweet' ) );
    },

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

    allPostsLoaded: function() {
        var postIndex = this.get( 'postIndex' );
        var cache = this.get( 'model' ).content.length;
        return postIndex > cache;
    }.property( 'postIndex'),

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

    images: function(){
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
                this.send( 'pushNotifications', 'Posts Saved', false );
            }.bind( this ), function() {
                this.send( 'pushNotifications', 'Failed To Save Posts', true );
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
            post.destroyRecord().then( function() {
                this.send( 'pushNotifications', 'Post Deleted', false );
            }.bind( this ), function( response ) {
                this.send( 'pushNotifications', 'Failed To Delete Post', true );
            }.bind( this ) );
        },

        postToTwitter: function() {
            var tweet = this.get( 'twitterPost' );
            if ( tweet.get( 'text' ) ) {
                var tagPost = tweet.get( 'text' ) + ' #boomerweb';
                tweet.set( 'text', tagPost );
            }
            tweet.save().then( function() {
                //Reload the model properly
                this.send( 'pushNotifications', 'Tweet Posted', false );
                this.destroyAndCreateNewTweet();
            }.bind( this ), function( response ) {
                var errors = this.formValidation( response );
                this.send( 'pushNotifications', errors, true );
                this.destroyAndCreateNewTweet();
            }.bind( this ) );
        }

    }

} );