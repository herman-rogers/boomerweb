// Main gulp tasks that compiles the App Javascript
// And the Ember Handle bar templates

var gulp = require( 'gulp' );
var concat = require( 'gulp-concat' );
var handlebars = require( 'gulp-handlebars' );
var wrap = require( 'gulp-wrap' );
var declare = require( 'gulp-declare' );

gulp.task( 'watch', function () {
    gulp.watch( 'source/**/*.js', ['scripts'] );
    gulp.watch('source/**/*.hbs', ['templates']);
} );

gulp.task( 'scripts', function () {
    return gulp.src( 'source/**/*.js' )
    .pipe( concat( 'appsource.js' ) )
    .pipe( gulp.dest( 'app/dist/js' ) );
} );

gulp.task( 'templates', function () {
    return gulp.src( 'source/**/*.hbs' )
    .pipe( handlebars( {
        handlebars: require( 'ember-handlebars' )
    } ) )
    .pipe( wrap( 'Ember.Handlebars.template(<%= contents %>)' ) )
    .pipe( declare( {
        namespace: 'Ember.TEMPLATES',
        noRedeclare: true,
        processName: function ( filePath ) {
            return declare.processNameByPath( filePath.replace( 'source/', '' ) );
        }
    } ) )
    .pipe( concat( 'apptemplates.js' ) )
    .pipe( gulp.dest( 'app/dist/js' ) );
} );

gulp.task( 'default', ['scripts', 'templates'] );