//Main Instance of Ember Application
App = Ember.Application.create( {
    LOG_TRANSITIONS: true
} );

App.ApplicationAdapter = DS.RESTAdapter.extend( {
    namespace: 'api/v1'
} );

App.Store = DS.Store.extend( {
    adapter: 'App.ApplicationAdapter'
} );
App.Router.map( function () {
    this.resource( 'about' );
    this.resource( 'blog' );
    this.resource( 'posts', { path: "/posts/:post_id" } );
} );