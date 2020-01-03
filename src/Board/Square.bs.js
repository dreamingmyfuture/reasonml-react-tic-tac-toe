'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");

function getClass(gameState, field) {
  if (typeof gameState === "number" || !gameState.tag) {
    return "square";
  } else {
    var match = Caml_obj.caml_equal(field, /* Marked */[gameState[0]]);
    if (match) {
      return "winner square";
    } else {
      return "square";
    }
  }
}

function isFinished(value) {
  if (typeof value === "number" || !value.tag) {
    return false;
  } else {
    return true;
  }
}

function toValue(field) {
  if (field) {
    if (field[0]) {
      return "O";
    } else {
      return "X";
    }
  } else {
    return "";
  }
}

function Square(Props) {
  var value = Props.value;
  var gameState = Props.gameState;
  var onMark = Props.onMark;
  return React.createElement("button", {
              className: getClass(gameState, value),
              disabled: isFinished(gameState),
              onClick: (function (_evt) {
                  return Curry._1(onMark, /* () */0);
                })
            }, toValue(value));
}

var make = Square;

exports.getClass = getClass;
exports.isFinished = isFinished;
exports.toValue = toValue;
exports.make = make;
/* react Not a pure module */
