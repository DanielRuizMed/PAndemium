module.exports = function(grunt) {

     // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-shell');
 
  grunt.initConfig({
    // Configure a mochaTest task
    mochaTest: {
      options: {
        timeout: 3000
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
        command: 'docker build -f Dockerfile.api . --tag pandemiun'
      }
      
    }
    
  });
 
  grunt.registerTask('test', 'mochaTest');
  grunt.registerTask('install', ['shell:install']);
  grunt.registerTask('start', ['shell:start']);
  grunt.registerTask('build', ['shell:build']);
}