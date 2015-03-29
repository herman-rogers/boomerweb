App.Router.map( function () {
    this.resource( 'about' );
    this.resource( 'blog' );
    this.resource( 'posts', { path: "/posts/:post_id" } );
} );