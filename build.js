/*!
 * mk2blog - bulid.js
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var mdit = require('../mdit');
var ndir = require('../ndir');
var path = require('path');

var layout = path.join(__dirname, 'layout.html');

ndir.walk('./', function(dir, files) {
  var needIndex = !path.existsSync(path.join(dir, 'index.html'));
  for (var i = 0, l = files.length; i < l; i++) {
    var info = files[i];
    if (info[1].isFile()) {
      var ext = path.extname(info[0]);
      if (ext === '.md') {
        // console.log(info[0], '==>')
        // var out = mdit.toHTML(info[0], layout);
        // console.log(out);
      }
    }
  }
});

