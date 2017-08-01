'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (content) {
  var indented = content.split('\n').map(function (line) {
    return '  ' + line;
  }).join('\n');
  return 'import React from \'react\'\n\nexport default props => (\n' + indented + '\n)\n';
};