module.exports = function (grunt) {
  grunt.initConfig({
    // concatenate files
    concat: {
      css: {
        src: ['css/challenge-custom.css'],
        dest: 'build/css/challenge-custom.css',
      },
      js: {
        src: ['js/script.js'],
        dest: 'build/js/script.js',
      },
    },
    // sass
    sass: {
      main: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['**/*.scss', '!**/inc-*.scss'],
          dest: "build/css/",
          ext: '.css'
        }]
      }
    },
    // minify css
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'build/css',
          src: ['*.css', '!*.min.css'],
          dest: 'build/css',
          ext: '.min.css'
        }]
      }
    },
    // Uglify js
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'build/js/scripts.min.js': ['build/js/script.js']
        }
      }
    }, 
    // watch changes
    watch: {
      css: {
        files: ['css/**/*.css'],
        tasks: ['concat:css'],
      },
      sass: {
        options: {
          livereload: false
        },
        files: ['css/**/*.scss'],
        tasks: ['scss']
      },
      js: {
        files: ['js/**/*.js'],
        tasks: ['concat:js'],
      },
    },
  });
  
  // Load tasks-plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch');
    
  // Register tasks
  grunt.registerTask('default', ['concat', 'sass', 'cssmin', 'uglify', 'watch']);
};