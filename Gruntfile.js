module.exports = function(grunt) {
    
    const sass = require('node-sass');
 
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Compile de SCSS files into one CSS file
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'css/style.css': 'sass/apsap/master.scss'
                }
            }
        },
        // Concatenate all the javascript files into a single one: main.js
        concat: {
            options: {
                sourceMap: true,
            },
            dist: {
              src: [
                'js/standalone/jquery-3.6.4.min.js',
                'js/standalone/bootstrap.bundle.min.js',
                'js/standalone/swiper.min.js',
                'js/standalone/masonry.min.js',
                'js/dev/**/*.js'
            ],
              dest: 'js/prod/main.js',
            },
        },
        // Minify main.js file for production
        uglify: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'js/prod/main.min.js': ['js/prod/main.js']
                }
            }
        },
        // Minify css files for production
        cssmin: {
            options: {
                rebaseTo: 'code/css/',
                sourceMap: true
            },
            dist: {
                files: {
                    'css/style.min.css': ['css/style.css']
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: 'localhost',
                    livereload: 35729
                }
            }
        },
        watch: {
            sass: {
                files: ['sass/apsap/**/*.scss'],
                tasks: ['sass']
            },

            js: {
                files: ['js/dev/**/*.js'],
                tasks: ['concat']
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', [
        'sass',
        'concat',
        'uglify',
        'cssmin',
        'connect',
        'watch'
    ]);
};