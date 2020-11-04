module.exports = function(grunt) {

     // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
 
  grunt.initConfig({
    // Configure a mochaTest task
    mochaTest: {
        src: ['test/**/*.js']
    },
    dependencias:{
      cmd : 'npm',
      args: [
        'npm i && ',
        'npm i -g grunt-cli'
      ]
    }
    
  });
 
  grunt.registerTask('test', 'mochaTest');
  grunt.registerTask('install_dependencias', 'dependencias');
}