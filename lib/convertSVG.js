'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flow = require('lodash/flow');

var _flow2 = _interopRequireDefault(_flow);

var _applySVGO = require('./applySVGO');

var _applySVGO2 = _interopRequireDefault(_applySVGO);

var _reactTemplate = require('./reactTemplate');

var _reactTemplate2 = _interopRequireDefault(_reactTemplate);

var _indentAttributes = require('./indentAttributes');

var _indentAttributes2 = _interopRequireDefault(_indentAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(svg) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var cleaned;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _applySVGO2.default)(svg, options);

          case 2:
            cleaned = _context.sent;
            return _context.abrupt('return', (0, _flow2.default)([function (c) {
              return (0, _indentAttributes2.default)(c, options);
            }, function (c) {
              return (0, _reactTemplate2.default)(c, options);
            }])(cleaned));

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function convertSVG(_x) {
    return _ref.apply(this, arguments);
  }

  return convertSVG;
}();