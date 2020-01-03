'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Square$ReasonReactExamples = require("./Square.bs.js");

function BoardRow(Props) {
  var gameState = Props.gameState;
  var row = Props.row;
  var onMark = Props.onMark;
  var index = Props.index;
  return React.createElement("div", {
              className: "board-row"
            }, $$Array.of_list(List.mapi((function (ind, value) {
                        var id = String(index) + String(ind);
                        return React.createElement(Square$ReasonReactExamples.make, {
                                    value: value,
                                    gameState: gameState,
                                    onMark: (function (param) {
                                        return Curry._1(onMark, id);
                                      }),
                                    key: id
                                  });
                      }), row)));
}

var make = BoardRow;

exports.make = make;
/* react Not a pure module */
