const {series, parallel} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-imagemin')
// const stipCss = require('gulp-strip-css-comments')
const htmlmin = require('gulp-htmlmin')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

function tarefasCSS(cb) {

    gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.css', './vendor/owl/css/owl.css', './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css', './src/css/style.css'])
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min'})) // libs.min.css
        .pipe(gulp.dest('./dist/css'))

    return cb()

}

function tarefasJS(callback){

    gulp.src(['./node_modules/jquery/dist/jquery.js', './node_modules/bootstrap/dist/js/bootstrap.js', './vendor/owl/js/owl.js', './vendor/jQueryMask/jquery.mask.js', './src/js/custom.js'])
        .pipe(babel({
            comments: false,
            presets: ['@babel/env']
        }))
        .pipe(concat('scripts.js'))        // mescla arquivos
        //.pipe(uglify())                  // minifica js
        .pipe(rename({ suffix: '.min'}))   // scripts.min.js
        .pipe(gulp.dest('./dist/js'))      // cria arquivos em novo diretório
    
        return callback()
}


function tarefasImagem(){
    
    return gulp.src('./src/images/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
}

// POC - Proof Of Concept
function tarefasHTML(callback){
    gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))

    return callback()
}

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch('./src/**/*').on('change', process)
    gulp.watch('./src/**/*').on('change', reload) // repete o processo qundo alterar algo em src
})

// series x parallel
const process = series(tarefasHTML, tarefasJS, tarefasCSS) 

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem

exports.default = process

