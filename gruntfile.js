module.exports = function(grunt) {
  'use strict';

  var paths = {
    dist: './dist',
    src: './src/layer-handler.js'
  };

  grunt.initConfig({
    pkg: require('./package'),

    build: (function() {
      var build = {};
      build.scripts = ['jshint', 'uglify'];
      return build;
    })(),

    jshint: {
      files: paths.src
    },

    uglify: {
      main: {
        options: {
          beautify: false
        },
        files: {
          'dist/layer-handler.min.js': 'src/layer-handler.js',
          'vendor/assets/javascripts/layer-handler/layer-handler.min.js': 'src/layer-handler.js'
        }
      }
    },

    watch: {
      options: {
        interrupt: true,
        spawn: false
      },
      js: {
        files: [paths.src],
        tasks: ['uglify']
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('build', function() {
    grunt.task.run(this.data);
  });
};
