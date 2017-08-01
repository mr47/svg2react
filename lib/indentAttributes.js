'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = indentAttributes;

var _repeat = require('lodash/repeat');

var _repeat2 = _interopRequireDefault(_repeat);

var _camelCase = require('lodash/camelCase');

var _camelCase2 = _interopRequireDefault(_camelCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function strToStyle(str) {
  var props = str.substring('style="'.length, str.length - 1).split(';');
  var indent = applyIndent(2);
  return ['style={{'].concat(_toConsumableArray(props.map(function (p) {
    var _p$split = p.split(':'),
        _p$split2 = _slicedToArray(_p$split, 2),
        key = _p$split2[0],
        val = _p$split2[1];

    return indent((0, _camelCase2.default)(key) + ': \'' + val + '\',');
  })), ['}}']);
}

function applyIndent(indentLevel) {
  return function (str) {
    return '' + (0, _repeat2.default)(' ', indentLevel) + str;
  };
}

function indentAttributes(svg, options) {
  return svg.split('\n').reduce(function (acc, line) {
    var r = line.match(/(<\/?)([^ ]*) ?([^/]*)(\/?>)/);
    if (!r) {
      return acc;
    }
    var isClosing = r[1] === '</';
    var isAutoclosing = r[4] === '/>';
    var tag = r[2];
    var attrsStr = r[3];
    var indentLevel = line.match(/^( *)/)[1].length;

    var indentParent = applyIndent(indentLevel);
    var indentChild = applyIndent(indentLevel + 2);

    var rAttr = attrsStr.match(/[^=]*="[^"]*"/g) || [];

    var attributes = rAttr.map(function (str) {
      str = str.trim();
      if (!options.doubleQuotes) {
        str = str.replace(/"/g, '\'');
      }

      var _str$split = str.split('='),
          _str$split2 = _slicedToArray(_str$split, 2),
          key = _str$split2[0],
          val = _str$split2[1];

      if (key === 'class') {
        return null;
      }
      if (key === 'style') {
        return strToStyle(str).map(indentChild).join('\n');
      }
      return indentChild((0, _camelCase2.default)(key) + '=' + val);
    }).filter(function (e) {
      return e;
    }).join('\n');

    return acc.concat((isClosing ? [indentParent('</' + tag + '>')] : [indentParent('<' + tag), attributes, !isClosing && tag === 'svg' ? indentChild('{...props}') : null, indentParent(isAutoclosing ? '/>' : '>')]).filter(function (e) {
      return e;
    }).join('\n'));
  }, []).join('\n');
}