module.exports = function(grunt) {

    /**
    * tasks configurations.
    */
    var config = require('./grunt_tasks/config');
    var connect = require('./grunt_tasks/connect');

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      configs: config,
      connect: connect,
    });

    /**
    * load tasks.
    */
    grunt.loadNpmTasks('grunt-contrib-connect');

    /*
    * register tasks
    */

    // Run a local server instance
    grunt.registerTask('run', [
      'connect:server'
    ]);
};