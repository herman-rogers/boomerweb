﻿
App.Project = DS.Model.extend( {

    type: attr(),
    name: attr(),
    subheading: attr(),
    image: attr(),
    description: attr(),
    project_link: attr(),
    code_link: attr(),
    download_link: attr(),
    updated_at: attr(),

    enableDelete: false,
    typeFilter: true
} );