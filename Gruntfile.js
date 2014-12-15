'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/angular/angular.js',
          'bower_components/angular-resource/angular-resource.js',
          'bower_components/angular-route/angular-route.js',
          'bower_components/angular-devise/lib/devise.js',
          'bower_components/hammerjs/hammer.js',
          'bower_components/ryanmullins-angular-hammer/angular.hammer.js',
          'bower_components/angularjs-scroll-glue/src/scrollglue.js',
          'bower_components/moment/moment.js',
          'bower_components/moment/locale/es.js',
          'bower_components/angular-elastic/elastic.js'
        ],
        dest: 'www/dependencies/js/dependencies.min.js'
      }
    },
    cssmin: {
      combine: {
        files: {
          'www/dependencies/css/dependencies.min.css': [
            'bower_components/bootstrap/dist/css/bootstrap.css',
            'bower_components/components-font-awesome/css/font-awesome.css']
        }
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'bower_components/components-font-awesome/fonts/',
        src: ['fontawesome-webfont.woff', 'fontawesome-webfont.ttf'],
        dest: 'www/dependencies/fonts/'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin', 'copy']);

};