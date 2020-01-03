'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var BoardRow$ReasonReactExamples = require("./BoardRow.bs.js");

function setStatus(gameState) {
  if (typeof gameState === "number") {
    return "Draw";
  } else if (gameState.tag) {
    if (gameState[0]) {
      return "The winner is Circle";
    } else {
      return "The winner is Cross";
    }
  } else if (gameState[0]) {
    return "Circle is playing";
  } else {
    return "Cross is playing";
  }
}

function Board(Props) {
  var state = Props.state;
  var onMark = Props.onMark;
  var onRestart = Props.onRestart;
  var match = state.gameState;
  var tmp;
  var exit = 0;
  if (typeof match === "number" || match.tag) {
    exit = 1;
  } else {
    tmp = null;
  }
  if (exit === 1) {
    tmp = React.createElement("button", {
          className: "restart",
          onClick: onRestart
        }, "Restart");
  }
  return React.createElement("div", {
              className: "game-board"
            }, $$Array.of_list(List.mapi((function (index, row) {
                        return React.createElement(BoardRow$ReasonReactExamples.make, {
                                    gameState: state.gameState,
                                    row: row,
                                    onMark: onMark,
                                    index: index,
                                    key: String(index)
                                  });
                      }), state.board)), React.createElement("div", {
                  className: "status"
                }, setStatus(state.gameState)), tmp);
}

var make = Board;

exports.setStatus = setStatus;
exports.make = make;
/* react Not a pure module */
