App.PhotomanagerRoute = Ember.Route.extend( {

    // Authenticate user before loading route
    beforeModel: function( controller ) {
        var loggedIn = this.controllerFor( 'Addproject' ).get( 'loggedIn' );
        if ( !loggedIn ) {
            return Ember.RSVP.reject( 'Unauthorized Access' );
        }
    },

    model: function() {
        return this.store.find( 'image' );
    },

    actions: {
        refreshImages: function() {
            this.refresh();
            window.scrollTo(0,0);
        }
    }

} );

App.PhotomanagerView = Ember.View.extend( {

    templateName: 'Photomanager',

    DragDrop: DropletView.extend()

} );

App.PhotomanagerController = Ember.Controller.extend( DropletController, {

    needs: ['index'],

    loggedIn: Ember.computed.alias( 'controllers.index.loggedIn' ),

    moveFromPageIfLoggedOut: function() {
        if ( !this.get( 'loggedIn' ) ) {
            this.transitionToRoute( 'blog' );
        }
    }.observes( 'loggedIn' ).on( 'init' ),

    mimeTypes: ['image/bmp'],

    concatenatedProperties: ['mimeTypes'],

    dropletUrl: 'api/images',

    selectedImage: null,

    loadingImages: true,

    dropletOptions: {
        fileSizeHeader: true,
    },

    imagesLoaded: function() {
        this.set( 'loadingImages', false );
    }.observes('model'),

    didUploadFiles: function didUploadFiles( response ) {
        this.send( 'refreshImages' );
        this.send( 'pushNotifications', 'Image Added', false );
    },

    actions: {

        deleteImage: function( image ) {
            var imageUrl = image.get( 'name' );
            image.destroyRecord().then( function() {
                $.ajax( {
                    context: this,
                    url: 'api/images',
                    type: 'DELETE',
                    data: { image_url: imageUrl },
                    success: function( result ) {
                        this.send( 'pushNotifications', 'Image Deleted', false );
                    }
                } );
            }.bind( this ) );
        },

        selectImage: function( image ) {
            this.set( 'selectedImage', image );
        }

    }

} );