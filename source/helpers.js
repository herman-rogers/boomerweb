// Helpers for HandleBars

Ember.Handlebars.helper( 'date-format', function ( data ) {
    if ( !data ) {
        return '00:00:00';
    }
    var databaseDate = data.date || data;
    var date = new Date( databaseDate.replace( ' ', 'T' ) + 'Z' );
    return date.toUTCString();
} );