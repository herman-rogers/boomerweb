var attr = DS.attr;

App.Post = DS.Model.extend( {

    title: attr( 'string' ),
    post_body: attr( 'string' ),
    author: attr('string'),
    date_created: attr( 'date' )

} );