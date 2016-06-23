module.exports = function(grunt) {

    /**
    * tasks configurations.
    */
    var config = require('./grunt_tasks/config');
    var browserify = require('./grunt_tasks/browserify');
    var copy = require('./grunt_tasks/copy');

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      configs: config,
      browserify: browserify,
      copy: copy
    });

    /**
    * load tasks.
    */
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    /*
    * register tasks
    */

    grunt.registerTask('build', [
      'browserify:build',
      'copy:build'
    ]);
};