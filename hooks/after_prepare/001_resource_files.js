#!/usr/bin/env node

// Acá se agregan como diccionario los replace
var filestocopy = [{
  "config/icon-mdpi.png":
  "platforms/android/res/drawable-mdpi/icon.png"
}, {
  "config/icon-hdpi.png":
  "platforms/android/res/drawable-hdpi/icon.png"
}, {
  "config/icon-xhdpi.png":
  "platforms/android/res/drawable-xhdpi/icon.png"
}, {
  "config/icon-xxhdpi.png":
  "platforms/android/res/drawable-xxhdpi/icon.png"
}];

var fs = require('fs');
var path = require('path');

var rootdir = process.argv[2];

filestocopy.forEach(function(obj) {
    Object.keys(obj).forEach(function(key) {
        var val = obj[key];
        var srcfile = path.join(rootdir, key);
        var destfile = path.join(rootdir, val);
        console.log("copying "+srcfile+" to "+destfile);
        var destdir = path.dirname(destfile);
        if (fs.existsSync(srcfile) && fs.existsSync(destdir)) {
            fs.createReadStream(srcfile).pipe(
               fs.createWriteStream(destfile));
        }
    });
});
