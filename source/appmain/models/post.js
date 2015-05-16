
App.Post = DS.Model.extend( {

    title: attr( 'string' ),
    image: attr( 'string' ),
    post_body: attr( 'string' ),
    author: attr('string'),
    created_at: attr(),

    enableDelete: false,
    expanded: false,

} );