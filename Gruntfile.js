module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'build/ng-image-appear.min.js': ['src/ng-image-appear.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/ng-image-appear.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['watch']);
};