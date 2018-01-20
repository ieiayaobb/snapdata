var Docker = require('dockerode');
var recursive = require("recursive-readdir");
var package = require("../package.json");

var host = 'local-dtr.zhihuiya.com/';
var groupName = 'platform/';

var docker = new Docker({
  socketPath: '/var/run/docker.sock',
  host: 'https://' + host
});

var imageName = host + groupName + package.name + ':' + package.version;

recursive('docker/', ['package.js'], function (err, files) {
  var handledFiles = files.map(function(e) {
    var path = e.substring('docker/'.length);
    return path
  });
  docker.buildImage({
    context: __dirname,
    src: handledFiles
  }, {
    t: imageName
  }, function (error, output) {
    if (error) {
      return console.error(error);
    }
    output.pipe(process.stdout);
  });
});
