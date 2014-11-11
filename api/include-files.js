/**
 * Created by arobles on 11/10/14.
 */
    'use strict';
var fs = require('fs');
module.exports = function (options) {
    var ext = options.file || 'js',
        jsFiles = new RegExp(".(" + ext + ")$", "i"),
        tmpFile,
        i;
    options.filesRoutes = {};
    for(i = options.folder.length - 1; i >= 0; i--) {
        fs.readdirSync(__dirname + '/' + options.folder[i]).forEach(function (fileName) {
            if(jsFiles.test(fileName)) {
                tmpFile = require(__dirname + '/' + options.folder[i] + '/' + fileName);
                if(typeof tmpFile === 'function') {
                    options.filesRoutes[options.folder[i]] = tmpFile.call(options.filesRoutes, options.app);
                } else if(typeof tmpFile  === 'object') {
                    options.filesRoutes[options.folder[i]] = tmpFile;
                }
            }
        });
    }
};
