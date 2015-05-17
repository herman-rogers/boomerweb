/**
 * Main gulp tasks that compiles the App Javascript
 * And the Ember Handle bar templates
 * 
 */
var gulp = require( 'gulp' );
var concat = require( 'gulp-concat' );
var addsrc = require( 'gulp-add-src' );

/**
 * Compiled Ember Handlebars Dependencies
 */
var htmlbars = require( 'gulp-htmlbars' );
var tap = require( 'gulp-tap' );

gulp.task( 'watch', function() {
    gulp.watch( 'styles/**/*.css', ['styles'] );
    gulp.watch( 'source/**/*.{js,hbs}', ['scripts'] );
} );

/**
 * CSS Build Tasks
 */ 
gulp.task( 'styles', function() {
    return gulp.src( 'styles/**/*.css' )
    .pipe( concat( 'appstyles.css' ) )
    .pipe( gulp.dest( 'app/dist/styles' ) );
} );

/*
 * JS Build Tasks
 * Initilization: Templates | App | Mixins |
 *                Components | Main Source
 */ 
gulp.task( 'scripts', ['templates'], function() {
    return gulp.src( 'source/appinit/**/*.js' )
    .pipe( addsrc.append( 'source/mixins/**/*.js' ) )
    .pipe( addsrc.append( 'source/components/**/*.js' ) )
    .pipe( addsrc.append( 'source/appmain/**/*.js' ) )
    .pipe( addsrc.prepend( 'app/dist/js/templates.js' ) )
    .pipe( concat( 'appbuild.js' ) )
    .pipe( gulp.dest( 'app/dist/js' ) );
} );

gulp.task( 'libraries', function() {
    return gulp.src( 'bower_components/jquery/dist/jquery.js' )
        .pipe( addsrc.append( 'bower_components/ember/ember-template-compiler.js' ) )
        .pipe( addsrc.append( 'bower_components/ember/ember.debug.js' ) )
        .pipe( addsrc.append( 'bower_components/ember-data/ember-data.js' ) )
        .pipe( addsrc.append( 'bower_components/bootstrap/bootstrap.min.js' ) )
        .pipe( addsrc.append( 'bower_components/jquery-cookie/jquery.cookie.js' ) )
        .pipe( addsrc.append( 'bower_components/moment/moment.js' ) )
        .pipe( addsrc.append( 'bower_components/highlight/highlight.pack.js' ) )
        .pipe( addsrc.append( 'bower_components/trumbowyg-2.0.0-beta/dist/trumbowyg.js' ) )
        .pipe( addsrc.append( 'node_modules/ember-droplet/dist/ember-droplet.min.js' ) )
        .pipe( concat( 'libraries.js' ) )
        .pipe( gulp.dest( 'app/dist/js' ) )
} );

var getTemplateNameFromPath = function( path ) {
    // if exist replace \ with /
    while ( path.indexOf( "\\" ) !== -1 ) {
        path = path.replace( "\\", "/" );
    }

    var splitPath = path.split( "/" );
    var filenameWithExtension = splitPath[splitPath.length - 1];
    var folderNameInWhichFileResides = splitPath[splitPath.length - 2];
    var lastDotIndex = filenameWithExtension.lastIndexOf( "." );
    var filenameWithoutExtension = filenameWithExtension.substring( 0, lastDotIndex );

    var finalTemplateName = filenameWithoutExtension;
    if ( folderNameInWhichFileResides === "components" ) {
        finalTemplateName = "components/" + finalTemplateName;
    }

    return finalTemplateName;
};

gulp.task( 'templates', function() {
    return gulp.src( 'source/**/*.hbs' )
        .pipe( htmlbars( {
            isHTMLBars: true,
            templateCompiler: require( './bower_components/ember/ember-template-compiler' )
        } ) )
        .pipe( tap( function( file ) {
            var templateName = getTemplateNameFromPath( file.path.toString() );
            var currentFile = file.contents.toString();
            currentFile = currentFile.replace( "export default",
                "Ember.TEMPLATES['" + templateName + "'] = " );
            file.contents = new Buffer( currentFile );
        } ) )
        .pipe( concat( 'templates.js' ) )
        .pipe( gulp.dest( 'app/dist/js/' ) );
} );

gulp.task( 'default', ['libraries', 'scripts', 'styles'] );