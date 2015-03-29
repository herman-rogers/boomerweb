var gulp = require( 'gulp' ),
    concat = require( 'gulp-concat' );

gulp.task( 'default', function () {
    return gulp.src( 'app/js/*' )
    .pipe( concat( 'gweithdybuild.js' ) )
    .pipe( gulp.dest( 'app/dist/js' ) );
} );

gulp.task( 'watch', function () {
    gulp.watch( 'app/js/**/*.{js,hbs}', ['default'] );
} );