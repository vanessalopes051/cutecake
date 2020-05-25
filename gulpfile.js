

var gulp = require('gulp');
var sass = require('gulp-sass');


//COMPILA SASS
gulp.task('sass', gulp.series(function(){
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    .pipe(sass())//Converte sass em css
    .pipe(gulp.dest('src/css')); //Indica pasta de destino do css
    
}));

//OBSERVA AS MUDANÇAS E FAZ ALTERAÇÕES AUTOMATICAMENTE
gulp.task('watch', gulp.series(function(){
    gulp.watch(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'], gulp.parallel('sass'));
}));

//EXECUTA AS TAREFAS ANTERIORES
gulp.task('default', gulp.parallel('sass','watch'));
//gulp.task('default', ['sass', 'js', 'serve']);