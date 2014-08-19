# Browserifying express
==============================
## Express set up
------------------
- $ npm init
- $ npm install express
- $ run with node server.js

## Browserify set-up
-------------------
- $ npm install -g browserify
- $ npm install grunt-contrib-copy grunt-contrib-clean grunt-contrib-connect grunt-contrib-jshint grunt-contrib-watch grunt-browserify matchdep globule --save-dev
- $ npm install debowerify --save

## Set-up Bower
--------------------
- $ bower init
*creates a bower.json file*

## Install jquery
- $ bower install jquery
- $ bower install --save jquery to add to your dependencies.

## Set-up Gruntfile
--------------------------
- $ touch Gruntfile.js
```
'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['dist'],

    copy: {
      all: {
        expand: true,
        cwd: 'src/',
        src: ['*.css', '*.html', '/images/**/*', '!Gruntfile.js'],
        dest: 'dist/',
        flatten: true,
        filter: 'isFile'
      },
    },

    browserify: {
      all: {
        src: 'src/*.js',
        dest: 'dist/app.js'
      },
      options: {
        transform: ['debowerify'],
        debug: true
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        jshintrc: true,
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      },
    },

    connect: {
      options: {
        port: process.env.PORT || 3000,
        base: 'dist/',
      },

      all: {},
    },

    watch: {
      options: {
        livereload: true
      },

      html: {
        files: '<%= copy.all.src %>',
      },

      js: {
        files: '<%= browserify.all.src %>',
        tasks: ['browserify'],
      },

      assets: {
        files: ['assets/**/*', '*.css', 'images/**/*', 'img/**/*', '!Gruntfile.js'],
        tasks: ['copy'],
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'clean', 'browserify', 'copy']);
  grunt.registerTask('server', ['default', 'connect', 'watch']);

};
```
### Create modules
-------------------------
