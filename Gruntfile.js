module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'styles.css': 'styles.scss'
				}
			}
		},

		watch: {
			css: {
				files: 'styles.scss',
				tasks: ['sass'],
			},
		},

  });

  // Load the plugins.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['watch', 'sass']);

};