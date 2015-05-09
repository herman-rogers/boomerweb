
App.Project = DS.Model.extend( {

    type: attr(),
    name: attr(),
    subheading: attr(),
    image: attr(),
    description: attr(),
    project_link: attr(),
    code_link: attr(),

    enableDelete: false,

} );