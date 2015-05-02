
//Main Instance of Ember Application

App = Ember.Application.create( {
    LOG_TRANSITIONS: true
} );

App.ApplicationAdapter = DS.RESTAdapter.extend( {
    namespace: 'boomerweb/app/api'
} );

App.ApplicationStore = DS.Store.extend( {
    revision: 16,
    adapter: 'App.ApplicationAdapter'
} );