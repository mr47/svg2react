'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFile = readFile;
exports.writeFile = writeFile;
exports.finalFileName = finalFileName;
exports.resolveFile = resolveFile;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readFile(path) {
  return new Promise(function (resolve, reject) {
    _fs2.default.readFile(path, { encoding: 'utf8' }, function (err, file) {
      if (err) {
        return reject(err);
      }
      resolve(file);
    });
  });
}

function writeFile(path, content) {
  return new Promise(function (resolve, reject) {
    _fs2.default.writeFile(path, content, function (err) {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

function finalFileName(filePath, filePrefix) {
  var final = filePath.substr(filePath.lastIndexOf('/') + 1);
  final = final.replace(/\.svg$/, '');
  if (filePrefix) {
    final = final + '.' + filePrefix;
  } else {
    final = final + '.js';
  }
  return final;
}

function resolveFile(p) {
  if (!p.startsWith('/') && !p.startsWith('~')) {
    p = _path2.default.resolve(process.cwd(), p);
  }
  return p;
}