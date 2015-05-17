//Main Instance of Ember Application
var attr = DS.attr;
var appPath = window.location.origin + window.location.pathname;

//Initialize Highlight.js for
//blog code syntax highlight
//hljs.initHighlightingOnLoad();

App = Ember.Application.create( {
    LOG_TRANSITIONS: true,
    rootElement: '#application'
} );

// Datastore configuration
App.ApplicationAdapter = DS.RESTAdapter.extend( {
    namespace: 'boomerweb/app/api'
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