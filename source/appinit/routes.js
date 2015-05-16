App.Router.map( function() {

    //Authentification Routes
    this.resource( 'login' );
    this.resource( 'logout' );

    this.resource( 'index', { path: '/' }, function() {
        //Page Display Routes
        this.resource( 'about' );
        this.resource( 'portfolio' );
        this.resource( 'blog' );
        this.resource( 'gameplayer' );
        this.resource( 'photomanager' );

        //Login Routes
        this.resource( 'addproject' );
        this.resource( 'addpost' );

        //Model Resource Routes
        this.resource( 'users', { path: "/users/:user_id" } );
        this.resource( 'posts', { path: "/posts/:post_id" } );
        this.resource( 'projects', { path: "/projects/:project_id" } );
        this.resource( 'contactforms' );
        this.resource( 'images' );

        //External API Resource Routes
        this.resource( 'tweets' );

        //404 Route
        this.resource( 'notfound', { path: '/*path' } );
    } );

} );