// 包装函数
module.exports = function(grunt) {

  // 任务配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // uglify: {
    //   build: {
    //     src: 'src/<%= pkg.name %>.js',
    //     dest: 'build/<%= pkg.name %>.min.js'
    //   }
    // }
  });

  // 任务加载
  // grunt.loadNpmTasks('grunt-contrib-uglify');

  // 自定义任务
  grunt.registerTask('default', ['']);

};
