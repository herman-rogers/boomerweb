App.Router.map( function () {
    this.resource( 'index', { path: '/' }, function () {

        this.resource( 'home' );

        this.resource( 'blog', function () {
            this.resource( 'posts' );
        } );

        this.resource( 'about' );
    } );

} );