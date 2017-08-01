'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applySVGO;

var _svgo = require('svgo');

var _svgo2 = _interopRequireDefault(_svgo);

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function applySVGO(svg) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


  var svgoOptions = (0, _merge2.default)({
    js2svg: {
      pretty: true,
      indent: 2
    },
    plugins: [{ removeXMLNS: true }, { removeDimensions: true }, { removeScriptElement: true }, { removeDimensions: true }, { removeTitle: true }, { convertStyleToAttrs: false }, { removeStyleElement: true }, { sortAttrs: true }]
  }, options.svgo || {});

  return new Promise(function (resolve) {

    var svgo = new _svgo2.default(svgoOptions);

    svgo.optimize(svg, function (res) {
      return resolve(res.data);
    });
  });
}