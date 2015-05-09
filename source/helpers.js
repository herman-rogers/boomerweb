// Helpers for HandleBars

Ember.Handlebars.helper( 'date-format', function ( data ) {
    if ( !data ) {
        return '00:00:00';
    }
    var date = moment( new Date( data ) );
    return moment(date).format( 'MMMM Do YYYY [at] h:mm a' );
} );