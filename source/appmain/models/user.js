App.User = DS.Model.extend( {

    email: attr( 'string' ),
    password: attr( 'string' ),
    rememberToken: attr( 'string' ),
    created_at: attr()

} );