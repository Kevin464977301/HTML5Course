let http = require('http');
let fs = require('fs');

//存放所有的子目录
let folders = [];
http.createServer((req, res) => {
  if (req.url === '/favicon.ico') return;
  fs.readdir('./canvas-svg', function(err, files) {
    // console.log(files);
    //files是文件名的数组，并不是文件的数组，表示./canvas-svg这个文件夹中的所有东西，包括文件和文件夹
    for (var i = 0; i < files.length; i ++) {
      console.log(files[i]);
      (function(i){
        var filename = files[i];
        //检查一文件的状态
        fs.stat('./canvas-svg/' + files[i], function(err, stats) {
          //如果是一个文件夹
          if (stats.isDirectory()) {
            folders.push(filename);
          }
          console.log(folders);
        });
      })(i);
    }
  });
  res.end('ok');
}).listen(3000, '192.168.80.250');
