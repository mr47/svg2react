'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildOptions;

var _fs = require('./fs');

var fs = _interopRequireWildcard(_fs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function buildOptions(program) {
  return {
    outputDir: program.outputDir ? fs.resolveFile(program.outputDir) : process.cwd(),
    doubleQuotes: !!program.quotes,
    filePrefix: program.prefix
  };
}