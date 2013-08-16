module.exports = (grunt)->

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    coffee:
      compile:
        options:
          bare: true
        files:
          'build/main.js': 'src/*.coffee'

    uglify:
      build:
        options:
          mangle: false
        files:
          "build/main.min.js": [
            "bower_components/jquery/jquery.js",
            "bower_components/leaflet/dist/leaflet.js",
            "build/main.js",
            "src/runtime.js",
            "build/tmp.js"]
            
    less:
      devoplment:
        files:
          "build/main.css": "src/main.less"

      production:
        options:
          yuicompress: true
        files:
          "build/main.css": "src/main.less"

    jade:
      devoplment:
        options:
          pretty: true
          data:
            debug: true
        files:
          "index.html": "src/index.jade"

      production:
        options:
          data:
            debug: false
        files:
          "index.html": "src/index.jade"

      client:
        options:
          client: true
          namespace: "JST"
        files:
          "build/tmp.js": ["src/templates/*.jade"]

    watch:
      scripts:
        files: '**/*'
        tasks: ['default']

  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-jade')
  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask 'default', ['build']

  grunt.registerTask 'build', [
    'coffee',
    'uglify',
    'less:devoplment',
    'jade:devoplment',
    'jade:client'
    ]

  grunt.registerTask 'production', [
    'coffee',
    'less:production',
    'jade:production',
    'jade:client',
    'uglify'
    ]
