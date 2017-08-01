#!/usr/bin/env node
'use strict';

require('babel-polyfill');

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _package = require('../package.json');

var _convertFile = require('./convertFile');

var _convertFile2 = _interopRequireDefault(_convertFile);

var _buildOptions = require('./buildOptions');

var _buildOptions2 = _interopRequireDefault(_buildOptions);

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version(_package.version).usage('[options] <file> [otherFiles...]').option('-d, --output-dir [dir]', 'Output directory').option('-q, --quotes', 'Use double quotes instead of simple quotes for surround attributes').option('-p, --prefix', 'Result file name prefix').option('-f, --files', 'Input files').parse(process.argv);

if (!_commander2.default.args.length) {
  console.log('No file specified.'); // eslint-disable-line no-console
  process.exit(1);
}
var files = [];

if (_commander2.default.files && _commander2.default.files.length > 0) {
  files = _commander2.default.files;
} else {
  files = _commander2.default.args;
}

var options = (0, _buildOptions2.default)(_commander2.default);

if (files.length === 1 && !_fs2.default.existsSync(files[0])) {
  files = _glob2.default.sync(files[0]);
}
files.reduce(function (promise, file) {
  return promise.then(function () {
    return (0, _convertFile2.default)(file, options);
  });
}, Promise.resolve()).catch(function (err) {
  console.log(err.stack); // eslint-disable-line no-console
  process.exit(1);
});