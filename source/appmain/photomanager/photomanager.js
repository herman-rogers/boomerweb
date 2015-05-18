App.PhotomanagerRoute = Ember.Route.extend( App.AuthentificationMixin, {

    model: function() {
        return this.store.find( 'image' );
    },

    actions: {

        refreshImages: function() {
            this.refresh();
            window.scrollTo( 0, 0 );
        }

    }

} );

App.PhotomanagerView = Ember.View.extend( {

    templateName: 'Photomanager',

    DragDrop: DropletView.extend()

} );

App.PhotomanagerController = Ember.Controller.extend( DropletController, {

    mimeTypes: ['image/bmp'],

    concatenatedProperties: ['mimeTypes'],

    dropletUrl: imagesRoute,

    selectedImage: null,

    loadingImages: true,

    dropletOptions: {
        fileSizeHeader: true,
    },

    imagesLoaded: function() {
        this.set( 'loadingImages', false );
    }.observes( 'model' ),

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
                    url: imagesRoute,
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