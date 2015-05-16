App.HistoryMixin = Ember.Mixin.create( {

    setupController: function() {
        this.controllerFor( 'history' ).pushObject( this.get( 'routeName' ) );
    }

} );