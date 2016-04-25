module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'dist/ng-image-appear.min.js': ['src/js/build/ng-image-appear.js']
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'src/css/build/animations.min.css': ['src/css/build/animations.min.css']
                }
            }
        },
        autoprefixer: {
            dist: {
                files: {
                    'src/css/build/animations.min.css': 'src/css/animations.css'
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/js/ng-image-appear.js'],
                tasks: ['string-replace', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            styles: {
                files: ['src/css/animations.css'],
                tasks: ['autoprefixer', 'cssmin', 'string-replace', 'uglify'],
                options: {
                    spawn: false,
                },
            },
        },
        'string-replace': {
            inline: {
                files: {
                    'src/js/build/ng-image-appear.js': 'src/js/ng-image-appear.js',
                },
                options: {
                    replacements: [{
                        pattern: '@animation',
                        replacement: '<%= grunt.file.read("src/css/build/animations.min.css") %>'
                    }]
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('default', ['watch']);
};
