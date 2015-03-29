var gulp = require( 'gulp' ),
    concat = require( 'gulp-concat' ),
    handlebars = require('gulp-ember-handlebars');

//TODO: Add HandleBars support
gulp.task( 'watch', function () {
    gulp.watch( 'app/js/**/*.js', ['scripts'] );
    //gulp.watch('app/js/**/*.hbs', ['templates']);
} );

gulp.task( 'scripts', function () {
    return gulp.src( 'app/js/**/*.js' )
    .pipe( concat( 'appsource.js' ) )
    .pipe( gulp.dest( 'app/dist/js' ) );
} );

//gulp.task( 'templates', function () {
//    return gulp.src( 'app/js/**/*.hbs' )
//    .pipe( handlebars( {
//        outputType: 'browser',
//        namespace: 'Ember.TEMPLATES'
//    } ) )
//    .pipe( concat( 'apptemplates.js' ) )
//    .pipe( gulp.dest( 'app/dist/js' ) );
//} );

gulp.task( 'default', ['scripts'] );