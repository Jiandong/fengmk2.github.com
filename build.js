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
var fs = require('fs');

var page_layout = path.join(__dirname, 'page-layout.html');
var layout = path.join(__dirname, 'layout.html');

ndir.walk('./', function(dir, files, dirs) {
  if (dir.indexOf('/.git') >= 0) {
    return;
  }
  for (var i = 0, l = files.length; i < l; i++) {
    var info = files[i];
    if (info[1].isFile()) {
      var ext = path.extname(info[0]);
      var name = path.basename(info[0]);
      if (ext === '.md') {
        if (info[0].indexOf('/ppt/') >= 0) {
          var out = mdit.toSlides(info[0]);
          console.log(out);
        } else if (name === 'index.md') {
          var out = mdit.toHTML(info[0], layout);
        } else {
          var out = mdit.toHTML(info[0], page_layout);
        }
        
      }
    }
  }
  var indexfile = path.join(dir, 'index.md');
  var needIndex = dir !== __dirname;
  if (needIndex) {
    if (dir.indexOf('/blog') < 0) {
      return;
    }
    var dirurl = dir.replace(__dirname, '');
    var list = '#Index of ' + dirurl + '\n';
    for (var i = 0, l = files.length; i < l; i++) {
      var info = files[i];
      var url = info[0].replace(__dirname, '');
      var ext = path.extname(info[0]);
      var name = path.basename(info[0]);
      var isDir = info[1].isDirectory();
      if (isDir) {
        name = url + '/';
      } else if (name !== 'index.html' && ext === '.html') {
        var mdpath = info[0].replace(/\.html$/, '.md');
        if (path.existsSync(mdpath)) {
          var md = fs.readFileSync(mdpath, 'utf-8');
          var title = md.split('\n', 1)[0].substring(2); // skip `# `
          name = title;
        }
      } else {
        name = null;
      }
      if (name) {
        list += '* [' + name + '](' + url + ')\n';
      }
    }
    // console.log(list)
    fs.writeFileSync(indexfile, list);
    mdit.toHTML(indexfile, page_layout);
    fs.unlinkSync(indexfile);
  }
});

