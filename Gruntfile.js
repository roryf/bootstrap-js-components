'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  require('time-grunt')(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('bootstrap/package.json'),

    banner: '/*!\n' +
            ' * Bootstrap v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2011-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n',

    clean: {
      bootstrap: {
        src: 'dist/*'
      }
    },

    copy: {
      bootstrap: {
        expand: true,
        flatten: true,
        src: 'bootstrap/js/*.js',
        dest: 'dist/'
      }
    },

    uglify: {
      options: {
        report: 'min',
        sourceMap: true
      },
      bootstrap: {
        options: {
          banner: '<%= banner %>'
        },
        files: [{
          expand: true,
          src: ['dist/*.js'],
          ext: '.min.js'
        }]
      }
    }
  });

  grunt.registerTask('default', [
    'clean',
    'copy',
    'uglify'
  ]);
};
