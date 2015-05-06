App.Router.map( function () {

    //Authentification Routes
    this.resource( 'login' );
    this.resource( 'logout' );

    this.resource( 'index', { path: '/' }, function () {
        //Page Display Routes
        this.resource( 'about' );
        this.resource( 'portfolio' );
        this.resource( 'blog' );
        this.resource( 'addproject' );
        this.resource( 'addpost' );

        //Model Resource Routes
        this.resource( 'users', { path: "/users/:user_id" } );
        this.resource( 'posts', { path: "/posts/:post_id" } );
        this.resource( 'projects', { path: "/projects/:project_id" } );
        this.resource( 'contactforms' );
    } );

} );