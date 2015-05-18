//Main Instance of Ember Application
var attr = DS.attr;
var appPath = window.location.origin + window.location.pathname;
var devEnvironment = false;

var restApi = 'app/api';
var loginRoute = 'app/login';
var logoutRoute = 'app/logout';
var imagesRoute = 'app/api/images';

//Dev environment setup for XAMPP
if ( devEnvironment ) {
    restApi = 'boomerweb/app/api';
    loginRoute = 'login';
    logoutRoute = 'logout';
    imagesRoute = 'api/images';
}

App = Ember.Application.create( {
    rootElement: '#application'
} );

// Datastore configuration
App.ApplicationAdapter = DS.RESTAdapter.extend( {
    //server app/api
    namespace: restApi
} );

App.ApplicationStore = DS.Store.extend( {
    revision: 16,
    adapter: 'App.ApplicationAdapter'
} );

// Session authentification configuration
Ember.Application.initializer( {
    name: 'session',

    initialize: function ( container, application ) {

        App.Session = Ember.Object.extend( {
            init: function () {
                this._super();
                this.set( 'authToken', $.cookie( 'auth_token' ) );
                this.set( 'authAccountId', $.cookie( 'auth_account' ) );
            },

            authTokenChanged: function () {
                $.cookie( 'auth_token', this.get( 'authToken' ) );
            }.observes( 'authToken' ),

            authAccountIdChanged: function () {
                var authAccountId = this.get( 'authAccountId' );
                $.cookie( 'auth_account', authAccountId );
                if ( !Ember.isEmpty( authAccountId ) ) {
                    var store = App.__container__.lookup( 'store:main' );
                    this.set( 'authAccount', store.find( 'user', authAccountId ) );
                }
            }.observes( 'authAccountId' )
        } ).create();
    }
} );

Ember.$.ajaxPrefilter( function ( options, originalOptions, jqXHR ) {
    if ( !jqXHR.crossDomain ) {
        jqXHR.setRequestHeader( 'X-AUTHENTICATION-TOKEN',
            App.Session.get( 'authToken' ) );
    }
} );