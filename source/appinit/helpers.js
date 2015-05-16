// Helpers for HandleBars

Ember.Handlebars.helper( 'date-format', function( data ) {
    if ( !data ) {
        return '00:00:00';
    }
    var date = moment( new Date( data ) );
    return moment( date ).format( 'MMM Do YYYY [at] h:mm a' );
} );

Ember.Handlebars.helper( 'post-length', function( postText ) {
    var postLength = 0;
    var color = '#337ab7'; //light blue
    if ( postText ) {
        postLength = postText.length;
    }
    var currentLength = 255 - postLength;
    if ( currentLength < 0 ) {
        color = '#a94442'; // light red
    }
    return new Ember.Handlebars.SafeString( "<font color =" + color + ">"
        + "Characters: " + currentLength + '</font>' );
} );

Ember.Handlebars.helper( 'truncate', function( text, options ) {
    var limit = options.hash.limit || 50;
    if ( text.length < limit ) {
        return text;
    }
    text = text.substr( 0, limit - 3 ) + "...";
    return text;
} );