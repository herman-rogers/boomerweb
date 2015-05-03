App.Router.map( function () {

    this.resource( 'about' );
    this.resource( 'blog', function () {
        this.resource( 'posts' );
    } );

} );