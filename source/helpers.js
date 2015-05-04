// Helpers for HandleBars

Ember.Handlebars.helper( 'date-format', function ( data ) {
    var databaseDate = data.date;
    var date = new Date( databaseDate.replace( ' ', 'T' ) + 'Z' );
    return date.toUTCString();
} );