App.Router.map( function () {

    this.resource( 'login' );
    this.resource( 'logout' );

    this.resource( 'index', { path: '/' }, function () {
        this.resource( 'users', {path: "/users/:user_id"} );
        this.resource( 'portfolio' );

        this.resource( 'blog', function () {
            this.resource( 'posts' );
        } );

        this.resource( 'about', function () {
            this.resource( 'contactforms' );
        } );

    } );

} );