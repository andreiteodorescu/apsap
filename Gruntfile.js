module.exports = function(grunt) {
    
    const sass = require('node-sass');
 
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
        concat: {
            options: {
                sourceMap: true,
            },
            dist: {
              src: [
                'js/standalone/jquery-3.6.4.min.js',
                'js/standalone/bootstrap.bundle.min.js',
                'js/standalone/tiny-slider.js',
                'js/dev/**/*.js'
            ],
              dest: 'js/prod/main.js',
            },
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

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', [
        'sass',
        'concat',
        'connect',
        'watch'
    ]);
};