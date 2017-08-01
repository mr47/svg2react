'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _convertSVG = require('./convertSVG');

var _convertSVG2 = _interopRequireDefault(_convertSVG);

var _fs = require('./fs');

var fs = _interopRequireWildcard(_fs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(filePath, options) {
    var content, converted, fileName, finalFilePath;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:

            filePath = fs.resolveFile(filePath);

            _context.next = 3;
            return fs.readFile(filePath);

          case 3:
            content = _context.sent;
            _context.next = 6;
            return (0, _convertSVG2.default)(content, options);

          case 6:
            converted = _context.sent;
            fileName = fs.finalFileName(filePath, options.filePrefix);
            finalFilePath = _path2.default.resolve(options.outputDir, fileName);
            _context.next = 11;
            return fs.writeFile(finalFilePath, converted);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function convertFile(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return convertFile;
}();