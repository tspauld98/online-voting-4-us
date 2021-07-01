var _Object$create = require("@babel/runtime-corejs3/core-js/object/create");

var setPrototypeOf = require("./setPrototypeOf");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = _Object$create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}

module.exports = _inheritsLoose;