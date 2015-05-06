App.Project = DS.Model.extend( {

    type: attr( 'string' ),
    name: attr( 'string' ),
    subheading: attr( 'string' ),
    image: attr(),
    description: attr('string'),
    project_link: attr(),
    code_link: attr()

} );