module.exports = function(grunt) {

     // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-shell');
 
  grunt.initConfig({
    // Configure a mochaTest task
    mochaTest: {
      options: {
        timeout: 9000
      },
        src: ['test/**/*.js']
    },
    shell:{
      install: {
        command: 'npm install'
      },
      start:{
        command: 'node src/index.js'
      },
      build:{
        //command: 'rm -r docs && rm README.md'
        command: 'ls -l'
      },
      default:{
        command: "ls -l"
      }
      
    }
    
  });
 
  grunt.registerTask('test', 'mochaTest');
  grunt.registerTask('install', ['shell:install']);
  grunt.registerTask('start', ['shell:start']);
  grunt.registerTask('build', ['shell:build']);
  grunt.registerTask('default', ['shell:default']);
}